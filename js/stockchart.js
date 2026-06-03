/* ====================================================
   BKHN 2026 — Live Candlestick Chart
   Biểu đồ biến động điểm chuẩn kiểu chứng khoán
   - Nút bong bóng góc dưới phải
   - Panel overlay đẹp toàn màn hình
   - Candlestick vẽ tay với OHLC rõ ràng
   - Realtime từ Firebase contributions
   ==================================================== */

(function () {
  'use strict';

  /* ══════════════════════════════════════════════════
     STATE
  ══════════════════════════════════════════════════ */
  var isOpen        = false;
  var mainChart     = null;
  var tickerRAF     = null;
  var candleMap     = {};   // { code: { open, close, high, low, delta, prevDelta, currDelta, ts } }
  var recentCodes   = [];   // codes vừa biến động
  var activeMethod  = 'tsa';
  var prevSnapshot  = {};   // snapshot delta trước mỗi lần update
  var lastUpdateTs  = null; // thời gian cập nhật cuối

  // Phóng đại delta-of-delta (biến động của biến động) để nến hiện rõ
  var AMPLIFY = 12;

  /* ══════════════════════════════════════════════════
     UTILS
  ══════════════════════════════════════════════════ */
  function fmt(n, d) { return parseFloat(n).toFixed(d !== undefined ? d : 2); }
  function fmtTime(ts) {
    var d = new Date(ts || Date.now());
    return d.getHours().toString().padStart(2,'0') + ':' + d.getMinutes().toString().padStart(2,'0') + ':' + d.getSeconds().toString().padStart(2,'0');
  }
  function sign(n) { return n >= 0 ? '+' : ''; }

  // Vẽ rounded rect không cần roundRect API
  function rr(ctx, x, y, w, h, r) {
    if (w < 2*r) r = w/2; if (h < 2*r) r = h/2;
    ctx.beginPath();
    ctx.moveTo(x+r,y); ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath();
  }

  function colorOf(d) { return d >= 0 ? '#10b981' : '#ef4444'; }
  function bgOf(d)    { return d >= 0 ? 'rgba(16,185,129,0.18)' : 'rgba(239,68,68,0.18)'; }
  function iconOf(d)  { return d >= 0 ? '▲' : '▼'; }

  /* ══════════════════════════════════════════════════
     LƯU SNAPSHOT DELTA TRƯỚC KHI RECALCULATE
  ══════════════════════════════════════════════════ */
  function savePrevSnapshot() {
    if (typeof MAJORS === 'undefined') return;
    MAJORS.forEach(function(m) {
      var mData = m[activeMethod];
      if (!mData || mData.y25 == null || mData.pred == null) return;
      // Lưu delta hiện tại = pred - y25
      prevSnapshot[m.code] = parseFloat((parseFloat(mData.pred) - parseFloat(mData.y25)).toFixed(2));
    });
  }

  /* ══════════════════════════════════════════════════
     XÂY DỰNG NẬN TỪ SỰ THAY ĐỔI ĐIỂM CHUẨN
     open      = Chuẩn 2025
     close     = Dự đoán 2026
     delta     = close - open = mức biến động
     Nếu delta > 0 : dự đoán tăng so với 2025 → xanh
     Nếu delta < 0 : dự đoán giảm so với 2025 → đỏ
  ══════════════════════════════════════════════════ */
  function buildCandleMap(latestTs) {
    latestTs = latestTs || {};
    if (typeof MAJORS === 'undefined') return;
    var now = Date.now();
    var codesToUpdate = recentCodes.length ? recentCodes : [];

    if (!Object.keys(candleMap).length) {
      MAJORS.forEach(function(m) {
        var mData = m[activeMethod];
        if (!mData || mData.y25 == null || mData.pred == null) return;
        var y25 = parseFloat(mData.y25);
        var pred = parseFloat(mData.pred);
        var change = parseFloat((pred - y25).toFixed(2));
        
        candleMap[m.code] = {
          code: m.code, name: m.name,
          open: y25, close: pred,
          high: Math.max(y25, pred) + Math.abs(change) * 0.2 + 0.05,
          low: Math.min(y25, pred) - Math.abs(change) * 0.2 - 0.05,
          prevDelta: change, currDelta: change,
          diff: 0,
          delta: change, ts: null
        };
      });
      return;
    }

    codesToUpdate.forEach(function(code) {
      var m = typeof MAJORS !== 'undefined' ? MAJORS.find(function(x){ return x.code === code; }) : null;
      if (!m) return;
      var mData = m[activeMethod];
      if (!mData || mData.y25 == null || mData.pred == null) return;
      var y25 = parseFloat(mData.y25);
      var pred = parseFloat(mData.pred);
      var change = parseFloat((pred - y25).toFixed(2));
      var prevDelta = (prevSnapshot[code] !== undefined) ? prevSnapshot[code] : change;
      var diff = parseFloat((change - prevDelta).toFixed(2));
      
      candleMap[code] = {
        code:      code,
        name:      m.name,
        open:      y25,
        close:     pred,
        high:      Math.max(y25, pred) + Math.abs(change) * 0.2 + 0.05,
        low:       Math.min(y25, pred) - Math.abs(change) * 0.2 - 0.05,
        prevDelta: prevDelta,
        currDelta: change,
        diff:      diff,
        delta:     change,
        ts:        latestTs[code] || lastUpdateTs || now
      };
    });
  }

  /* ══════════════════════════════════════════════════
     FIREBASE → cập nhật nến khi có đóng góp mới
  ══════════════════════════════════════════════════ */
  function onFirebaseUpdate(contribs) {
    if (!contribs || !contribs.length) return;
    var changed = [];
    var latestTs = {};
    contribs.slice(-15).forEach(function(c) {
      if (!c || !c.aspirations) return;
      var cTime = c.timestamp || Date.now();
      c.aspirations.forEach(function(code) {
        if (changed.indexOf(code) === -1) changed.push(code);
        latestTs[code] = Math.max(latestTs[code] || 0, cTime);
      });
    });
    recentCodes = changed;
    // Đợi 400ms để app.js recalculatePredictions() xong rồi rebuild
    setTimeout(function() {
      buildCandleMap(latestTs);
      updateBubbleBadge(changed.length);
      if (isOpen) { redrawChart(); buildSidebar(); buildTicker(); buildStats(); }
    }, 400);
  }

  /* ══════════════════════════════════════════════════
     BUBBLE BADGE (bong bóng góc phải)
  ══════════════════════════════════════════════════ */
  function updateBubbleBadge(count) {
    var badge = document.getElementById('scBubbleBadge');
    if (!badge) return;
    badge.textContent = count > 9 ? '9+' : count;
    badge.style.display = 'inline-block';
    // Nhấp nháy
    badge.style.animation = 'none';
    setTimeout(function() { badge.style.animation = 'scPing .6s ease 3'; }, 10);
  }

  /* ══════════════════════════════════════════════════
     VẼ CANDLESTICK CHART
  ══════════════════════════════════════════════════ */
  function redrawChart() {
    var canvas = document.getElementById('scCanvas');
    if (!canvas) return;

    var codes = Object.keys(candleMap);
    if (!codes.length) { drawPlaceholder(canvas); return; }

    // Sắp xếp theo thời gian mới nhất, lấy 18
    codes.sort(function(a,b) {
      var tsA = candleMap[a].ts || 0;
      var tsB = candleMap[b].ts || 0;
      if (tsB !== tsA) return tsB - tsA;
      return Math.abs(candleMap[b].delta) - Math.abs(candleMap[a].delta);
    });
    codes = codes.slice(0, 18);
    var candles = codes.map(function(c) { return candleMap[c]; });

    if (mainChart) { mainChart.destroy(); mainChart = null; }
    var ctx = canvas.getContext('2d');

    // ── Plugin vẽ nến thật ──────────────────────────
    var candlePlugin = {
      id: 'bkhnCandle',
      afterDatasetsDraw: function(chart) {
        var c2 = chart.ctx, yS = chart.scales.y;
        c2.save();

        candles.forEach(function(cd, i) {
          var bar = chart.getDatasetMeta(0).data[i];
          if (!bar) return;

          var x = bar.x;
          var isUp = cd.delta >= 0;
          var col  = isUp ? '#10b981' : '#ef4444';
          var glow = isUp ? 'rgba(16,185,129,0.35)' : 'rgba(239,68,68,0.35)';

          // Không phóng đại vì nến thể hiện điểm thực tế (Chuẩn 2025 -> Dự báo 2026)
          var ampOpen  = cd.open;
          var ampClose = cd.close;
          var ampHigh  = cd.high;
          var ampLow   = cd.low;
          // Đảm bảo có thân nến tối thiểu
          if (Math.abs(ampClose - ampOpen) < 0.25) {
            ampClose = ampOpen + (isUp ? 0.25 : -0.25);
            ampHigh  = Math.max(ampClose, ampOpen) + 0.15;
            ampLow   = Math.min(ampClose, ampOpen) - 0.15;
          }

          var yOpen  = yS.getPixelForValue(ampOpen);
          var yClose = yS.getPixelForValue(ampClose);
          var yHigh  = yS.getPixelForValue(ampHigh);
          var yLow   = yS.getPixelForValue(ampLow);

          var top    = Math.min(yOpen, yClose);
          var bot    = Math.max(yOpen, yClose);
          var bodyH  = Math.max(bot - top, 6);
          var bodyW  = Math.min(Math.max(bar.width * 0.85, 14), 32);

          // ── Glow shadow ───────────────────────────
          c2.shadowColor = glow;
          c2.shadowBlur  = 12;

          // ── Wick (bóng) ───────────────────────────
          c2.strokeStyle = col; c2.lineWidth = 1.5;
          c2.beginPath();
          c2.moveTo(x, yHigh); c2.lineTo(x, top);
          c2.moveTo(x, bot);   c2.lineTo(x, yLow);
          c2.stroke();

          // ── Body ──────────────────────────────────
          // Gradient trên thân nến
          var grad = c2.createLinearGradient(x - bodyW/2, top, x + bodyW/2, bot);
          if (isUp) {
            grad.addColorStop(0, 'rgba(16,185,129,0.95)');
            grad.addColorStop(1, 'rgba(5,150,105,0.85)');
          } else {
            grad.addColorStop(0, 'rgba(239,68,68,0.95)');
            grad.addColorStop(1, 'rgba(185,28,28,0.85)');
          }
          c2.fillStyle = grad;
          rr(c2, x - bodyW/2, top, bodyW, bodyH, 4); c2.fill();

          // ── Đường viền sáng ───────────────────────
          c2.shadowBlur = 0;
          c2.strokeStyle = isUp ? 'rgba(52,211,153,0.6)' : 'rgba(252,165,165,0.5)';
          c2.lineWidth = 0.8;
          rr(c2, x - bodyW/2, top, bodyW, bodyH, 4); c2.stroke();

        });
        c2.restore();
      }
    };

    // Dùng scatter chart với bar ẩn chỉ để giữ axis
    mainChart = new Chart(ctx, {
      type: 'bar',
      plugins: [candlePlugin],
      data: {
        labels: candles.map(function(cd) {
          var n = cd.name.length > 16 ? cd.name.substring(0,14) + '…' : cd.name;
          return [cd.code, n];
        }),
        datasets: [{
          // Dataset ảo 1: để Chart.js tự tính min/max y-axis dựa vào high
          data: candles.map(function(cd) { return cd.high; }),
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0
        }, {
          // Dataset ảo 2: để Chart.js tự tính min/max y-axis dựa vào low
          data: candles.map(function(cd) { return cd.low; }),
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: { top: 16, bottom: 12, left: 6, right: 6 } },
        animation: { duration: 450, easing: 'easeOutCubic' },
        plugins: {
          legend: { display: false },
          tooltip: {
            enabled: true,
            backgroundColor: 'rgba(10,6,6,0.96)',
            titleColor: '#fff',
            bodyColor: 'rgba(255,255,255,0.78)',
            borderColor: 'rgba(200,0,26,0.5)',
            borderWidth: 1,
            cornerRadius: 12,
            padding: 14,
            titleFont: { family: '"Be Vietnam Pro",sans-serif', weight: '900', size: 12 },
            bodyFont:  { family: '"Be Vietnam Pro",sans-serif', size: 11 },
            displayColors: false,
            callbacks: {
              title: function(items) {
                var cd = candles[items[0].dataIndex];
                return cd.name + ' (' + cd.code + ')';
              },
              label: function(item) {
                var cd = candles[item.dataIndex];
                var arr = cd.delta >= 0 ? '▲' : '▼';
                var lines = [
                  '  Chuẩn 2025: ' + fmt(cd.open)  + ' điểm',
                  '  Dự báo 2026: ' + fmt(cd.close) + ' điểm',
                  '  ───────────────────────────',
                  '  Biến động: ' + arr + ' ' + sign(cd.delta) + fmt(cd.delta) + ' điểm'
                ];
                if (cd.diff) {
                  lines.push('  Thay đổi: ' + (cd.diff > 0 ? '▲ ' : '▼ ') + sign(cd.diff) + fmt(cd.diff) + ' đ');
                }
                if (cd.ts) {
                  lines.push('  🕐 Lúc: ' + fmtTime(cd.ts));
                }
                return lines;
              }
            }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255,255,255,0.04)', drawBorder: false },
            ticks: {
              color: 'rgba(255,255,255,0.5)',
              font: { family: '"Be Vietnam Pro",sans-serif', size: 9 },
              maxRotation: 30, minRotation: 0
            }
          },
          y: {
            grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
            ticks: {
              color: 'rgba(255,255,255,0.45)',
              font: { family: '"Be Vietnam Pro",sans-serif', size: 9 },
              callback: function(v) { return fmt(v, 1); }
            }
          }
        }
      }
    });
  }

  function drawPlaceholder(canvas) {
    if (mainChart) { mainChart.destroy(); mainChart = null; }
    var ctx = canvas.getContext('2d');
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Vẽ nến mẫu mờ
    var W = canvas.width, H = canvas.height;
    var mockCandles = [
      { x: 0.15, top: 0.3, bot: 0.6, wick: [0.2, 0.7], up: true },
      { x: 0.3,  top: 0.4, bot: 0.55, wick: [0.35, 0.65], up: false },
      { x: 0.45, top: 0.25, bot: 0.5, wick: [0.15, 0.6], up: true },
      { x: 0.6,  top: 0.35, bot: 0.6, wick: [0.3, 0.7], up: false },
      { x: 0.75, top: 0.2,  bot: 0.45, wick: [0.1, 0.55], up: true },
      { x: 0.88, top: 0.3,  bot: 0.5, wick: [0.2, 0.6], up: true }
    ];
    mockCandles.forEach(function(c) {
      var x = c.x * W;
      var col = c.up ? 'rgba(16,185,129,0.15)' : 'rgba(239,68,68,0.15)';
      var col2 = c.up ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
      ctx.strokeStyle = col2; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, c.wick[0]*H); ctx.lineTo(x, c.wick[1]*H); ctx.stroke();
      ctx.fillStyle = col;
      rr(ctx, x-8, c.top*H, 16, (c.bot-c.top)*H, 3); ctx.fill();
    });

    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '600 13px "Be Vietnam Pro",sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Đang chờ đóng góp... Biểu đồ cập nhật realtime', W/2, H/2);
    ctx.font = '400 11px "Be Vietnam Pro",sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.fillText('Hãy nhập điểm và đóng góp để kích hoạt biểu đồ!', W/2, H/2 + 22);
  }

  /* ══════════════════════════════════════════════════
     SIDEBAR (danh sách ngành biến động)
  ══════════════════════════════════════════════════ */
  function buildSidebar() {
    var el = document.getElementById('scSidebar');
    if (!el) return;

    var codes = Object.keys(candleMap).sort(function(a,b) {
      var tsA = candleMap[a].ts || 0;
      var tsB = candleMap[b].ts || 0;
      if (tsB !== tsA) return tsB - tsA;
      return Math.abs(candleMap[b].delta) - Math.abs(candleMap[a].delta);
    }).slice(0, 12);

    if (!codes.length) {
      el.innerHTML = '<div style="color:rgba(255,255,255,0.3);text-align:center;padding:24px 0;font-size:12px;">Chưa có biến động nào được ghi nhận.<br>Hãy là người đầu tiên đóng góp!</div>';
      return;
    }

    el.innerHTML = codes.map(function(code) {
      var cd = candleMap[code];
      var isUp = cd.delta >= 0;
      var col  = colorOf(cd.delta);
      var bg   = bgOf(cd.delta);
      var bdr  = isUp ? 'rgba(16,185,129,0.25)' : 'rgba(239,68,68,0.25)';
      var isNew = recentCodes.indexOf(code) !== -1;
      var name = cd.name.length > 22 ? cd.name.substring(0,20) + '…' : cd.name;
      // Hiển thị open → close rõ ràng
      var openTxt  = fmt(cd.open);
      var closeTxt = fmt(cd.close);
      var arrowCol = isUp ? '#34d399' : '#f87171';
      var timeStr  = (cd.ts && isNew) ? fmtTime(cd.ts) : (cd.ts ? fmtTime(cd.ts) : '');

      return '<div style="display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;' +
        'background:' + bg + ';border:1px solid ' + bdr + ';margin-bottom:7px;' +
        (isNew ? 'animation:scPing .5s ease 2;' : '') + '">' +
        // Icon nến mini
        '<div style="display:flex;flex-direction:column;align-items:center;flex-shrink:0;gap:1px;">' +
          '<div style="width:2px;height:6px;background:' + col + ';border-radius:1px;"></div>' +
          '<div style="width:9px;height:16px;background:' + col + ';border-radius:2px;opacity:.9;"></div>' +
          '<div style="width:2px;height:6px;background:' + col + ';border-radius:1px;"></div>' +
        '</div>' +
        // Info
        '<div style="flex:1;min-width:0;">' +
          '<div style="display:flex;align-items:center;gap:5px;margin-bottom:2px;">' +
            '<span style="font-size:12px;font-weight:900;color:' + col + ';">' + code + '</span>' +
            (isNew ? '<span style="font-size:8px;background:rgba(34,197,94,0.2);color:#4ade80;padding:1px 5px;border-radius:3px;font-weight:800;letter-spacing:.5px;">MỚI</span>' : '') +
          '</div>' +
          '<div style="font-size:10px;color:rgba(255,255,255,0.45);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:3px;">' + name + '</div>' +
          // open → close với màu rõ
          '<div style="display:flex;align-items:center;gap:4px;">' +
            '<span style="font-size:10px;color:rgba(255,255,255,0.5);font-variant-numeric:tabular-nums;">' + openTxt + '</span>' +
            '<span style="font-size:10px;color:' + arrowCol + ';font-weight:900;">→</span>' +
            '<span style="font-size:10px;color:' + col + ';font-weight:800;font-variant-numeric:tabular-nums;">' + closeTxt + '</span>' +
          '</div>' +
        '</div>' +
        // Phải: delta + thời gian
        '<div style="text-align:right;flex-shrink:0;">' +
          '<div style="font-size:14px;font-weight:900;color:' + col + ';">' + iconOf(cd.delta) + ' ' + sign(cd.delta) + fmt(cd.delta) + '</div>' +
          (cd.diff ? '<div style="font-size:10px;color:' + (cd.diff > 0 ? '#34d399' : '#f87171') + ';font-weight:bold;margin-top:2px;">' + (cd.diff > 0 ? '▲ ' : '▼ ') + sign(cd.diff) + fmt(cd.diff) + ' đ</div>' : '') +
          (timeStr ? '<div style="font-size:9px;color:rgba(255,255,255,0.4);margin-top:2px;">🕐 ' + timeStr + '</div>' : '') +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ══════════════════════════════════════════════════
     STATS HEADER
  ══════════════════════════════════════════════════ */
  function buildStats() {
    var el = document.getElementById('scStatsRow');
    if (!el) return;

    var codes = Object.keys(candleMap);
    var upCount = 0, downCount = 0, flatCount = 0, totalDelta = 0;
    codes.forEach(function(c) {
      var d = candleMap[c].delta;
      if (d > 0.05) upCount++;
      else if (d < -0.05) downCount++;
      else flatCount++;
      totalDelta += d;
    });
    var avgDelta = codes.length ? (totalDelta / codes.length) : 0;
    var marketCol = avgDelta > 0.05 ? '#10b981' : avgDelta < -0.05 ? '#ef4444' : '#f59e0b';

    // Lấy count từ liveCount (global app.js) hoặc scContribCount
    var liveCountEl = document.getElementById('liveContributorCount');
    var liveCount   = liveCountEl ? liveCountEl.textContent : '—';

    el.innerHTML =
      stat('👥 Đóng góp', liveCount, '#6366f1') +
      stat('📈 Tăng', upCount, '#10b981') +
      stat('📉 Giảm', downCount, '#ef4444') +
      stat('▶ Ổn định', flatCount, '#f59e0b') +
      stat('∆ TB', (avgDelta >= 0 ? '+' : '') + fmt(avgDelta), marketCol);
  }

  function stat(label, val, col) {
    return '<div style="display:flex;flex-direction:column;align-items:center;padding:10px 16px;' +
      'background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);border-radius:10px;min-width:80px;">' +
      '<div style="font-size:10px;color:rgba(255,255,255,0.4);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px;">' + label + '</div>' +
      '<div style="font-size:16px;font-weight:900;color:' + col + ';">' + val + '</div>' +
    '</div>';
  }

  /* ══════════════════════════════════════════════════
     TICKER TAPE
  ══════════════════════════════════════════════════ */
  function buildTicker() {
    var inner = document.getElementById('scTickerInner');
    if (!inner) return;

    var codes = Object.keys(candleMap);
    var items;
    if (!codes.length && typeof MAJORS !== 'undefined') {
      // Fallback: hiện dữ liệu gốc của tất cả ngành
      items = MAJORS.slice(0,40).map(function(m) {
        var d = m.tsa ? parseFloat((m.tsa.pred - m.tsa.y25).toFixed(2)) : 0;
        return tickerItem(m.code, d, false);
      });
    } else {
      items = codes.map(function(c) {
        var cd = candleMap[c];
        return tickerItem(c, cd.delta, recentCodes.indexOf(c) !== -1);
      });
    }

    var html = items.join('');
    inner.innerHTML = html + html;
    if (!tickerRAF) startTickerAnim();
  }

  function tickerItem(code, delta, isNew) {
    var col = colorOf(delta);
    var ico = iconOf(delta);
    return '<span style="display:inline-flex;align-items:center;gap:5px;padding:0 16px;font-size:11px;font-weight:700;' +
      'color:' + col + ';border-right:1px solid rgba(255,255,255,0.07);height:100%;white-space:nowrap;">' +
      code + ' <strong>' + ico + ' ' + sign(delta) + fmt(delta) + '</strong>' +
      (isNew ? '<span style="font-size:8px;background:rgba(34,197,94,0.2);color:#4ade80;padding:0 4px;border-radius:2px;margin-left:2px;">NEW</span>' : '') +
    '</span>';
  }

  function startTickerAnim() {
    var inner = document.getElementById('scTickerInner');
    if (!inner) return;
    var pos = 0;
    function tick() {
      var el = document.getElementById('scTickerInner');
      if (!el) { tickerRAF = null; return; }
      pos -= 0.55;
      var half = el.scrollWidth / 2;
      if (half > 0 && Math.abs(pos) >= half) pos = 0;
      el.style.transform = 'translateX(' + pos + 'px)';
      tickerRAF = requestAnimationFrame(tick);
    }
    tickerRAF = requestAnimationFrame(tick);
  }

  /* ══════════════════════════════════════════════════
     BUILD PANEL HTML
  ══════════════════════════════════════════════════ */
  function buildPanel() {
    if (document.getElementById('scPanel')) return;

    var panel = document.createElement('div');
    panel.id = 'scPanel';

    panel.innerHTML = [
      // ── Backdrop ─────────────────────────────────
      '<div id="scBackdrop" style="position:fixed;inset:0;background:rgba(0,0,0,0.55);z-index:899;backdrop-filter:blur(4px);transition:opacity .25s;"></div>',

      // ── Main panel ───────────────────────────────
      '<div id="scPanelBox" style="',
        'position:fixed;bottom:0;left:0;right:0;z-index:900;',
        'background:linear-gradient(160deg,#0a0614 0%,#130714 30%,#0a100e 70%,#0a0a14 100%);',
        'border-top:1px solid rgba(200,0,26,0.35);',
        'border-radius:24px 24px 0 0;',
        'box-shadow:0 -12px 60px rgba(0,0,0,0.7);',
        'transition:transform .3s cubic-bezier(.4,0,.2,1),opacity .25s;',
        'max-height:85vh;overflow-y:auto;',
      '">',

        // ── Handle bar ─────────────────────────────
        '<div style="display:flex;justify-content:center;padding:12px 0 4px;">',
          '<div style="width:40px;height:4px;border-radius:999px;background:rgba(255,255,255,0.15);"></div>',
        '</div>',

        // ── Header ─────────────────────────────────
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 24px 14px;border-bottom:1px solid rgba(255,255,255,0.06);">',
          '<div>',
            '<div style="display:flex;align-items:center;gap:10px;">',
              '<div style="width:8px;height:8px;border-radius:50%;background:#22c55e;animation:scLive 1.4s ease-in-out infinite;flex-shrink:0;"></div>',
              '<span style="font-size:16px;font-weight:900;color:#fff;letter-spacing:-.3px;">Biểu đồ Biến Động · Realtime</span>',
              '<span style="background:rgba(200,0,26,0.3);color:#fca5a5;font-size:10px;font-weight:800;padding:2px 8px;border-radius:4px;letter-spacing:.5px;border:1px solid rgba(200,0,26,0.4);">LIVE</span>',
            '</div>',
            '<div style="font-size:11px;color:rgba(255,255,255,0.35);margin-top:3px;margin-left:18px;">',
              'Nến xanh = điểm tăng &nbsp;·&nbsp; Nến đỏ = điểm giảm &nbsp;·&nbsp; Cập nhật khi có đóng góp mới',
            '</div>',
          '</div>',
          '<button id="scCloseBtn" style="background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);color:rgba(255,255,255,0.7);',
            'width:34px;height:34px;border-radius:50%;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;',
            'transition:all .2s;flex-shrink:0;">✕</button>',
        '</div>',

        // ── Ticker tape ────────────────────────────
        '<div style="display:flex;align-items:center;height:32px;border-bottom:1px solid rgba(255,255,255,0.05);overflow:hidden;">',
          '<div style="background:rgba(200,0,26,0.8);color:#fff;font-size:9px;font-weight:900;padding:0 12px;height:100%;',
            'display:flex;align-items:center;flex-shrink:0;letter-spacing:1.5px;border-right:1px solid rgba(255,255,255,0.1);">LIVE</div>',
          '<div style="flex:1;overflow:hidden;height:100%;min-width:0;">',
            '<div id="scTickerInner" style="display:inline-flex;align-items:center;height:100%;will-change:transform;"></div>',
          '</div>',
        '</div>',

        // ── Stats row ──────────────────────────────
        '<div id="scStatsRow" style="display:flex;gap:8px;padding:14px 20px;overflow-x:auto;flex-wrap:nowrap;border-bottom:1px solid rgba(255,255,255,0.05);scrollbar-width:none;"></div>',

        // ── Main area: chart + sidebar ─────────────
        '<div style="display:grid;grid-template-columns:1fr 300px;min-height:280px;" id="scGrid">',

          // Chart
          '<div style="padding:16px 16px 16px 20px;border-right:1px solid rgba(255,255,255,0.05);">',
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">',
              '<div style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.4);text-transform:uppercase;letter-spacing:.8px;">',
                '🕯 Biểu đồ nến (Candlestick) — OHLC',
              '</div>',
              '<div style="font-size:10px;color:rgba(255,255,255,0.25);font-style:italic;">Biến động được phóng đại ×' + AMPLIFY + ' để hiển thị rõ</div>',
            '</div>',
            '<div style="height:300px;position:relative;">',
              '<canvas id="scCanvas"></canvas>',
            '</div>',
          '</div>',

          // Sidebar
          '<div style="padding:14px;overflow-y:auto;max-height:400px;" id="scSidebarWrap">' ,
            '<div style="font-size:11px;font-weight:800;color:rgba(255,255,255,0.5);text-transform:uppercase;' +
              'letter-spacing:.8px;margin-bottom:10px;display:flex;align-items:center;gap:6px;">' +
              '<span>&#9889;</span>' +
              '<span>Ngành vừa biến động</span>' +
            '</div>' ,
            '<div id="scSidebar"></div>' ,
          '</div>' ,


        '</div>',

        // ── Footer note ────────────────────────────
        '<div style="padding:10px 20px 16px;display:flex;align-items:center;gap:8px;border-top:1px solid rgba(255,255,255,0.04);">',
          '<div style="width:6px;height:6px;border-radius:50%;background:#f59e0b;animation:scLive 2s ease-in-out infinite;flex-shrink:0;"></div>',
          '<div style="font-size:10px;color:rgba(255,255,255,0.25);">',
            'Biểu đồ tự động cập nhật khi cộng đồng đóng góp dữ liệu · Thuật toán crowdsourcing BKHN 2026',
          '</div>',
        '</div>',

      '</div>' // scPanelBox
    ].join('');

    document.body.appendChild(panel);

    // Close events
    document.getElementById('scCloseBtn').addEventListener('click', closePanel);
    document.getElementById('scBackdrop').addEventListener('click', closePanel);
    panel.style.display = 'none';
  }

  /* ══════════════════════════════════════════════════
     TOGGLE PANEL
  ══════════════════════════════════════════════════ */
  function openPanel() {
    var panel = document.getElementById('scPanel');
    if (!panel) { buildPanel(); panel = document.getElementById('scPanel'); }
    panel.style.display = 'block';
    var box = document.getElementById('scPanelBox');
    box.style.transform = 'translateY(100%)';
    box.style.opacity = '0';
    setTimeout(function() {
      box.style.transform = 'translateY(0)';
      box.style.opacity = '1';
    }, 20);

    isOpen = true;
    document.getElementById('scBubbleBadge').style.display = 'none';

    // Render nội dung
    buildStats();
    buildTicker();
    buildSidebar();

    // Delay vẽ chart để canvas có kích thước
    setTimeout(function() { redrawChart(); }, 120);

    // Prevent scroll trên body (mobile)
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    var box = document.getElementById('scPanelBox');
    if (!box) return;
    box.style.transform = 'translateY(100%)';
    box.style.opacity = '0';
    setTimeout(function() {
      var panel = document.getElementById('scPanel');
      if (panel) panel.style.display = 'none';
    }, 300);
    isOpen = false;
    document.body.style.overflow = '';
  }

  // Export để bubble button HTML gọi được
  window.scTogglePanel = function() {
    if (isOpen) closePanel(); else openPanel();
  };

  /* ══════════════════════════════════════════════════
     FIREBASE HOOK
  ══════════════════════════════════════════════════ */
  function hookFirebase() {
    var tries = 0;
    var poll = setInterval(function() {
      tries++;
      if (typeof db !== 'undefined') {
        clearInterval(poll);
        db.ref('contributions').on('value', function(snap) {
          var data = snap.val();
          if (!data) return;
          var arr = Object.values(data);
          onFirebaseUpdate(arr);
          if (isOpen) { buildStats(); }
        });
      }
      if (tries > 100) clearInterval(poll);
    }, 200);
  }

  /* ══════════════════════════════════════════════════
     CSS
  ══════════════════════════════════════════════════ */
  function injectCSS() {
    if (document.getElementById('scCSS2')) return;
    var s = document.createElement('style');
    s.id = 'scCSS2';
    s.textContent = [
      '@keyframes scLive  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.3;transform:scale(.85)} }',
      '@keyframes scPing  { 0%,100%{transform:scale(1)} 40%{transform:scale(1.4)} }',
      '#scStatsRow::-webkit-scrollbar { display:none }',
      '#scSidebarWrap::-webkit-scrollbar { width:3px }',
      '#scSidebarWrap::-webkit-scrollbar-track { background:transparent }',
      '#scSidebarWrap::-webkit-scrollbar-thumb { background:rgba(255,255,255,0.1);border-radius:2px }',
      '#scCloseBtn:hover { background:rgba(255,255,255,0.15) !important; color:#fff !important }',
      // Responsive mobile
      '@media(max-width:768px) {',
        '#scGrid { grid-template-columns:1fr !important; display:flex !important; flex-direction:column !important; }',
        '#scGrid > div:first-child { border-right:none !important; border-bottom:1px solid rgba(255,255,255,0.05) !important; padding:12px 12px 12px 12px !important; }',
        '#scSidebarWrap { max-height:none !important; padding:10px 12px !important; }',
        '#scSidebarWrap > div:first-child { font-size:12px !important; }',
        '#scPanelBox { max-height:94vh; border-radius:20px 20px 0 0; font-size:13px; }',
        '#scStatsRow { gap:6px !important; padding:10px 12px !important; }',
        '#scStatsRow > div { min-width:60px !important; padding:8px 10px !important; }',
        '#scStatsRow > div > div:last-child { font-size:14px !important; }',
      '}',
      '@media(max-width:480px) {',
        '#scCanvas { height:260px !important }',
        '#scPanelBox { font-size:12px; }',
        // Header
        '#scPanelBox [style*="font-size:16px"] { font-size:14px !important; }',
        '#scPanelBox [style*="font-size:11px"] { font-size:10px !important; }',
      '}'
    ].join('\n');
    document.head.appendChild(s);
  }

  /* ══════════════════════════════════════════════════
     CLEANUP phiên bản cũ
  ══════════════════════════════════════════════════ */
  function cleanup() {
    ['stockChartSection','stockChartCSS','scPanel','scCSS'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el) el.remove();
    });
  }

  /* ══════════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════════ */
  function init() {
    var tries = 0;
    var poll = setInterval(function() {
      tries++;
      if (typeof MAJORS !== 'undefined' && MAJORS.length > 0) {
        clearInterval(poll);
        cleanup();
        injectCSS();
        buildCandleMap();  // xây dựng dữ liệu từ MAJORS ngay lập tức
        hookFirebase();
        // Bubble button đã có trong HTML, không cần inject
      }
      if (tries > 60) clearInterval(poll);
    }, 150);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
