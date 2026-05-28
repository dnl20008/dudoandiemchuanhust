/* ================================================
   BKHN 2026 - App Logic
   ================================================ */

// ─── State ───────────────────────────────────────
const state = {
  method: 'tsa',      // active method key
  combo: 'all',       // combo filter
  search: '',         // search text
  trend: 'all',       // trend filter
  selected: null,     // selected major object
  rawScore: null,     // user's raw score
  finalScore: null,   // user's final calculated score
  ielts: 0,           // ielts bonus
  kv: 0,              // khu vuc priority
  dt: 0,              // doi tuong priority
  aspirations: [],    // user aspirations
  userName: '',       // user name for sharing
  miniChart: null,    // Chart.js instance
  specChart: null,    // spectrum chart instance
};

window.isShared = false;

// ─── DOM refs ─────────────────────────────────────
const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── Security Settings ────────────────────────────
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', function(event) {
  if (event.key === 'F12' || event.keyCode === 123) event.preventDefault();
  if (event.ctrlKey && event.shiftKey && ['I','i','J','j','C','c'].includes(event.key)) event.preventDefault();
  if (event.ctrlKey && ['U','u','S','s','P','p'].includes(event.key)) event.preventDefault();
});

// ─── Helpers ──────────────────────────────────────
function getM(major) { return major[state.method]; }

function getDiff(major) {
  const m = getM(major);
  if (!m) return 0;
  return +(m.pred - m.y25).toFixed(2);
}

function diffClass(d) {
  return d > 0.3 ? 'up' : d < -0.3 ? 'down' : 'flat';
}
function diffIcon(d) {
  return d > 0.3 ? '↑' : d < -0.3 ? '↓' : '→';
}
function diffEmoji(d) {
  return d > 0.3 ? '📈' : d < -0.3 ? '📉' : '📊';
}

function fmt(v, key) {
  if (v === null || v === undefined) return '–';
  return v.toFixed(2);
}

function hotDots(score) {
  const filled = Math.round(score / 20); // 0-5
  let html = '<div class="hot-dots">';
  for (let i = 0; i < 5; i++) {
    html += `<div class="hot-dot ${i < filled ? 'on' : 'off'}"></div>`;
  }
  html += '</div>';
  return html;
}

function getMethodInfo() {
  return METHODS.find(m => m.key === state.method);
}

function getUserEligibility(major) {
  if (state.finalScore === null) return null;
  const pred = getM(major)?.pred;
  if (pred === null || pred === undefined) return null;
  const diff = state.finalScore - pred;
  if (diff >= 0) return { cls: 'user-eligible', label: '✅ Có thể đỗ', diff };
  if (diff >= -2) return { cls: 'user-near',     label: '⚡ Sát điểm',  diff };
  return              { cls: 'user-fail',      label: '❌ Chưa đủ',    diff };
}

// ─── Method Tabs ──────────────────────────────────
function setMethod(key) {
  state.method = key;
  $$('.method-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.method === key);
  });
  updateMethodUI();
  renderTable();
  updateStats();
  if (state.selected) renderDetail(state.selected);
  updateURL();
}

function updateMethodUI() {
  const info = getMethodInfo();
  const hint = $('methodHint');
  if (hint) hint.textContent = info.hint + ' — ' + info.fullLabel;
  const inp = $('userScoreInput');
  if (inp) {
    inp.placeholder = info.placeholder;
    inp.min = info.min;
    inp.max = info.max;
    inp.step = info.step;
  }
  $('tableMethodLabel').textContent = 'Phương thức: ' + info.label;

  const ieltsSel = $('ieltsSelect');
  if (ieltsSel) {
     if (state.method === 'tsa') {
        ieltsSel.disabled = false;
        ieltsSel.style.opacity = '1';
     } else {
        ieltsSel.disabled = true;
        ieltsSel.value = '0';
        state.ielts = 0;
        ieltsSel.style.opacity = '0.5';
     }
  }
  
  if (state.rawScore !== null) {
     calculateFinalScore();
     updateCheckerResult();
  }
}

// ─── Score Checker ────────────────────────────────
function onScoreInput() {
  const raw = parseFloat($('userScoreInput').value);
  const info = getMethodInfo();
  state.rawScore = (!isNaN(raw) && raw >= 0 && raw <= info.scale) ? raw : null;
  
  const ieltsSel = $('ieltsSelect');
  const kvSel = $('kvSelect');
  const dtSel = $('dtSelect');
  
  state.ielts = ieltsSel ? parseFloat(ieltsSel.value) : 0;
  state.kv = kvSel ? parseFloat(kvSel.value) : 0;
  state.dt = dtSel ? parseFloat(dtSel.value) : 0;
  
  if (state.rawScore !== null) {
    calculateFinalScore();
  } else {
    state.finalScore = null;
  }
  
  renderTable();
  renderAspirations();
  if (state.selected) renderDetail(state.selected);
  updateCheckerResult();
  updateURL();
}

function calculateFinalScore() {
  let raw = state.rawScore;
  let basePri30 = state.kv + state.dt;
  
  if (state.method === 'thpt') {
    let actPri = basePri30;
    if (raw >= 22.5) actPri = basePri30 * ((30 - raw) / 7.5);
    if (actPri < 0) actPri = 0;
    state.finalScore = raw + actPri;
  } else {
    // tsa, x12, x13
    let basePri100 = basePri30 * (10 / 3);
    let actPri = basePri100;
    if (raw >= 75) actPri = basePri100 * ((100 - raw) / 25);
    if (actPri < 0) actPri = 0;
    
    let englishBonus = (state.method === 'tsa') ? state.ielts : 0;
    state.finalScore = raw + englishBonus + actPri;
  }
}

function updateCheckerResult() {
  const res = $('checkerResult');
  if (state.finalScore === null) { res.classList.remove('show'); return; }
  const info = getMethodInfo();
  const eligible   = MAJORS.filter(m => { const p=getM(m)?.pred; return p&&state.finalScore>=p; });
  const near       = MAJORS.filter(m => { const p=getM(m)?.pred; return p&&state.finalScore<p&&state.finalScore>=p-2; });
  res.classList.add('show');
  
  let priText = '';
  if (Math.abs(state.finalScore - state.rawScore) > 0.01) {
     let diff = state.finalScore - state.rawScore;
     priText = `<span style="color:#ffb3c1;font-size:11px;margin-left:8px;">(Gốc: ${state.rawScore} + Thưởng: ${diff.toFixed(2)})</span>`;
  }

  res.innerHTML = `
    <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:center;">
      <span>Điểm xét tuyển: <strong style="font-size:16px;">${state.finalScore.toFixed(2)} ${info.unit}</strong>${priText}</span>
      <span>✅ Có thể đỗ: <strong>${eligible.length} ngành</strong></span>
      <span>⚡ Sát điểm: <strong>${near.length} ngành</strong></span>
    </div>`;
}

// ─── Filter / Combo ───────────────────────────────
function setCombo(c) {
  state.combo = c;
  $$('[data-combo]').forEach(btn => {
    btn.classList.toggle('chip-red',     btn.dataset.combo === c);
    btn.classList.toggle('chip-outline', btn.dataset.combo !== c);
  });
  renderTable();
}

function onSearch() {
  state.search = $('searchInput').value.toLowerCase();
  renderTable();
}

function onTrendFilter() {
  state.trend = $('trendFilter').value;
  renderTable();
}

function getFiltered() {
  const q = state.search;
  const t = state.trend;
  const c = state.combo;
  return MAJORS.filter(m => {
    if (c !== 'all' && m.combo !== c) return false;
    if (q && !m.name.toLowerCase().includes(q) && !m.code.toLowerCase().includes(q)) return false;
    const d = getDiff(m);
    if (t === 'up')   return d > 0.3;
    if (t === 'down') return d < -0.3;
    if (t === 'stable') return Math.abs(d) <= 0.3;
    if (t === 'hot')  return m.hotScore >= 75;
    if (t === 'eligible') return state.finalScore !== null && (getM(m)?.pred ?? 0) <= state.finalScore;
    return true;
  });
}

// ─── Stats bar ────────────────────────────────────
function updateStats() {
  const list = MAJORS;
  let sum25 = 0, count25 = 0, sum26 = 0, count26 = 0;
  let up = 0, down = 0;

  list.forEach(m => {
    const val25 = getM(m)?.y25;
    const val26 = getM(m)?.pred;
    if (val25 !== undefined && val25 !== null) { sum25 += val25; count25++; }
    if (val26 !== undefined && val26 !== null) { sum26 += val26; count26++; }
    const d = getDiff(m);
    if (d > 0.3) up++;
    if (d < -0.3) down++;
  });

  const avg25 = count25 ? (sum25 / count25) : 0;
  const avg26 = count26 ? (sum26 / count26) : 0;

  if ($('statAvg25')) $('statAvg25').textContent = fmt(avg25, state.method);
  if ($('statAvg26')) $('statAvg26').textContent = fmt(avg26, state.method);
  if ($('statUp')) $('statUp').textContent = up;
  if ($('statDown')) $('statDown').textContent = down;
  
  const info = getMethodInfo();
  if ($('statUnit')) $('statUnit').textContent = '/ ' + info.scale + ' điểm';
}

// ─── Render Table ─────────────────────────────────
function renderTable() {
  const list = getFiltered();
  $('majorCount').textContent = list.length + ' ngành';
  const tbody = $('majorBody');
  tbody.innerHTML = '';

  list.forEach((major, idx) => {
    const m    = getM(major);
    const diff = getDiff(major);
    const dc   = diffClass(diff);
    const elig = getUserEligibility(major);
    const isSelected = state.selected?.code === major.code;

    const tr = document.createElement('tr');
    tr.className = isSelected ? 'selected' : '';

    const eligCell = elig ? `<td class="score-cell" data-label="Khả năng đỗ"><span class="diff-badge ${elig.cls}" style="font-size:10px">${elig.label} (${elig.diff >= 0 ? '+' : ''}${elig.diff.toFixed(2)})</span></td>` : '';

    tr.innerHTML = `
      <td class="hide-mobile" style="width:36px;padding-left:16px;color:#a1a1aa;font-size:11px">${idx+1}</td>
      <td data-label="Ngành">
        <div style="text-align:left;">
          <div class="major-name" style="white-space:normal; line-height:1.4; margin-bottom:6px;">${major.name}</div>
          <div class="major-code" style="display:inline-block; background:#fff; padding:3px 8px; border-radius:6px; font-weight:700; color:var(--red); border:1px solid var(--pink-pale);">${major.code} · ${major.combo}</div>
        </div>
      </td>
      <td class="score-cell" data-label="ĐC 2025" style="font-weight:700;font-size:13px">${fmt(m?.y25, state.method)}</td>
      <td class="score-cell" data-label="Dự đoán 2026">
        <span class="score-pred ${dc}">${fmt(m?.pred, state.method)}</span>
      </td>
      <td class="score-cell" data-label="Biến động">
        <span class="diff-badge diff-${dc}">${diffIcon(diff)} ${diff > 0 ? '+' : ''}${diff.toFixed(2)}</span>
      </td>
      <td class="score-cell" data-label="Độ hot">
        <div class="hot-meter" style="justify-content:flex-end;">
          ${hotDots(major.hotScore)}
          <span class="hot-num" style="margin-left:6px;">${major.hotScore}</span>
        </div>
      </td>
      ${state.finalScore !== null ? eligCell : ''}
    `;
    tr.addEventListener('click', () => {
      $$('#majorBody tr').forEach(r => r.classList.remove('selected'));
      tr.classList.add('selected');
      state.selected = major;
      renderDetail(major);
      updateURL();
      // On mobile, show modal
      if (window.innerWidth < 1100) {
        $('detailPanel').classList.add('show-mobile');
      }
    });
    tbody.appendChild(tr);
  });

  // Update eligibility column header
  const eligHead = $('eligHead');
  if (eligHead) eligHead.style.display = state.finalScore !== null ? '' : 'none';
}

// ─── Render Detail ────────────────────────────────
function renderDetail(major) {
  $('detailEmpty').classList.add('hidden');
  $('detailContent').classList.remove('hidden');

  const m    = getM(major);
  const diff = getDiff(major);
  const dc   = diffClass(diff);
  const info = getMethodInfo();

  // Header
  $('dCode').textContent = major.code + ' · ' + major.combo;
  $('dName').textContent = major.name;
  $('dCombo').textContent = 'Tổ hợp: ' + major.combo + ' · ' + info.fullLabel;

  // Hot badge
  $('dHot').innerHTML = `
    <div style="font-size:18px;text-align:center;line-height:1">${major.hotScore >= 90 ? '🔥🔥🔥' : major.hotScore >= 75 ? '🔥🔥' : major.hotScore >= 55 ? '🔥' : major.hotScore >= 40 ? '📊' : '❄️'}</div>
    <div style="font-size:11px;font-weight:800;color:${major.hotScore>=75?'var(--red)':major.hotScore>=55?'#d97706':'#6b7280'};text-align:center;margin-top:2px">${major.hotScore}/100</div>`;

  // Scores
  $('d25').textContent = fmt(m?.y25, state.method);
  $('d26').textContent = fmt(m?.pred, state.method);

  // Change box
  const changeBox = $('dChangeBox');
  changeBox.style.borderLeftColor = dc === 'up' ? '#059669' : dc === 'down' ? 'var(--red)' : '#d97706';
  $('dChangeIcon').textContent = diffEmoji(diff);
  $('dChangeTxt').textContent  = dc === 'up' ? 'Dự đoán tăng điểm' : dc === 'down' ? 'Dự đoán giảm điểm' : 'Dự đoán ổn định';
  $('dChangeTxt').className    = 'change-label text-' + (dc === 'up' ? 'green' : dc === 'down' ? 'red' : 'amber');
  $('dChangeAmt').textContent  = (diff >= 0 ? '+' : '') + diff.toFixed(2) + ' điểm so với 2025 · Thang ' + info.scale;

  // User eligibility
  const uEl = $('dUserElig');
  const elig = getUserEligibility(major);
  if (elig && state.finalScore !== null) {
    uEl.className = 'diff-badge ' + elig.cls;
    uEl.textContent = elig.label + ' (' + (elig.diff >= 0 ? '+' : '') + elig.diff.toFixed(2) + ')';
    uEl.style.display = '';
  } else {
    uEl.style.display = 'none';
  }

  // All methods score table
  const mtbl = $('dMethodsTable');
  mtbl.innerHTML = '';
  METHODS.forEach(mi => {
    const sc = major[mi.key];
    if (!sc) return;
    const td = getDiff_byMethod(major, mi.key);
    const tdc = td > 0.3 ? 'up' : td < -0.3 ? 'down' : 'flat';
    const active = mi.key === state.method;
    mtbl.innerHTML += `
      <tr style="${active ? 'background:#fff5f6;font-weight:800' : ''}">
        <td style="padding:7px 10px;font-size:12px;color:${active?'var(--red)':'#52525b'};border-bottom:1px solid #ffdde5">
          ${mi.icon} ${mi.label}
        </td>
        <td style="padding:7px 8px;text-align:center;font-size:12px;color:#a1a1aa;border-bottom:1px solid #ffdde5">${fmt(sc.y25, mi.key)}</td>
        <td style="padding:7px 8px;text-align:center;font-size:13px;font-weight:800;color:${tdc==='up'?'#059669':tdc==='down'?'var(--red)':'#d97706'};border-bottom:1px solid #ffdde5">${fmt(sc.pred, mi.key)}</td>
        <td style="padding:7px 8px;text-align:center;border-bottom:1px solid #ffdde5">
          <span class="diff-badge diff-${tdc}" style="font-size:10px">${td>=0?'+':''}${td.toFixed(2)}</span>
        </td>
      </tr>`;
  });

  // Mini chart
  renderMiniChart(major);

  // Hot factors
  const hotDiv = $('dHotFactors');
  hotDiv.innerHTML = major.hotFactors.map(f => `
    <div class="prog-item">
      <div class="prog-header">
        <span class="prog-name">${f.label}</span>
        <span class="prog-val">${Math.max(0,f.val)}</span>
      </div>
      <div class="prog-track">
        <div class="prog-fill" style="width:${Math.max(0,f.val)}%"></div>
      </div>
    </div>`).join('');

  // Reason
  $('dReason').innerHTML = major.reason || 'Đang cập nhật...';
  $('dSpecNote').innerHTML = major.specNote ? `<i>${major.specNote}</i>` : '';

  // Update Aspirations Button
  const btn = $('addAspirationBtn');
  if (state.aspirations.includes(major.code)) {
    btn.innerHTML = '− Xóa nguyện vọng xét tuyển';
    btn.style.color = '#fff';
    btn.style.background = 'rgba(255,255,255,0.2)';
  } else {
    btn.innerHTML = '+ Thêm nguyện vọng xét tuyển';
    btn.style.color = 'var(--red)';
    btn.style.background = '#fff';
  }
}

function getDiff_byMethod(major, key) {
  const m = major[key];
  if (!m) return 0;
  return +(m.pred - m.y25).toFixed(2);
}

// ─── Mini Chart ───────────────────────────────────
function renderMiniChart(major) {
  const m    = getM(major);
  if (!m) return;
  const ctx  = $('miniChart').getContext('2d');
  if (state.miniChart) state.miniChart.destroy();

  const labels = ['2025', '2026 (dự đoán)'];
  const vals  = [m.y25, m.pred];

  state.miniChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: vals,
        backgroundColor: ['rgba(200,0,26,0.3)', 'rgba(200,0,26,0.8)'],
        borderColor: '#c8001a',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {
          grid: { color: '#ffdde5' },
          ticks: { color: '#a1a1aa', font: { size: 10, family: 'Be Vietnam Pro' } }
        },
        y: {
          grid: { color: '#ffdde5' },
          ticks: { color: '#a1a1aa', font: { size: 10, family: 'Be Vietnam Pro' } }
        }
      }
    }
  });
}

// ─── Spectrum Chart ───────────────────────────────
function renderSpectrumChart() {
  const ctx = $('spectrumChart').getContext('2d');
  const labels = ['<35','35-38','38-41','41-44','44-47','47-50','50-53','53-56','56-59','59-62','62-65','65-68','68-71','71-74','74-77','77+'];
  const d25    = [160, 550, 800,1200,1700,2000,2500,2700,2500,2200,1700,1200, 800, 400, 200, 100];
  const d26    = [400, 950,1500,2100,2500,3100,3400,3000,2400,1850,1300, 800, 400, 200, 100,  50];

  state.specChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'TSA 2025',
          data: d25,
          backgroundColor: 'rgba(200,0,26,0.55)',
          borderColor: 'rgba(200,0,26,0.8)',
          borderWidth: 1, borderRadius: 3,
        },
        {
          label: 'TSA 2026',
          data: d26,
          backgroundColor: 'rgba(255,77,126,0.45)',
          borderColor: 'rgba(255,77,126,0.75)',
          borderWidth: 1, borderRadius: 3,
        }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#fff',
          borderColor: '#ffdde5', borderWidth: 1.5,
          titleColor: '#1a0a0a', bodyColor: '#52525b',
          titleFont: { family: 'Be Vietnam Pro', weight: '700' },
          bodyFont: { family: 'Be Vietnam Pro' }
        }
      },
      scales: {
        x: { grid: { color: '#fff0f3' }, ticks: { color: '#a1a1aa', font: { size: 10 } } },
        y: { grid: { color: '#fff0f3' }, ticks: { color: '#a1a1aa', font: { size: 10 } } }
      }
    }
  });
}

// ─── Aspirations ───────────────────────────────────
function toggleCurrentAspiration() {
  if (!state.selected) return;
  const code = state.selected.code;
  if (state.aspirations.includes(code)) {
    state.aspirations = state.aspirations.filter(c => c !== code);
  } else {
    if (state.aspirations.length >= 3) {
      alert('Bạn chỉ được chọn tối đa 3 nguyện vọng!');
      return;
    }
    state.aspirations.push(code);
  }
  updateURL();
  renderAspirations();
  renderDetail(state.selected);
}

function renderAspirations() {
  const container = $('aspirationsContainer');
  const tbody = $('aspirationsBody');
  container.classList.remove('hidden');
  
  if (!state.aspirations || state.aspirations.length === 0) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--gray-500);padding:32px 16px;font-size:13px;background:#fef5f6;border-radius:12px;border-bottom:none !important;">Bạn chưa chọn nguyện vọng nào. Hãy bấm vào một ngành ở danh sách bên dưới và chọn <b>+ Thêm nguyện vọng xét tuyển</b> nhé!</td></tr>';
    return;
  }
  
  tbody.innerHTML = '';
  state.aspirations.forEach((code, idx) => {
    const major = MAJORS.find(m => m.code === code);
    if (!major) return;
    const m = getM(major);
    const diff = m?.pred ? m.pred - major.y25 : 0;
    const dc = diff > 0 ? 'up' : diff < 0 ? 'down' : 'stable';
    
    let eligCell = '';
    if (state.finalScore !== null) {
      const elig = getUserEligibility(major);
      eligCell = `<td class="score-cell" data-label="Khả năng đỗ">
        <span class="elig-badge elig-${elig.status}">${elig.text}</span>
      </td>`;
    }

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="hide-mobile" style="width:36px;padding-left:16px;color:var(--red);font-weight:700;">NV${idx+1}</td>
      <td data-label="Ngành">
        <div style="text-align:left;">
          <div class="major-name" style="white-space:normal; line-height:1.4; margin-bottom:6px;">${major.name}</div>
          <div class="major-code" style="display:inline-block; background:#fff; padding:3px 8px; border-radius:6px; font-weight:700; color:var(--red); border:1px solid var(--pink-pale);">${major.code} · ${major.combo}</div>
        </div>
      </td>
      <td class="score-cell" data-label="ĐC 2025" style="font-weight:700;font-size:13px">${fmt(m?.y25, state.method)}</td>
      <td class="score-cell" data-label="Dự đoán 2026">
        <span class="score-pred ${dc}">${fmt(m?.pred, state.method)}</span>
      </td>
      ${state.finalScore !== null ? eligCell : ''}
    `;
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', () => {
      $$('#majorBody tr').forEach(r => r.classList.remove('selected'));
      state.selected = major;
      renderDetail(major);
      updateURL();
      if (window.innerWidth < 1100) $('detailPanel').classList.add('show-mobile');
    });
    tbody.appendChild(tr);
  });
}

// ─── URL Sharing ──────────────────────────────────
function updateURL() {
  const url = new URL(window.location);
  url.searchParams.set('m', state.method);
  if (state.rawScore !== null) url.searchParams.set('s', state.rawScore); else url.searchParams.delete('s');
  if (state.ielts) url.searchParams.set('i', state.ielts); else url.searchParams.delete('i');
  if (state.kv) url.searchParams.set('k', state.kv); else url.searchParams.delete('k');
  if (state.dt) url.searchParams.set('d', state.dt); else url.searchParams.delete('d');
  if (state.selected) url.searchParams.set('code', state.selected.code); else url.searchParams.delete('code');
  if (state.userName) url.searchParams.set('n', state.userName); else url.searchParams.delete('n');
  
  // Aspirations
  url.searchParams.delete('nv1');
  url.searchParams.delete('nv2');
  url.searchParams.delete('nv3');
  if (state.aspirations && state.aspirations.length > 0) {
    state.aspirations.forEach((code, idx) => {
      url.searchParams.set(`nv${idx+1}`, code);
    });
  }

  window.history.replaceState({}, '', url);
}

function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  window.isShared = false;
  if (params.has('m')) state.method = params.get('m');
  if (params.has('s')) {
     state.rawScore = parseFloat(params.get('s'));
     const inp = $('userScoreInput');
     if (inp) inp.value = state.rawScore;
     window.isShared = true;
  }
  if (params.has('i')) {
     state.ielts = parseFloat(params.get('i'));
     const sel = $('ieltsSelect');
     if (sel) sel.value = state.ielts;
  }
  if (params.has('k')) {
     state.kv = parseFloat(params.get('k'));
     const sel = $('kvSelect');
     if (sel) sel.value = state.kv;
  }
  if (params.has('d')) {
     state.dt = parseFloat(params.get('d'));
     const sel = $('dtSelect');
     if (sel) sel.value = state.dt;
  }
  
  // Load aspirations
  state.aspirations = [];
  ['nv1', 'nv2', 'nv3'].forEach(key => {
    if (params.has(key)) {
      const code = params.get(key);
      if (MAJORS.find(m => m.code === code)) state.aspirations.push(code);
    }
  });

  if (params.has('n')) {
     state.userName = params.get('n');
     const span = document.getElementById('heroTitleSpan');
     if (span && state.userName) {
       span.innerText = `của ${state.userName}`;
     }
     window.isShared = true;
  }

  if (params.has('code')) {
     const code = params.get('code');
     const major = MAJORS.find(m => m.code === code);
     if (major) state.selected = major;
  }
  
  if (window.isShared) {
    const rBtn = $('resetBtn');
    if (rBtn) rBtn.classList.remove('hidden');
  }
}

function renderSharedSummary() {
  const sumDiv = $('sharedSummary');
  const desc = $('heroDesc');
  if (!sumDiv || !desc) return;
  
  if (!window.isShared) {
    sumDiv.classList.add('hidden');
    desc.style.display = 'block';
    return;
  }
  
  sumDiv.classList.remove('hidden');
  desc.style.display = 'none';

  const method = METHODS.find(m => m.key === state.method);
  
  let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #f4f4f5; padding-bottom:12px; margin-bottom:12px;">
      <div>
        <div style="font-size:11px; font-weight:700; color:var(--gray-400); text-transform:uppercase; margin-bottom:4px;">Phương thức</div>
        <div style="font-size:14px; font-weight:800; color:var(--gray-800);">${method.fullLabel}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:11px; font-weight:700; color:var(--gray-400); text-transform:uppercase; margin-bottom:4px;">Tổng điểm</div>
        <div style="font-size:18px; font-weight:900; color:var(--red);">${state.finalScore !== null ? state.finalScore.toFixed(2) : '--'} <span style="font-size:12px;color:var(--gray-400)">/ ${method.scale}</span></div>
      </div>
    </div>
  `;

  if (state.aspirations && state.aspirations.length > 0) {
    html += `<div style="font-size:12px; font-weight:800; margin-bottom:10px; color:var(--gray-800); text-transform:uppercase;">🎯 Danh sách Nguyện vọng:</div>`;
    html += `<div style="display:flex; flex-direction:column; gap:8px;">`;
    state.aspirations.forEach((code, idx) => {
      const major = MAJORS.find(m => m.code === code);
      if (major) {
        const elig = getUserEligibility(major);
        html += `
          <div style="display:flex; justify-content:space-between; align-items:center; background:#fef5f6; padding:10px 14px; border-radius:10px; border: 1px dashed var(--pink-pale);">
            <div style="font-size:13px; font-weight:700; color:var(--gray-800); text-align:left; line-height:1.4;">
              <span style="color:var(--red);margin-right:4px;">NV${idx+1}</span> ${major.name}
            </div>
            <div style="margin-left:12px; flex-shrink:0;">
              <span class="elig-badge elig-${elig.status}" style="font-size:11px; padding:4px 8px;">${elig.text}</span>
            </div>
          </div>
        `;
      }
    });
    html += `</div>`;
  } else {
    html += `<div style="font-size:13px; color:var(--gray-500); font-style:italic; text-align:center; padding:12px 0;">Chưa chọn nguyện vọng nào.</div>`;
  }
  
  sumDiv.innerHTML = html;
}

function resetData() {
  state.rawScore = null;
  state.finalScore = null;
  state.ielts = 0;
  state.kv = 0;
  state.dt = 0;
  state.aspirations = [];
  state.userName = '';
  state.selected = null;
  
  // reset UI inputs
  $('userScoreInput').value = '';
  $('ieltsSelect').value = '0';
  $('kvSelect').value = '0';
  $('dtSelect').value = '0';
  
  // reset title
  const span = document.getElementById('heroTitleSpan');
  if (span) span.innerText = 'Bách Khoa Hà Nội';
  
  // hide reset button
  const rBtn = $('resetBtn');
  if (rBtn) rBtn.classList.add('hidden');
  
  // update
  updateCheckerResult();
  renderAspirations();
  renderTable();
  if (window.innerWidth < 1100) $('detailPanel').classList.remove('show-mobile');
  
  window.isShared = false;
  renderSharedSummary();
  
  // reset url without refreshing
  updateURL();
}

function shareResult() {
  $('shareNameInput').value = state.userName || '';
  $('shareModal').classList.remove('hidden');
}

function closeShareModal() {
  $('shareModal').classList.add('hidden');
}

function executeShare() {
  const name = $('shareNameInput').value.trim();
  state.userName = name;
  const span = document.getElementById('heroTitleSpan');
  if (span) span.innerText = state.userName ? `của ${state.userName}` : 'Bách Khoa Hà Nội';
  updateURL();

  const url = window.location.href;
  const copyBtn = $('copyLinkBtn');
  
  navigator.clipboard.writeText(url).then(() => {
    const oldText = copyBtn.innerText;
    copyBtn.innerText = '✅ Đã copy!';
    copyBtn.style.background = '#10b981'; // green
    setTimeout(() => {
      btn.innerText = '🔗 Chia sẻ & khoe kết quả với bạn bè';
      btn.style.background = '#fff';
      btn.style.color = '#c8001a';
      closeShareModal();
    }, 1500);
  }).catch(() => {
    showToast('Có lỗi xảy ra, vui lòng copy link trực tiếp trên thanh địa chỉ!', 'error');
    closeShareModal();
  });
}

// ─── Firebase Setup ───────────────────────────────
firebase.initializeApp({
  databaseURL: "https://khjksdfhjj-default-rtdb.asia-southeast1.firebasedatabase.app/"
});
const db = firebase.database();

// ─── Custom Toast Notification ─────────────────────
function showToast(message, type = 'error') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.style.position = 'fixed';
    toastContainer.style.top = '20px';
    toastContainer.style.left = '50%';
    toastContainer.style.transform = 'translateX(-50%)';
    toastContainer.style.zIndex = '999999';
    toastContainer.style.display = 'flex';
    toastContainer.style.flexDirection = 'column';
    toastContainer.style.gap = '10px';
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement('div');
  toast.style.background = type === 'error' ? '#fee2e2' : '#d1fae5';
  toast.style.color = type === 'error' ? '#b91c1c' : '#047857';
  toast.style.border = type === 'error' ? '1px solid #f87171' : '1px solid #34d399';
  toast.style.padding = '12px 24px';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
  toast.style.fontWeight = '700';
  toast.style.fontSize = '14px';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(-20px)';
  toast.style.transition = 'all 0.3s ease';
  toast.innerText = message;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ─── Contribute Data (Crowdsourcing) ──────────────
function openContributeModal() {
  if (state.finalScore === null) {
    showToast('Vui lòng tính điểm của bạn trước khi đóng góp!', 'error');
    return;
  }
  if (!state.aspirations || state.aspirations.length === 0) {
    showToast('Vui lòng chọn ít nhất 1 nguyện vọng để đóng góp!', 'error');
    return;
  }
  
  const preview = $('contributePreview');
  const methodInfo = getMethodInfo();
  let html = `<div style="font-weight:700; margin-bottom:8px; color:var(--red);">Điểm của bạn: ${state.finalScore.toFixed(2)} / ${methodInfo.scale} (${methodInfo.label})</div>`;
  html += `<ul style="margin:0 0 0 16px; padding:0;">`;
  state.aspirations.forEach((code, idx) => {
    const major = MAJORS.find(m => m.code === code);
    if (major) {
      html += `<li style="margin-bottom:4px;"><b>NV${idx+1}:</b> ${major.name} (${major.code})</li>`;
    }
  });
  html += `</ul>`;
  preview.innerHTML = html;
  
  $('contributeModal').classList.remove('hidden');
}

function closeContributeModal() {
  $('contributeModal').classList.add('hidden');
}

function executeContribute() {
  const btn = $('submitContributeBtn');
  const oldText = btn.innerText;
  const oldBg = btn.style.background;
  
  btn.innerText = 'Đang đẩy dữ liệu...';
  btn.style.opacity = '0.7';
  btn.disabled = true;
  
  // Push to Firebase RTDB
  db.ref('contributions').push({
    score: state.finalScore,
    method: state.method,
    aspirations: state.aspirations,
    timestamp: firebase.database.ServerValue.TIMESTAMP
  }).then(() => {
    btn.innerText = '✅ Cảm ơn bạn!';
    btn.style.background = '#10b981'; // green
    btn.style.opacity = '1';
    
    setTimeout(() => {
      btn.innerText = oldText;
      btn.style.background = oldBg;
      btn.disabled = false;
      closeContributeModal();
    }, 1500);
  }).catch(err => {
    console.error(err);
    showToast("Có lỗi xảy ra khi kết nối máy chủ!", 'error');
    btn.innerText = oldText;
    btn.style.background = oldBg;
    btn.disabled = false;
  });
}

// ─── Firebase Algorithm & Real-time Sync ──────────
let globalContributions = [];
let liveCount = 4318; // base initial count

function initFirebaseSync() {
  // Listen for contributions
  db.ref('contributions').on('value', (snapshot) => {
    const data = snapshot.val();
    if (!data) return;
    
    globalContributions = Object.values(data);
    liveCount = 4318 + globalContributions.length; // Add actual remote db size to base
    updateCounterUI();
    recalculatePredictions();
  });
  
  // Listen for chat
  db.ref('chat').limitToLast(50).on('child_added', (snapshot) => {
    const data = snapshot.val();
    const msgId = snapshot.key;
    const container = $('chatMessages');
    const div = document.createElement('div');
    div.id = 'chat-msg-' + msgId;
    div.style.background = '#fff';
    div.style.padding = '8px 12px';
    div.style.borderRadius = '8px';
    div.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
    div.style.position = 'relative';
    
    const time = new Date(data.timestamp || Date.now()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    let replyHtml = '';
    if (data.replyTo) {
      try {
        const replyObj = JSON.parse(data.replyTo);
        replyHtml = `<div style="background:#f3f4f6; border-left:3px solid var(--red); padding:4px 8px; font-size:11px; color:#6b7280; margin-bottom:6px; border-radius:4px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">
          <strong>${replyObj.name}:</strong> ${replyObj.text}
        </div>`;
      } catch (e) {}
    }
    
    const likes = data.likes || 0;
    const likedMsgs = JSON.parse(localStorage.getItem('bkhn_liked_msgs') || '{}');
    const hasLiked = likedMsgs[msgId];
    const heartColor = hasLiked ? 'var(--red)' : '#9ca3af';
    const heartIcon = hasLiked ? '❤️' : '🤍';
    
    div.innerHTML = `
      <div style="display:flex;justify-content:space-between;margin-bottom:4px;">
        <strong style="color:var(--red);">${data.name}</strong>
        <span style="color:#a1a1aa;font-size:11px;">${time}</span>
      </div>
      ${replyHtml}
      <div style="margin-bottom:8px; word-break:break-word;">${data.text}</div>
      <div style="display:flex; gap:12px; font-size:11px; border-top:1px dashed #f3f4f6; padding-top:6px; color:#6b7280;">
        <span id="like-btn-${msgId}" onclick="likeMessage('${msgId}')" style="cursor:pointer; color:${heartColor}; transition:transform 0.1s;">${heartIcon} <span id="like-count-${msgId}" style="color:#6b7280;">${likes}</span></span>
        <span onclick="setReply('${msgId}', '${data.name.replace(/'/g, "\\'")}', this.getAttribute('data-text'))" data-text="${data.text.replace(/"/g, '&quot;')}" style="cursor:pointer; color:var(--red);">↩ Trả lời</span>
      </div>
    `;
    container.appendChild(div);
    scrollToBottom();
  });

  // Listen for chat updates (likes)
  db.ref('chat').limitToLast(50).on('child_changed', (snapshot) => {
    const data = snapshot.val();
    const msgId = snapshot.key;
    const countEl = document.getElementById('like-count-' + msgId);
    if (countEl) {
      countEl.innerText = data.likes || 0;
    }
  });
}

function updateCounterUI() {
  const el = document.getElementById('liveContributorCount');
  if (el) {
    el.innerText = liveCount.toLocaleString('en-US');
  }
}

function recalculatePredictions() {
  // Blending algorithm with safety bounds to prevent troll spam and excessive drift
  MAJORS.forEach(major => {
    ['tsa', 'x12', 'x13', 'thpt'].forEach(method => {
      const m = major[method];
      if (!m) return;
      
      // Keep track of the original base prediction from data.js
      if (m._basePred === undefined) {
         m._basePred = m.pred;
      }
      
      // Define a realistic range around the base prediction to filter out trolls (e.g., +/- 20% of scale)
      const scale = (method === 'x12' || method === 'thpt' && m._basePred <= 30) ? (method === 'x12' ? 10 : 30) : 100;
      const trollThreshold = scale * 0.2; 
      
      let scores = globalContributions
        .filter(c => c.method === method && c.aspirations.includes(major.code))
        .map(c => c.score)
        .filter(s => Math.abs(s - m._basePred) <= trollThreshold); // Filter outliers
        
      if (scores.length > 0) {
        scores.sort((a,b) => b - a); // descending
        
        let crowdScore = 0;
        if (scores.length <= 2) {
           crowdScore = scores.reduce((a,b)=>a+b,0)/scores.length;
        } else {
           const mid = Math.floor(scores.length / 2);
           crowdScore = scores[mid]; // Simple Median
        }
        
        // Weight: max 0.3 (30%) weight to ensure BasePred remains the dominant anchor
        // Requires 100 valid contributions to reach max weight
        let weight = Math.min(scores.length / 100, 0.3);
        
        let newPred = m._basePred * (1 - weight) + crowdScore * weight;
        
        // Hard-cap the maximum absolute movement to 5% of the scale
        const maxDelta = scale * 0.05;
        if (newPred > m._basePred + maxDelta) newPred = m._basePred + maxDelta;
        if (newPred < m._basePred - maxDelta) newPred = m._basePred - maxDelta;
        
        m.pred = parseFloat(newPred.toFixed(2));
      }
    });
  });
  
  // Re-render UI after recalculation
  renderTable();
  if (state.selected) renderDetail(state.selected);
  renderAspirations();
}

// ─── Live Chat UI Logic ───────────────────────────
let currentReplyTo = null;

function toggleChat() {
  $('chatPanel').classList.toggle('hidden');
  if (!$('chatPanel').classList.contains('hidden')) {
    scrollToBottom();
  }
}

function setReply(id, name, text) {
  currentReplyTo = { id, name, text };
  $('chatReplyName').innerText = name;
  $('chatReplyIndicator').classList.remove('hidden');
  $('chatMsgInput').focus();
}

function cancelReply() {
  currentReplyTo = null;
  $('chatReplyIndicator').classList.add('hidden');
}

function likeMessage(msgId) {
  const likedMsgs = JSON.parse(localStorage.getItem('bkhn_liked_msgs') || '{}');
  if (likedMsgs[msgId]) {
    showToast('Bạn đã thả tim tin nhắn này rồi!', 'error');
    return;
  }
  
  const msgRef = db.ref('chat/' + msgId + '/likes');
  msgRef.transaction((currentLikes) => {
    return (currentLikes || 0) + 1;
  }, (error, committed) => {
    if (committed) {
      likedMsgs[msgId] = true;
      localStorage.setItem('bkhn_liked_msgs', JSON.stringify(likedMsgs));
      const btn = document.getElementById('like-btn-' + msgId);
      if(btn) {
         btn.style.color = 'var(--red)';
         btn.innerHTML = '❤️ <span id="like-count-' + msgId + '" style="color:#6b7280;">' + (parseInt(document.getElementById('like-count-' + msgId).innerText) + 1) + '</span>';
      }
    }
  });
}

function sendChatMessage() {
  const nameInput = $('chatNameInput').value.trim() || 'Ẩn danh';
  const msgInput = $('chatMsgInput');
  const msg = msgInput.value.trim();
  if (!msg) return;
  
  const payload = {
    name: nameInput,
    text: msg,
    timestamp: firebase.database.ServerValue.TIMESTAMP,
    likes: 0
  };
  
  if (currentReplyTo) {
    payload.replyTo = JSON.stringify({ name: currentReplyTo.name, text: currentReplyTo.text });
  }
  
  db.ref('chat').push(payload);
  
  msgInput.value = '';
  cancelReply();
}

function scrollToBottom() {
  const container = $('chatMessages');
  container.scrollTop = container.scrollHeight;
}

// ─── Init ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initFirebaseSync();
  updateCounterUI();
  loadFromURL();
  
  if (state.rawScore !== null) {
    calculateFinalScore();
  }
  
  renderSharedSummary();
  renderAspirations();
  renderTable();
  updateStats();
  updateMethodUI();
  if (state.selected) {
    renderDetail(state.selected);
    // On mobile, show modal directly if shared link has a major
    if (window.innerWidth < 1100) $('detailPanel').classList.add('show-mobile');
  }
  renderSpectrumChart();

  // Close popup on overlay click
  $('infoPopup').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('show');
  });

  // Animate stats on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('anim-fade-up');
    });
  }, { threshold: 0.1 });
  $$('.stat-card, .card, .spectrum-section').forEach(el => observer.observe(el));
});
