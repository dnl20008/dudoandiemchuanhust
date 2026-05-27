/* ================================================
   BKHN 2026 - Data File (Chỉ 2025)
   Phương thức:
     tsa   : Đánh giá Tư duy (TSA)     thang 100
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
  {
    code: 'IT-E10', name: 'Khoa học dữ liệu và Trí tuệ nhân tạo (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 86.97, pred: 88.63 },
    x12:  { y25: 93.18, pred: 94.28 },
    x13:  { y25: 95.64, pred: 96.23 },
    thpt: { y25: 29.39, pred: 29.86 },
    hotScore: 97,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 86 },
      { label: 'Mức độ cạnh tranh', val: 97 }
    ],
    reason: 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT1', name: 'CNTT: Khoa học Máy tính', combo: 'A00',
    tsa:  { y25: 83.39, pred: 85.25 },
    x12:  { y25: 90.61, pred: 92.53 },
    x13:  { y25: 93.92, pred: 95.86 },
    thpt: { y25: 29.19, pred: 29.48 },
    hotScore: 94,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 79 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 80 },
      { label: 'Mức độ cạnh tranh', val: 94 }
    ],
    reason: 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT2', name: 'CNTT: Kỹ thuật Máy tính', combo: 'A00',
    tsa:  { y25: 79.86, pred: 81.35 },
    x12:  { y25: 84.64, pred: 86.60 },
    x13:  { y25: 89.62, pred: 90.16 },
    thpt: { y25: 28.83, pred: 29.35 },
    hotScore: 90,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 88 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 90 }
    ],
    reason: 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-E15', name: 'An toàn không gian số - Cyber Security (CT Tiên tiến)', combo: 'A00',
    tsa:  { y25: 78.49, pred: 80.07 },
    x12:  { y25: 82.32, pred: 83.86 },
    x13:  { y25: 87.95, pred: 89.45 },
    thpt: { y25: 28.69, pred: 29.01 },
    hotScore: 98,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 76 },
      { label: 'Mức độ cạnh tranh', val: 98 }
    ],
    reason: 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-E7', name: 'Công nghệ thông tin (Global ICT)', combo: 'A00',
    tsa:  { y25: 78.19, pred: 79.70 },
    x12:  { y25: 81.82, pred: 82.53 },
    x13:  { y25: 87.59, pred: 88.35 },
    thpt: { y25: 28.66, pred: 28.81 },
    hotScore: 90,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 88 },
      { label: 'Mức lương khởi điểm', val: 75 },
      { label: 'Xu hướng thị trường', val: 77 },
      { label: 'Mức độ cạnh tranh', val: 90 }
    ],
    reason: 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE2', name: 'Kỹ thuật Điều khiển - Tự động hoá', combo: 'A00',
    tsa:  { y25: 76.43, pred: 77.06 },
    x12:  { y25: 78.83, pred: 79.49 },
    x13:  { y25: 85.44, pred: 86.76 },
    thpt: { y25: 28.48, pred: 28.86 },
    hotScore: 90,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 88 },
      { label: 'Mức độ cạnh tranh', val: 90 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS2', name: 'Kỹ thuật Vi điện tử và Công nghệ nano', combo: 'A00',
    tsa:  { y25: 74.76, pred: 75.83 },
    x12:  { y25: 77.2, pred: 78.00 },
    x13:  { y25: 80.9, pred: 81.85 },
    thpt: { y25: 28.25, pred: 28.66 },
    hotScore: 86,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 76 },
      { label: 'Mức lương khởi điểm', val: 87 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE-E8', name: 'Kỹ thuật Điều khiển - Tự động hoá (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 73.86, pred: 74.43 },
    x12:  { y25: 76.4, pred: 77.23 },
    x13:  { y25: 78.24, pred: 79.85 },
    thpt: { y25: 28.12, pred: 28.28 },
    hotScore: 86,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 76 },
      { label: 'Xu hướng thị trường', val: 83 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET1', name: 'Kỹ thuật Điện tử - Viễn thông', combo: 'A00',
    tsa:  { y25: 73.51, pred: 74.35 },
    x12:  { y25: 76.09, pred: 76.89 },
    x13:  { y25: 77.22, pred: 77.95 },
    thpt: { y25: 28.07, pred: 28.47 },
    hotScore: 76,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 88 },
      { label: 'Mức lương khởi điểm', val: 74 },
      { label: 'Xu hướng thị trường', val: 85 },
      { label: 'Mức độ cạnh tranh', val: 76 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-E6', name: 'Công nghệ thông tin (Việt - Nhật)', combo: 'A00',
    tsa:  { y25: 72.81, pred: 73.60 },
    x12:  { y25: 75.47, pred: 77.35 },
    x13:  { y25: 75.17, pred: 76.73 },
    thpt: { y25: 27.97, pred: 28.47 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 77 },
      { label: 'Mức lương khởi điểm', val: 74 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME1', name: 'Kỹ thuật Cơ điện tử', combo: 'A00',
    tsa:  { y25: 72.32, pred: 72.31 },
    x12:  { y25: 75.04, pred: 76.83 },
    x13:  { y25: 73.74, pred: 74.64 },
    thpt: { y25: 27.9, pred: 28.12 },
    hotScore: 89,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 74 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 85 },
      { label: 'Mức độ cạnh tranh', val: 89 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E9', name: 'Hệ thống nhúng thông minh và IoT (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 71.97, pred: 73.42 },
    x12:  { y25: 74.73, pred: 74.28 },
    x13:  { y25: 72.71, pred: 72.70 },
    thpt: { y25: 27.85, pred: 28.38 },
    hotScore: 89,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 74 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 89 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-EP', name: 'Công nghệ thông tin (Việt - Pháp)', combo: 'A00',
    tsa:  { y25: 71.83, pred: 71.72 },
    x12:  { y25: 74.61, pred: 75.65 },
    x13:  { y25: 72.3, pred: 73.44 },
    thpt: { y25: 27.83, pred: 28.19 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 74 },
      { label: 'Mức lương khởi điểm', val: 70 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MI1', name: 'Toán - Tin', combo: 'A00',
    tsa:  { y25: 71.62, pred: 72.93 },
    x12:  { y25: 74.42, pred: 75.43 },
    x13:  { y25: 71.69, pred: 71.43 },
    thpt: { y25: 27.8, pred: 28.26 },
    hotScore: 80,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 77 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 83 },
      { label: 'Mức độ cạnh tranh', val: 80 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MI2', name: 'Hệ thống thông tin quản lý', combo: 'A00',
    tsa:  { y25: 71.07, pred: 71.97 },
    x12:  { y25: 73.93, pred: 74.23 },
    x13:  { y25: 70.05, pred: 69.77 },
    thpt: { y25: 27.72, pred: 28.06 },
    hotScore: 84,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 84 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE1', name: 'Kỹ thuật Điện', combo: 'A00',
    tsa:  { y25: 69.88, pred: 70.47 },
    x12:  { y25: 72.88, pred: 72.75 },
    x13:  { y25: 66.57, pred: 67.15 },
    thpt: { y25: 27.55, pred: 27.82 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E4', name: 'Kỹ thuật Điện tử - Viễn thông (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 69.88, pred: 71.17 },
    x12:  { y25: 72.88, pred: 72.64 },
    x13:  { y25: 66.57, pred: 67.96 },
    thpt: { y25: 27.55, pred: 27.95 },
    hotScore: 76,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 70 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 76 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE-EP', name: 'Tin học công nghiệp và Tự động hóa (Chương trình Việt - Pháp PFIEV)', combo: 'A00',
    tsa:  { y25: 68.73, pred: 68.46 },
    x12:  { y25: 70.85, pred: 71.32 },
    x13:  { y25: 65.26, pred: 65.64 },
    thpt: { y25: 27.27, pred: 27.69 },
    hotScore: 80,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 76 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 70 },
      { label: 'Mức độ cạnh tranh', val: 80 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE1', name: 'Kỹ thuật Ô tô', combo: 'A00',
    tsa:  { y25: 67.74, pred: 67.26 },
    x12:  { y25: 69.12, pred: 69.98 },
    x13:  { y25: 64.13, pred: 65.34 },
    thpt: { y25: 27.03, pred: 27.34 },
    hotScore: 78,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 70 },
      { label: 'Xu hướng thị trường', val: 70 },
      { label: 'Mức độ cạnh tranh', val: 78 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-E1', name: 'Kỹ thuật Cơ điện tử (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 66.54, pred: 66.54 },
    x12:  { y25: 67.02, pred: 67.75 },
    x13:  { y25: 62.78, pred: 63.46 },
    thpt: { y25: 26.74, pred: 27.10 },
    hotScore: 80,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 84 },
      { label: 'Xu hướng thị trường', val: 70 },
      { label: 'Mức độ cạnh tranh', val: 80 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E16', name: 'Truyền thông số và Kỹ thuật đa phương tiện (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 66.05, pred: 67.10 },
    x12:  { y25: 66.15, pred: 66.06 },
    x13:  { y25: 62.21, pred: 62.03 },
    thpt: { y25: 26.62, pred: 27.05 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 81 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME2', name: 'Kỹ thuật Cơ khí', combo: 'A00',
    tsa:  { y25: 66.05, pred: 67.06 },
    x12:  { y25: 66.15, pred: 66.33 },
    x13:  { y25: 62.21, pred: 62.03 },
    thpt: { y25: 26.62, pred: 26.84 },
    hotScore: 79,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 86 },
      { label: 'Xu hướng thị trường', val: 71 },
      { label: 'Mức độ cạnh tranh', val: 79 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE3', name: 'Kỹ thuật Hàng không', combo: 'A00',
    tsa:  { y25: 65.97, pred: 66.81 },
    x12:  { y25: 66, pred: 66.14 },
    x13:  { y25: 62.12, pred: 62.07 },
    thpt: { y25: 26.6, pred: 27.00 },
    hotScore: 86,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 79 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 80 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE-E18', name: 'Hệ thống điện và năng lượng tái tạo (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 65.8, pred: 66.13 },
    x12:  { y25: 65.71, pred: 66.71 },
    x13:  { y25: 61.93, pred: 63.17 },
    thpt: { y25: 26.56, pred: 27.11 },
    hotScore: 78,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 83 },
      { label: 'Mức lương khởi điểm', val: 89 },
      { label: 'Xu hướng thị trường', val: 77 },
      { label: 'Mức độ cạnh tranh', val: 78 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-LUH', name: 'Điện tử - Viễn thông - hợp tác với ĐH Leibniz Hannover (Đức)', combo: 'A00',
    tsa:  { y25: 65.76, pred: 66.40 },
    x12:  { y25: 65.64, pred: 65.36 },
    x13:  { y25: 61.89, pred: 62.59 },
    thpt: { y25: 26.55, pred: 26.75 },
    hotScore: 86,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 80 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'PH1', name: 'Vật lý kỹ thuật', combo: 'A00',
    tsa:  { y25: 65.19, pred: 65.99 },
    x12:  { y25: 64.63, pred: 65.38 },
    x13:  { y25: 61.23, pred: 61.23 },
    thpt: { y25: 26.41, pred: 26.71 },
    hotScore: 88,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 82 },
      { label: 'Xu hướng thị trường', val: 78 },
      { label: 'Mức độ cạnh tranh', val: 88 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET2', name: 'Kỹ thuật Y sinh', combo: 'A00',
    tsa:  { y25: 64.82, pred: 65.10 },
    x12:  { y25: 63.98, pred: 65.32 },
    x13:  { y25: 60.81, pred: 61.61 },
    thpt: { y25: 26.32, pred: 26.90 },
    hotScore: 43,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 89 },
      { label: 'Mức độ cạnh tranh', val: 43 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE2', name: 'Kỹ thuật Cơ khí động lực', combo: 'A00',
    tsa:  { y25: 64.53, pred: 65.94 },
    x12:  { y25: 63.47, pred: 63.21 },
    x13:  { y25: 60.48, pred: 60.19 },
    thpt: { y25: 26.25, pred: 26.49 },
    hotScore: 74,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 74 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-LUH', name: 'Cơ điện tử - hợp tác với ĐH Leibniz Hannover (Đức)', combo: 'A00',
    tsa:  { y25: 64.28, pred: 65.00 },
    x12:  { y25: 63.04, pred: 64.35 },
    x13:  { y25: 60.2, pred: 60.83 },
    thpt: { y25: 26.19, pred: 26.37 },
    hotScore: 79,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 79 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE-EP', name: 'Cơ khí hàng không (Chương trình Việt - Pháp PFIEV)', combo: 'A00',
    tsa:  { y25: 62.84, pred: 62.58 },
    x12:  { y25: 60.5, pred: 60.82 },
    x13:  { y25: 58.56, pred: 59.31 },
    thpt: { y25: 25.84, pred: 26.32 },
    hotScore: 56,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 81 },
      { label: 'Mức độ cạnh tranh', val: 56 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-NUT', name: 'Cơ điện tử - hợp tác với ĐH Công nghệ Nagaoka (Nhật Bản)', combo: 'A00',
    tsa:  { y25: 62.18, pred: 63.48 },
    x12:  { y25: 59.34, pred: 60.25 },
    x13:  { y25: 57.81, pred: 59.11 },
    thpt: { y25: 25.68, pred: 26.00 },
    hotScore: 55,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 79 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 81 },
      { label: 'Mức độ cạnh tranh', val: 55 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E5', name: 'Kỹ thuật Y sinh (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 61.77, pred: 62.73 },
    x12:  { y25: 58.62, pred: 59.21 },
    x13:  { y25: 57.34, pred: 57.02 },
    thpt: { y25: 25.58, pred: 25.99 },
    hotScore: 72,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 87 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 72 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'HE1', name: 'Kỹ thuật Nhiệt', combo: 'A00',
    tsa:  { y25: 61.32, pred: 61.54 },
    x12:  { y25: 57.82, pred: 58.81 },
    x13:  { y25: 56.83, pred: 56.58 },
    thpt: { y25: 25.47, pred: 25.95 },
    hotScore: 67,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 82 },
      { label: 'Xu hướng thị trường', val: 89 },
      { label: 'Mức độ cạnh tranh', val: 67 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS1', name: 'Kỹ thuật Vật liệu', combo: 'A00',
    tsa:  { y25: 60.99, pred: 60.86 },
    x12:  { y25: 57.24, pred: 58.58 },
    x13:  { y25: 56.45, pred: 56.73 },
    thpt: { y25: 25.39, pred: 25.80 },
    hotScore: 60,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 60 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'PH3', name: 'Vật lý Y khoa', combo: 'A00',
    tsa:  { y25: 60.2, pred: 61.64 },
    x12:  { y25: 55.87, pred: 56.55 },
    x13:  { y25: 55.56, pred: 56.14 },
    thpt: { y25: 25.2, pred: 25.51 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 87 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE-E2', name: 'Kỹ thuật Ô tô (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 60.12, pred: 60.31 },
    x12:  { y25: 55.72, pred: 55.25 },
    x13:  { y25: 55.47, pred: 55.85 },
    thpt: { y25: 25.18, pred: 25.77 },
    hotScore: 56,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 89 },
      { label: 'Mức lương khởi điểm', val: 82 },
      { label: 'Xu hướng thị trường', val: 80 },
      { label: 'Mức độ cạnh tranh', val: 56 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS3', name: 'Công nghệ vật liệu Polyme và Compozit', combo: 'A00',
    tsa:  { y25: 60.04, pred: 61.01 },
    x12:  { y25: 55.58, pred: 56.37 },
    x13:  { y25: 55.37, pred: 56.15 },
    thpt: { y25: 25.16, pred: 25.71 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 89 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 87 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'PH2', name: 'Kỹ thuật hạt nhân', combo: 'A00',
    tsa:  { y25: 59.68, pred: 59.28 },
    x12:  { y25: 55, pred: 56.18 },
    x13:  { y25: 55, pred: 54.85 },
    thpt: { y25: 25.07, pred: 25.32 },
    hotScore: 40,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 88 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 40 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-GU', name: 'Cơ khí - Chế tạo máy - hợp tác với ĐH Griffith (Úc)', combo: 'A00',
    tsa:  { y25: 59.49, pred: 60.48 },
    x12:  { y25: 55, pred: 55.06 },
    x13:  { y25: 55, pred: 55.80 },
    thpt: { y25: 25, pred: 25.28 },
    hotScore: 67,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 73 },
      { label: 'Mức lương khởi điểm', val: 78 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 67 }
    ],
    reason: 'Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao (bán dẫn, tự động hóa). Dự đoán điểm chuẩn tăng nhẹ.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS5', name: 'Kỹ thuật in', combo: 'A00',
    tsa:  { y25: 56.88, pred: 58.02 },
    x12:  { y25: 55, pred: 54.89 },
    x13:  { y25: 55, pred: 56.31 },
    thpt: { y25: 24.06, pred: 24.37 },
    hotScore: 47,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 71 },
      { label: 'Mức lương khởi điểm', val: 78 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 47 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'CH1', name: 'Kỹ thuật Hoá học', combo: 'A00',
    tsa:  { y25: 56.86, pred: 57.43 },
    x12:  { y25: 55, pred: 55.63 },
    x13:  { y25: 55, pred: 55.94 },
    thpt: { y25: 24.05, pred: 24.46 },
    hotScore: 49,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 73 },
      { label: 'Mức lương khởi điểm', val: 89 },
      { label: 'Xu hướng thị trường', val: 88 },
      { label: 'Mức độ cạnh tranh', val: 49 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS-E3', name: 'Khoa học và kỹ thuật vật liệu (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 55.89, pred: 56.86 },
    x12:  { y25: 55, pred: 55.72 },
    x13:  { y25: 55, pred: 55.42 },
    thpt: { y25: 23.7, pred: 24.25 },
    hotScore: 69,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 89 },
      { label: 'Xu hướng thị trường', val: 85 },
      { label: 'Mức độ cạnh tranh', val: 69 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF2', name: 'Kỹ thuật Thực phẩm', combo: 'A00',
    tsa:  { y25: 55.05, pred: 55.13 },
    x12:  { y25: 55, pred: 55.96 },
    x13:  { y25: 55, pred: 55.30 },
    thpt: { y25: 23.38, pred: 23.67 },
    hotScore: 63,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 63 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'CH2', name: 'Hoá học', combo: 'A00',
    tsa:  { y25: 54.66, pred: 55.96 },
    x12:  { y25: 55, pred: 54.94 },
    x13:  { y25: 55, pred: 55.55 },
    thpt: { y25: 23.19, pred: 23.46 },
    hotScore: 50,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 71 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 50 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF1', name: 'Kỹ thuật Sinh học', combo: 'A00',
    tsa:  { y25: 54.3, pred: 54.78 },
    x12:  { y25: 55, pred: 55.01 },
    x13:  { y25: 55, pred: 55.83 },
    thpt: { y25: 23.02, pred: 23.34 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 77 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TX1', name: 'Công nghệ Dệt - May', combo: 'A00',
    tsa:  { y25: 53.17, pred: 53.57 },
    x12:  { y25: 55, pred: 55.90 },
    x13:  { y25: 55, pred: 55.51 },
    thpt: { y25: 22.48, pred: 22.74 },
    hotScore: 64,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 83 },
      { label: 'Mức lương khởi điểm', val: 88 },
      { label: 'Xu hướng thị trường', val: 86 },
      { label: 'Mức độ cạnh tranh', val: 64 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EV1', name: 'Kỹ thuật Môi trường', combo: 'A00',
    tsa:  { y25: 52.63, pred: 53.96 },
    x12:  { y25: 55, pred: 55.38 },
    x13:  { y25: 55, pred: 56.14 },
    thpt: { y25: 22.22, pred: 22.25 },
    hotScore: 74,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 73 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 78 },
      { label: 'Mức độ cạnh tranh', val: 74 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EV2', name: 'Quản lý Tài nguyên và Môi trường', combo: 'A00',
    tsa:  { y25: 51.19, pred: 51.46 },
    x12:  { y25: 55, pred: 55.97 },
    x13:  { y25: 55, pred: 54.92 },
    thpt: { y25: 21.53, pred: 21.82 },
    hotScore: 53,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 86 },
      { label: 'Mức độ cạnh tranh', val: 53 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'CH-E11', name: 'Kỹ thuật Hóa dược (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 50.88, pred: 50.70 },
    x12:  { y25: 55, pred: 56.31 },
    x13:  { y25: 55, pred: 56.40 },
    thpt: { y25: 21.38, pred: 21.48 },
    hotScore: 52,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 75 },
      { label: 'Xu hướng thị trường', val: 88 },
      { label: 'Mức độ cạnh tranh', val: 52 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF-E12', name: 'Kỹ thuật Thực phẩm (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 50.08, pred: 50.74 },
    x12:  { y25: 55, pred: 54.51 },
    x13:  { y25: 55, pred: 54.79 },
    thpt: { y25: 21, pred: 21.25 },
    hotScore: 67,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 80 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 67 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF-E19', name: 'Kỹ thuật sinh học (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 47.99, pred: 47.78 },
    x12:  { y25: 55, pred: 55.48 },
    x13:  { y25: 55, pred: 55.16 },
    thpt: { y25: 20, pred: 20.02 },
    hotScore: 66,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 77 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 76 },
      { label: 'Mức độ cạnh tranh', val: 66 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'FL3', name: 'Tiếng Trung KHKT và Công nghệ', combo: 'D01',
    tsa:  { y25: 68.14, pred: 69.23 },
    x12:  { y25: 69.81, pred: 70.47 },
    x13:  { y25: 64.59, pred: 64.12 },
    thpt: { y25: 24.86, pred: 25.38 },
    hotScore: 89,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 85 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 89 },
      { label: 'Mức độ cạnh tranh', val: 89 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM3', name: 'Quản trị kinh doanh', combo: 'D01',
    tsa:  { y25: 65.81, pred: 65.32 },
    x12:  { y25: 65.73, pred: 66.10 },
    x13:  { y25: 61.94, pred: 62.30 },
    thpt: { y25: 24.3, pred: 24.81 },
    hotScore: 88,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 88 },
      { label: 'Mức lương khởi điểm', val: 85 },
      { label: 'Xu hướng thị trường', val: 80 },
      { label: 'Mức độ cạnh tranh', val: 88 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM5', name: 'Tài chính - Ngân hàng', combo: 'D01',
    tsa:  { y25: 65.81, pred: 65.62 },
    x12:  { y25: 65.73, pred: 66.16 },
    x13:  { y25: 61.94, pred: 62.36 },
    thpt: { y25: 24.3, pred: 24.56 },
    hotScore: 84,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 84 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'FL1', name: 'Tiếng Anh KHKT và Công nghệ', combo: 'D01',
    tsa:  { y25: 65.81, pred: 66.48 },
    x12:  { y25: 65.73, pred: 66.74 },
    x13:  { y25: 61.94, pred: 61.51 },
    thpt: { y25: 24.3, pred: 24.79 },
    hotScore: 79,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 74 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 87 },
      { label: 'Mức độ cạnh tranh', val: 79 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'FL2', name: 'Tiếng Anh chuyên nghiệp quốc tế', combo: 'D01',
    tsa:  { y25: 65.81, pred: 66.02 },
    x12:  { y25: 65.73, pred: 66.50 },
    x13:  { y25: 61.94, pred: 61.99 },
    thpt: { y25: 24.3, pred: 24.69 },
    hotScore: 88,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 71 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 88 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM4', name: 'Kế toán', combo: 'D01',
    tsa:  { y25: 65.11, pred: 65.31 },
    x12:  { y25: 64.49, pred: 65.13 },
    x13:  { y25: 61.14, pred: 61.56 },
    thpt: { y25: 24.13, pred: 24.69 },
    hotScore: 82,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 83 },
      { label: 'Mức độ cạnh tranh', val: 82 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM2', name: 'Quản lý công nghiệp', combo: 'D01',
    tsa:  { y25: 64.15, pred: 65.25 },
    x12:  { y25: 62.81, pred: 64.13 },
    x13:  { y25: 60.05, pred: 59.73 },
    thpt: { y25: 23.9, pred: 24.05 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 70 },
      { label: 'Xu hướng thị trường', val: 83 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM-E14', name: 'Logistics và Quản lý chuỗi cung ứng (CT tiên tiến)', combo: 'D01',
    tsa:  { y25: 63.36, pred: 64.55 },
    x12:  { y25: 61.42, pred: 61.71 },
    x13:  { y25: 59.16, pred: 58.93 },
    thpt: { y25: 23.71, pred: 24.05 },
    hotScore: 49,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 77 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 49 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM1', name: 'Quản lý năng lượng', combo: 'D01',
    tsa:  { y25: 63.32, pred: 64.08 },
    x12:  { y25: 61.35, pred: 62.66 },
    x13:  { y25: 59.11, pred: 59.79 },
    thpt: { y25: 23.7, pred: 23.97 },
    hotScore: 60,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 88 },
      { label: 'Xu hướng thị trường', val: 88 },
      { label: 'Mức độ cạnh tranh', val: 60 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ED2', name: 'Công nghệ giáo dục', combo: 'D01',
    tsa:  { y25: 61.66, pred: 62.24 },
    x12:  { y25: 58.43, pred: 58.95 },
    x13:  { y25: 57.22, pred: 57.17 },
    thpt: { y25: 23.3, pred: 23.76 },
    hotScore: 73,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 83 },
      { label: 'Mức lương khởi điểm', val: 75 },
      { label: 'Xu hướng thị trường', val: 89 },
      { label: 'Mức độ cạnh tranh', val: 73 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ED3', name: 'Quản lý giáo dục', combo: 'D01',
    tsa:  { y25: 61.25, pred: 61.30 },
    x12:  { y25: 57.7, pred: 57.54 },
    x13:  { y25: 56.75, pred: 57.09 },
    thpt: { y25: 23.2, pred: 23.72 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM-E13', name: 'Phân tích kinh doanh (CT tiên tiến)', combo: 'D01',
    tsa:  { y25: 60.66, pred: 60.99 },
    x12:  { y25: 56.68, pred: 57.83 },
    x13:  { y25: 56.09, pred: 57.51 },
    thpt: { y25: 23.06, pred: 23.27 },
    hotScore: 58,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 76 },
      { label: 'Mức lương khởi điểm', val: 74 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 58 }
    ],
    reason: 'Khối kinh tế quản lý và ngoại ngữ tại BKHN có lợi thế kép (kỹ thuật + kinh tế/ngôn ngữ), thu hút mạnh thí sinh khối D01. Điểm chuẩn có xu hướng tăng đều qua các năm.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TROY-IT', name: 'Khoa học máy tính - hợp tác với ĐH Troy (Hoa Kỳ)', combo: 'D01',
    tsa:  { y25: 54.07, pred: 55.53 },
    x12:  { y25: 55, pred: 55.66 },
    x13:  { y25: 55, pred: 56.27 },
    thpt: { y25: 21.3, pred: 21.60 },
    hotScore: 49,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 88 },
      { label: 'Mức lương khởi điểm', val: 76 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 49 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TROY-BA', name: 'Quản trị kinh doanh - hợp tác với ĐH Troy (Hoa Kỳ)', combo: 'D01',
    tsa:  { y25: 46.48, pred: 47.58 },
    x12:  { y25: 55, pred: 54.56 },
    x13:  { y25: 55, pred: 55.70 },
    thpt: { y25: 19, pred: 19.10 },
    hotScore: 45,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 80 },
      { label: 'Xu hướng thị trường', val: 78 },
      { label: 'Mức độ cạnh tranh', val: 45 }
    ],
    reason: 'Nhóm ngành có mức điểm chuẩn ổn định, phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
];
