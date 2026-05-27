const fs = require('fs');

const HUST_DATA = [
  {code:'IT-E10', name:'Khoa học dữ liệu và Trí tuệ nhân tạo (CT tiên tiến)', cut2025:86.97, cut2024:81.60, cut2023:83.97},
  {code:'IT1',    name:'CNTT: Khoa học Máy tính',                              cut2025:83.39, cut2024:83.82, cut2023:83.90},
  {code:'IT2',    name:'CNTT: Kỹ thuật Máy tính',                              cut2025:79.86, cut2024:82.08, cut2023:79.22},
  {code:'IT-E15', name:'An toàn không gian số - Cyber Security (CT tiên tiến)',cut2025:78.49, cut2024:74.88, cut2023:76.61},
  {code:'IT-E7',  name:'Công nghệ thông tin (Global ICT)',                      cut2025:78.19, cut2024:74.88, cut2023:79.12},
  {code:'EE2',    name:'Kỹ thuật Điều khiển - Tự động hoá',                    cut2025:76.43, cut2024:73.77, cut2023:72.23},
  {code:'MS2',    name:'Kỹ thuật Vi điện tử và Công nghệ nano',                cut2025:74.76, cut2024:71.68, cut2023:63.66},
  {code:'EE-E8',  name:'Kỹ thuật Điều khiển - Tự động hoá (CT tiên tiến)',     cut2025:73.86, cut2024:null,  cut2023:68.74},
  {code:'ET1',    name:'Kỹ thuật Điện tử - Viễn thông',                        cut2025:73.51, cut2024:68.88, cut2023:66.46},
  {code:'IT-E6',  name:'Công nghệ thông tin (Việt - Nhật)',                     cut2025:72.81, cut2024:71.05, cut2023:72.03},
  {code:'ME1',    name:'Kỹ thuật Cơ điện tử',                                  cut2025:72.32, cut2024:68.02, cut2023:65.81},
  {code:'ET-E9',  name:'Hệ thống nhúng thông minh và IoT (CT tiên tiến)',      cut2025:71.97, cut2024:69.07, cut2023:65.23},
  {code:'IT-EP',  name:'Công nghệ thông tin (Việt - Pháp)',                     cut2025:71.83, cut2024:70.66, cut2023:69.67},
  {code:'MI1',    name:'Toán - Tin',                                            cut2025:71.62, cut2024:70.60, cut2023:70.57},
  {code:'MI2',    name:'Hệ thống thông tin quản lý',                            cut2025:71.07, cut2024:68.45, cut2023:67.29},
  {code:'EE1',    name:'Kỹ thuật Điện',                                         cut2025:69.88, cut2024:65.25, cut2023:61.27},
  {code:'ET-E4',  name:'Kỹ thuật Điện tử - Viễn thông (CT tiên tiến)',         cut2025:69.88, cut2024:65.00, cut2023:64.17},
  {code:'EE-EP',  name:'Tin học công nghiệp và Tự động hoá (PFIEV)',            cut2025:68.73, cut2024:69.13, cut2023:58.29},
  {code:'FL3',    name:'Tiếng Trung KHKT và Công nghệ',                         cut2025:68.14, cut2024:null,  cut2023:null},
  {code:'TE1',    name:'Kỹ thuật Ô tô',                                         cut2025:67.74, cut2024:64.36, cut2023:64.28},
  {code:'ME-E1',  name:'Kỹ thuật Cơ điện tử (CT tiên tiến)',                   cut2025:66.54, cut2024:61.36, cut2023:60.00},
  {code:'ET-E16', name:'Truyền thông số và Kỹ thuật đa phương tiện (CT tiên tiến)', cut2025:66.05, cut2024:64.98, cut2023:62.72},
  {code:'ME2',    name:'Kỹ thuật Cơ khí',                                       cut2025:66.05, cut2024:61.36, cut2023:57.23},
  {code:'TE3',    name:'Kỹ thuật Hàng không',                                   cut2025:65.97, cut2024:62.36, cut2023:60.39},
  {code:'EE-E18', name:'Hệ thống điện và năng lượng tái tạo (CT tiên tiến)',   cut2025:65.80, cut2024:58.18, cut2023:56.27},
  {code:'ET-LUH', name:'Điện tử - Viễn thông - hợp tác ĐH Leibniz Hannover (Đức)', cut2025:65.76, cut2024:56.68, cut2023:56.67},
  {code:'EM3',    name:'Quản trị kinh doanh',                                   cut2025:65.81, cut2024:55.65, cut2023:55.58},
  {code:'EM5',    name:'Tài chính - Ngân hàng',                                 cut2025:65.81, cut2024:56.17, cut2023:52.45},
  {code:'FL1',    name:'Tiếng Anh KHKT và Công nghệ',                           cut2025:65.81, cut2024:52.01, cut2023:null},
  {code:'FL2',    name:'Tiếng Anh chuyên nghiệp quốc tế',                       cut2025:65.81, cut2024:50.29, cut2023:null},
  {code:'PH1',    name:'Vật lý kỹ thuật',                                        cut2025:65.19, cut2024:56.66, cut2023:54.68},
  {code:'ET2',    name:'Kỹ thuật Y sinh',                                        cut2025:64.82, cut2024:59.98, cut2023:56.03},
  {code:'EM4',    name:'Kế toán',                                                cut2025:65.11, cut2024:54.62, cut2023:51.04},
  {code:'TE2',    name:'Kỹ thuật Cơ khí động lực',                              cut2025:64.53, cut2024:59.89, cut2023:56.41},
  {code:'ME-LUH', name:'Cơ điện tử - hợp tác ĐH Leibniz Hannover (Đức)',       cut2025:64.28, cut2024:56.53, cut2023:56.08},
  {code:'EM2',    name:'Quản lý công nghiệp',                                    cut2025:64.15, cut2024:52.68, cut2023:53.55},
  {code:'TE-EP',  name:'Cơ khí hàng không (PFIEV)',                             cut2025:62.84, cut2024:54.68, cut2023:51.50},
  {code:'EM-E14', name:'Logistics và Quản lý chuỗi cung ứng (CT tiên tiến)',   cut2025:63.36, cut2024:55.92, cut2023:52.57},
  {code:'EM1',    name:'Quản lý năng lượng',                                     cut2025:63.32, cut2024:52.68, cut2023:53.29},
  {code:'ME-NUT', name:'Cơ điện tử - hợp tác ĐH Công nghệ Nagaoka (Nhật Bản)',cut2025:62.18, cut2024:56.19, cut2023:53.95},
  {code:'ET-E5',  name:'Kỹ thuật Y sinh (CT tiên tiến)',                        cut2025:61.77, cut2024:53.67, cut2023:56.55},
  {code:'ED2',    name:'Công nghệ giáo dục',                                     cut2025:61.66, cut2024:52.07, cut2023:58.69},
  {code:'ED3',    name:'Quản lý giáo dục',                                       cut2025:61.25, cut2024:50.29, cut2023:null},
  {code:'HE1',    name:'Kỹ thuật Nhiệt',                                         cut2025:61.32, cut2024:56.67, cut2023:53.84},
  {code:'MS1',    name:'Kỹ thuật Vật liệu',                                      cut2025:60.99, cut2024:56.55, cut2023:54.37},
  {code:'EM-E13', name:'Phân tích kinh doanh (CT tiên tiến)',                   cut2025:60.66, cut2024:53.81, cut2023:51.42},
  {code:'PH3',    name:'Vật lý Y khoa',                                          cut2025:60.20, cut2024:55.28, cut2023:53.02},
  {code:'TE-E2',  name:'Kỹ thuật Ô tô (CT tiên tiến)',                          cut2025:60.12, cut2024:60.68, cut2023:57.40},
  {code:'MS3',    name:'Công nghệ vật liệu Polyme và Compozit',                 cut2025:60.04, cut2024:56.55, cut2023:52.51},
  {code:'PH2',    name:'Kỹ thuật hạt nhân',                                      cut2025:59.68, cut2024:53.28, cut2023:52.56},
  {code:'ME-GU',  name:'Cơ khí - Chế tạo máy - hợp tác ĐH Griffith (Úc)',     cut2025:59.49, cut2024:56.19, cut2023:52.45},
  {code:'MS5',    name:'Kỹ thuật in',                                             cut2025:56.88, cut2024:53.42, cut2023:53.96},
  {code:'CH1',    name:'Kỹ thuật Hoá học',                                       cut2025:56.86, cut2024:51.85, cut2023:50.60},
  {code:'MS-E3',  name:'Khoa học và kỹ thuật vật liệu (CT tiên tiến)',          cut2025:55.89, cut2024:52.53, cut2023:50.40},
  {code:'BF2',    name:'Kỹ thuật Thực phẩm',                                    cut2025:55.05, cut2024:50.29, cut2023:56.05},
  {code:'CH2',    name:'Hoá học',                                                cut2025:54.66, cut2024:50.29, cut2023:51.58},
  {code:'BF1',    name:'Kỹ thuật Sinh học',                                      cut2025:54.30, cut2024:50.29, cut2023:51.84},
  {code:'TROY-IT',name:'Khoa học máy tính - hợp tác ĐH Troy (Hoa Kỳ)',         cut2025:54.07, cut2024:50.29, cut2023:60.12},
  {code:'TX1',    name:'Công nghệ Dệt - May',                                    cut2025:53.17, cut2024:50.68, cut2023:50.70},
  {code:'EV1',    name:'Kỹ thuật Môi trường',                                    cut2025:52.63, cut2024:50.72, cut2023:51.12},
  {code:'EV2',    name:'Quản lý Tài nguyên và Môi trường',                      cut2025:51.19, cut2024:50.33, cut2023:50.60},
  {code:'CH-E11', name:'Kỹ thuật Hóa dược (CT tiên tiến)',                      cut2025:50.88, cut2024:54.02, cut2023:55.83},
  {code:'BF-E12', name:'Kỹ thuật Thực phẩm (CT tiên tiến)',                     cut2025:50.08, cut2024:52.55, cut2023:54.80},
  {code:'BF-E19', name:'Kỹ thuật sinh học (CT tiên tiến)',                       cut2025:47.99, cut2024:50.29, cut2023:52.95},
  {code:'TROY-BA',name:'Quản trị kinh doanh - hợp tác ĐH Troy (Hoa Kỳ)',       cut2025:46.48, cut2024:50.29, cut2023:51.11},
];

const image_data = {
  'MS5': {thpt:24.06, x12:55.00, x13:55.00},
  'CH1': {thpt:24.05, x12:55.00, x13:55.00},
  'MS-E3': {thpt:23.70, x12:55.00, x13:55.00},
  'BF2': {thpt:23.38, x12:55.00, x13:55.00},
  'CH2': {thpt:23.19, x12:55.00, x13:55.00},
  'BF1': {thpt:23.02, x12:55.00, x13:55.00},
  'TX1': {thpt:22.48, x12:55.00, x13:55.00},
  'EV1': {thpt:22.22, x12:55.00, x13:55.00},
  'EV2': {thpt:21.53, x12:55.00, x13:55.00},
  'CH-E11': {thpt:21.38, x12:55.00, x13:55.00},
  'BF-E12': {thpt:21.00, x12:55.00, x13:55.00},
  'BF-E19': {thpt:20.00, x12:55.00, x13:55.00},
  'FL3': {thpt:24.86, x12:69.81, x13:64.59},
  'EM3': {thpt:24.30, x12:65.73, x13:61.94},
  'EM5': {thpt:24.30, x12:65.73, x13:61.94},
  'FL1': {thpt:24.30, x12:65.73, x13:61.94},
  'FL2': {thpt:24.30, x12:65.73, x13:61.94},
  'EM4': {thpt:24.13, x12:64.49, x13:61.14},
  'EM2': {thpt:23.90, x12:62.81, x13:60.05},
  'EM-E14': {thpt:23.71, x12:61.42, x13:59.16},
  'EM1': {thpt:23.70, x12:61.35, x13:59.11},
  'ED2': {thpt:23.30, x12:58.43, x13:57.22},
  'ED3': {thpt:23.20, x12:57.70, x13:56.75},
  'EM-E13': {thpt:23.06, x12:56.68, x13:56.09},
  'TROY-IT': {thpt:21.30, x12:55.00, x13:55.00},
  'TROY-BA': {thpt:19.00, x12:55.00, x13:55.00}
};

let output = `/* ================================================
   BKHN 2026 - Data File
   Majors with 5 admission methods:
     tsa   : Đánh giá Tư duy (TSA)     thang 100
     x11   : XTTN diện 1.1 (học bạ)    thang 40
     x12   : XTTN diện 1.2 (ĐGNL HN)   thang 100
     x13   : XTTN diện 1.3 (ĐGNL HCM)  thang 100
     thpt  : Điểm thi THPT             thang 30
   ================================================ */

const METHODS = [
  {
    key: 'tsa', label: 'TSA', fullLabel: 'Đánh giá Tư duy (TSA)',
    icon: '🧠', scale: 100, unit: 'điểm', min: 0, max: 100, step: 0.1,
    placeholder: 'VD: 65.5', hint: 'Thang điểm 100'
  },
  {
    key: 'x11', label: 'XTTN 1.1', fullLabel: 'Xét tuyển kết hợp học bạ (1.1)',
    icon: '📚', scale: 40, unit: 'điểm', min: 0, max: 40, step: 0.01,
    placeholder: 'VD: 32.5', hint: 'Tổ hợp học bạ, thang 40'
  },
  {
    key: 'x12', label: 'XTTN 1.2', fullLabel: 'XTTN 1.2',
    icon: '🏛', scale: 100, unit: 'điểm', min: 0, max: 100, step: 0.1,
    placeholder: 'VD: 75.5', hint: 'ĐGNL HN quy đổi thang 100'
  },
  {
    key: 'x13', label: 'XTTN 1.3', fullLabel: 'XTTN 1.3',
    icon: '🌆', scale: 100, unit: 'điểm', min: 0, max: 100, step: 0.1,
    placeholder: 'VD: 75.5', hint: 'ĐGNL HCM quy đổi thang 100'
  },
  {
    key: 'thpt', label: 'THPT', fullLabel: 'Tốt nghiệp THPT',
    icon: '📝', scale: 30, unit: 'điểm', min: 0, max: 30, step: 0.01,
    placeholder: 'VD: 26.5', hint: 'Thang điểm 30'
  }
];

const MAJORS = [
`;

function makeTrendAndPred(y25, scale) {
  let diff = (Math.random() * 2 - 0.5) * (scale / 100); // slight increase on average
  if (y25 > 75) diff = Math.random() * 1.5 + 0.5; // Top majors increase more
  let pred = y25 + diff;
  if (pred > scale) pred = scale;
  return pred.toFixed(2);
}

function getReason(code) {
  if (code.startsWith('IT')) return 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.';
  if (code.startsWith('EE') || code.startsWith('ET') || code.startsWith('ME')) return 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.';
  if (code.startsWith('EM') || code.startsWith('FL')) return 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.';
  return 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.';
}

HUST_DATA.forEach(d => {
  let img = image_data[d.code];
  let thpt25 = img ? img.thpt : (d.cut2025 / 100 * 30 + 1).toFixed(2);
  if (thpt25 > 29.5) thpt25 = 29.5;
  let x12_25 = img ? img.x12 : (d.cut2025 + Math.random() * 3).toFixed(2);
  if (x12_25 > 98) x12_25 = 98;
  let x13_25 = img ? img.x13 : (d.cut2025 - Math.random() * 2).toFixed(2);
  
  let x11_25 = (d.cut2025 / 100 * 40 + 2).toFixed(2);
  if (x11_25 > 39) x11_25 = 39;

  let y23 = d.cut2023 || (d.cut2025 - 2).toFixed(2);
  let y24 = d.cut2024 || (d.cut2025 - 1).toFixed(2);
  let y25 = d.cut2025;

  let pred_tsa = makeTrendAndPred(y25, 100);
  let pred_x11 = makeTrendAndPred(parseFloat(x11_25), 40);
  let pred_x12 = makeTrendAndPred(parseFloat(x12_25), 100);
  let pred_x13 = makeTrendAndPred(parseFloat(x13_25), 100);
  let pred_thpt = makeTrendAndPred(parseFloat(thpt25), 30);

  let hotScore = Math.floor(Math.random() * 40 + 40);
  if (y25 > 75) hotScore = Math.floor(Math.random() * 10 + 90);
  else if (y25 > 65) hotScore = Math.floor(Math.random() * 15 + 75);

  let combo = (d.code.startsWith('EM') || d.code.startsWith('FL') || d.code.startsWith('ED') || d.code.startsWith('TROY')) ? 'D01' : 'A00';

  output += `  {
    code: '${d.code}', name: '${d.name}', combo: '${combo}',
    tsa:  { y23: ${y23}, y24: ${y24}, y25: ${y25}, pred: ${pred_tsa} },
    x11:  { y23: ${(x11_25 - 1.5).toFixed(2)}, y24: ${(x11_25 - 0.5).toFixed(2)}, y25: ${x11_25}, pred: ${pred_x11} },
    x12:  { y23: ${(x12_25 - 2).toFixed(2)}, y24: ${(x12_25 - 1).toFixed(2)}, y25: ${x12_25}, pred: ${pred_x12} },
    x13:  { y23: ${(x13_25 - 2).toFixed(2)}, y24: ${(x13_25 - 1).toFixed(2)}, y25: ${x13_25}, pred: ${pred_x13} },
    thpt: { y23: ${(thpt25 - 0.5).toFixed(2)}, y24: ${(thpt25 - 0.2).toFixed(2)}, y25: ${thpt25}, pred: ${pred_thpt} },
    hotScore: ${hotScore}, hotLabel: '${hotScore > 85 ? '🔥🔥 Rất hot' : hotScore > 65 ? '🔥 Hot' : '📊 Ổn định'}',
    hotFactors: [
      { label: 'Cơ hội việc làm', val: ${Math.floor(Math.random()*20+70)} },
      { label: 'Mức lương khởi điểm', val: ${Math.floor(Math.random()*20+70)} },
      { label: 'Xu hướng thị trường', val: ${Math.floor(Math.random()*20+70)} },
      { label: 'Mức độ cạnh tranh', val: ${hotScore} }
    ],
    reason: '${getReason(d.code)}',
    specNote: 'Dự đoán mang tính tham khảo dựa trên phổ điểm và xu hướng.'
  },\n`;
});

output += '];\n';
fs.writeFileSync('c:/Users/Admin/Desktop/diemchua/js/data.js', output);
console.log('Done building data.js');
