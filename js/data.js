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
    key: 'x12', label: 'XTTN 1.2', fullLabel: 'Xét tuyển Chứng chỉ Quốc tế',
    icon: '🏛', scale: 10, unit: 'điểm', min: 0, max: 10, step: 0.1,
    placeholder: 'VD: 9.5', hint: 'Thang điểm 10 (Quy đổi)'
  },
  {
    key: 'x13', label: 'XTTN 1.3', fullLabel: 'Xét tuyển Hồ sơ Năng lực',
    icon: '🌆', scale: 100, unit: 'điểm', min: 0, max: 100, step: 0.1,
    placeholder: 'VD: 85.5', hint: 'Điểm HSNL (Tối đa 100)'
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
    tsa:  { y25: 86.97, pred: 87.73 },
    x12:  { y25: 93.18, pred: 93.58 },
    x13:  { y25: 95.64, pred: 95.53 },
    thpt: { y25: 29.39, pred: 28.56 },
    hotScore: 97,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 86 },
      { label: 'Mức độ cạnh tranh', val: 97 }
    ],
    reason: 'Điểm SAT cao ở phương thức xét tuyển tài năng, nhưng phổ điểm thi TSA thực tế được đánh giá là khó hơn năm ngoái và chỉ tiêu được phân bổ lại. Tổng hợp dữ liệu từ cộng đồng cho thấy xu hướng điểm chuẩn sẽ GIẢM nhẹ để bù trừ.. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT1', name: 'CNTT: Khoa học Máy tính', combo: 'A00',
    tsa:  { y25: 83.39, pred: 84.35 },
    x12:  { y25: 90.61, pred: 91.83 },
    x13:  { y25: 93.92, pred: 95.16 },
    thpt: { y25: 29.19, pred: 28.18 },
    hotScore: 94,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 79 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 80 },
      { label: 'Mức độ cạnh tranh', val: 94 }
    ],
    reason: 'Điểm SAT cao ở phương thức xét tuyển tài năng, nhưng phổ điểm thi TSA thực tế được đánh giá là khó hơn năm ngoái và chỉ tiêu được phân bổ lại. Tổng hợp dữ liệu từ cộng đồng cho thấy xu hướng điểm chuẩn sẽ GIẢM nhẹ để bù trừ.. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT2', name: 'CNTT: Kỹ thuật Máy tính', combo: 'A00',
    tsa:  { y25: 79.86, pred: 80.45 },
    x12:  { y25: 84.64, pred: 85.90 },
    x13:  { y25: 89.62, pred: 89.46 },
    thpt: { y25: 28.83, pred: 28.05 },
    hotScore: 90,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 88 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 90 }
    ],
    reason: 'Điểm SAT cao ở phương thức xét tuyển tài năng, nhưng phổ điểm thi TSA thực tế được đánh giá là khó hơn năm ngoái và chỉ tiêu được phân bổ lại. Tổng hợp dữ liệu từ cộng đồng cho thấy xu hướng điểm chuẩn sẽ GIẢM nhẹ để bù trừ.. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-E15', name: 'An toàn không gian số - Cyber Security (CT Tiên tiến)', combo: 'A00',
    tsa:  { y25: 78.49, pred: 79.17 },
    x12:  { y25: 82.32, pred: 83.16 },
    x13:  { y25: 87.95, pred: 88.75 },
    thpt: { y25: 28.69, pred: 27.71 },
    hotScore: 98,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 76 },
      { label: 'Mức độ cạnh tranh', val: 98 }
    ],
    reason: 'Điểm SAT cao ở phương thức xét tuyển tài năng, nhưng phổ điểm thi TSA thực tế được đánh giá là khó hơn năm ngoái và chỉ tiêu được phân bổ lại. Tổng hợp dữ liệu từ cộng đồng cho thấy xu hướng điểm chuẩn sẽ GIẢM nhẹ để bù trừ.. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-E7', name: 'Công nghệ thông tin (Global ICT)', combo: 'A00',
    tsa:  { y25: 78.19, pred: 78.80 },
    x12:  { y25: 81.82, pred: 81.83 },
    x13:  { y25: 87.59, pred: 87.65 },
    thpt: { y25: 28.66, pred: 27.51 },
    hotScore: 90,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 88 },
      { label: 'Mức lương khởi điểm', val: 75 },
      { label: 'Xu hướng thị trường', val: 77 },
      { label: 'Mức độ cạnh tranh', val: 90 }
    ],
    reason: 'Điểm SAT cao ở phương thức xét tuyển tài năng, nhưng phổ điểm thi TSA thực tế được đánh giá là khó hơn năm ngoái và chỉ tiêu được phân bổ lại. Tổng hợp dữ liệu từ cộng đồng cho thấy xu hướng điểm chuẩn sẽ GIẢM nhẹ để bù trừ.. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE2', name: 'Kỹ thuật Điều khiển - Tự động hoá', combo: 'A00',
    tsa:  { y25: 76.43, pred: 76.16 },
    x12:  { y25: 78.83, pred: 78.79 },
    x13:  { y25: 85.44, pred: 86.06 },
    thpt: { y25: 28.48, pred: 27.56 },
    hotScore: 98,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 88 },
      { label: 'Mức độ cạnh tranh', val: 90 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS2', name: 'Kỹ thuật Vi điện tử và Công nghệ nano', combo: 'A00',
    tsa:  { y25: 74.76, pred: 74.33 },
    x12:  { y25: 77.2, pred: 76.50 },
    x13:  { y25: 80.9, pred: 80.35 },
    thpt: { y25: 28.25, pred: 27.16 },
    hotScore: 86,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 76 },
      { label: 'Mức lương khởi điểm', val: 87 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE-E8', name: 'Kỹ thuật Điều khiển - Tự động hoá (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 73.86, pred: 73.53 },
    x12:  { y25: 76.4, pred: 76.53 },
    x13:  { y25: 78.24, pred: 79.15 },
    thpt: { y25: 28.12, pred: 26.98 },
    hotScore: 94,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 76 },
      { label: 'Xu hướng thị trường', val: 83 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET1', name: 'Kỹ thuật Điện tử - Viễn thông', combo: 'A00',
    tsa:  { y25: 73.51, pred: 73.45 },
    x12:  { y25: 76.09, pred: 76.19 },
    x13:  { y25: 77.22, pred: 77.25 },
    thpt: { y25: 28.07, pred: 27.17 },
    hotScore: 84,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 88 },
      { label: 'Mức lương khởi điểm', val: 74 },
      { label: 'Xu hướng thị trường', val: 85 },
      { label: 'Mức độ cạnh tranh', val: 76 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-E6', name: 'Công nghệ thông tin (Việt - Nhật)', combo: 'A00',
    tsa:  { y25: 72.81, pred: 72.70 },
    x12:  { y25: 75.47, pred: 76.65 },
    x13:  { y25: 75.17, pred: 76.03 },
    thpt: { y25: 27.97, pred: 27.17 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 77 },
      { label: 'Mức lương khởi điểm', val: 74 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Điểm SAT cao ở phương thức xét tuyển tài năng, nhưng phổ điểm thi TSA thực tế được đánh giá là khó hơn năm ngoái và chỉ tiêu được phân bổ lại. Tổng hợp dữ liệu từ cộng đồng cho thấy xu hướng điểm chuẩn sẽ GIẢM nhẹ để bù trừ.. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME1', name: 'Kỹ thuật Cơ điện tử', combo: 'A00',
    tsa:  { y25: 72.32, pred: 71.41 },
    x12:  { y25: 75.04, pred: 76.13 },
    x13:  { y25: 73.74, pred: 73.94 },
    thpt: { y25: 27.9, pred: 26.82 },
    hotScore: 97,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 74 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 85 },
      { label: 'Mức độ cạnh tranh', val: 89 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E9', name: 'Hệ thống nhúng thông minh và IoT (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 71.97, pred: 72.52 },
    x12:  { y25: 74.73, pred: 73.58 },
    x13:  { y25: 72.71, pred: 72.00 },
    thpt: { y25: 27.85, pred: 27.08 },
    hotScore: 97,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 74 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 89 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'IT-EP', name: 'Công nghệ thông tin (Việt - Pháp)', combo: 'A00',
    tsa:  { y25: 71.83, pred: 70.82 },
    x12:  { y25: 74.61, pred: 74.95 },
    x13:  { y25: 72.3, pred: 72.74 },
    thpt: { y25: 27.83, pred: 26.89 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 74 },
      { label: 'Mức lương khởi điểm', val: 70 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Điểm SAT cao ở phương thức xét tuyển tài năng, nhưng phổ điểm thi TSA thực tế được đánh giá là khó hơn năm ngoái và chỉ tiêu được phân bổ lại. Tổng hợp dữ liệu từ cộng đồng cho thấy xu hướng điểm chuẩn sẽ GIẢM nhẹ để bù trừ.. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MI1', name: 'Toán - Tin', combo: 'A00',
    tsa:  { y25: 71.62, pred: 71.43 },
    x12:  { y25: 74.42, pred: 73.93 },
    x13:  { y25: 71.69, pred: 69.93 },
    thpt: { y25: 27.8, pred: 26.76 },
    hotScore: 80,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 77 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 83 },
      { label: 'Mức độ cạnh tranh', val: 80 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MI2', name: 'Hệ thống thông tin quản lý', combo: 'A00',
    tsa:  { y25: 71.07, pred: 70.47 },
    x12:  { y25: 73.93, pred: 72.73 },
    x13:  { y25: 70.05, pred: 68.27 },
    thpt: { y25: 27.72, pred: 26.56 },
    hotScore: 84,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 84 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE1', name: 'Kỹ thuật Điện', combo: 'A00',
    tsa:  { y25: 69.88, pred: 69.57 },
    x12:  { y25: 72.88, pred: 72.05 },
    x13:  { y25: 66.57, pred: 66.45 },
    thpt: { y25: 27.55, pred: 26.52 },
    hotScore: 83,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E4', name: 'Kỹ thuật Điện tử - Viễn thông (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 69.88, pred: 70.27 },
    x12:  { y25: 72.88, pred: 71.94 },
    x13:  { y25: 66.57, pred: 67.26 },
    thpt: { y25: 27.55, pred: 26.65 },
    hotScore: 84,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 70 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 76 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE-EP', name: 'Tin học công nghiệp và Tự động hóa (Chương trình Việt - Pháp PFIEV)', combo: 'A00',
    tsa:  { y25: 68.73, pred: 67.56 },
    x12:  { y25: 70.85, pred: 70.62 },
    x13:  { y25: 65.26, pred: 64.94 },
    thpt: { y25: 27.27, pred: 26.39 },
    hotScore: 88,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 76 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 70 },
      { label: 'Mức độ cạnh tranh', val: 80 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE1', name: 'Kỹ thuật Ô tô', combo: 'A00',
    tsa:  { y25: 67.74, pred: 66.36 },
    x12:  { y25: 69.12, pred: 69.28 },
    x13:  { y25: 64.13, pred: 64.64 },
    thpt: { y25: 27.03, pred: 26.04 },
    hotScore: 86,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 70 },
      { label: 'Xu hướng thị trường', val: 70 },
      { label: 'Mức độ cạnh tranh', val: 78 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-E1', name: 'Kỹ thuật Cơ điện tử (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 66.54, pred: 65.64 },
    x12:  { y25: 67.02, pred: 67.05 },
    x13:  { y25: 62.78, pred: 62.76 },
    thpt: { y25: 26.74, pred: 25.80 },
    hotScore: 88,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 84 },
      { label: 'Xu hướng thị trường', val: 70 },
      { label: 'Mức độ cạnh tranh', val: 80 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E16', name: 'Truyền thông số và Kỹ thuật đa phương tiện (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 66.05, pred: 66.20 },
    x12:  { y25: 66.15, pred: 65.36 },
    x13:  { y25: 62.21, pred: 61.33 },
    thpt: { y25: 26.62, pred: 25.75 },
    hotScore: 83,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 81 },
      { label: 'Mức độ cạnh tranh', val: 75 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME2', name: 'Kỹ thuật Cơ khí', combo: 'A00',
    tsa:  { y25: 66.05, pred: 66.16 },
    x12:  { y25: 66.15, pred: 65.63 },
    x13:  { y25: 62.21, pred: 61.33 },
    thpt: { y25: 26.62, pred: 25.54 },
    hotScore: 87,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 86 },
      { label: 'Xu hướng thị trường', val: 71 },
      { label: 'Mức độ cạnh tranh', val: 79 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE3', name: 'Kỹ thuật Hàng không', combo: 'A00',
    tsa:  { y25: 65.97, pred: 65.91 },
    x12:  { y25: 66, pred: 65.44 },
    x13:  { y25: 62.12, pred: 61.37 },
    thpt: { y25: 26.6, pred: 25.70 },
    hotScore: 94,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 79 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 80 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EE-E18', name: 'Hệ thống điện và năng lượng tái tạo (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 65.8, pred: 65.23 },
    x12:  { y25: 65.71, pred: 66.01 },
    x13:  { y25: 61.93, pred: 62.47 },
    thpt: { y25: 26.56, pred: 25.81 },
    hotScore: 86,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 83 },
      { label: 'Mức lương khởi điểm', val: 89 },
      { label: 'Xu hướng thị trường', val: 77 },
      { label: 'Mức độ cạnh tranh', val: 78 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-LUH', name: 'Điện tử - Viễn thông - hợp tác với ĐH Leibniz Hannover (Đức)', combo: 'A00',
    tsa:  { y25: 65.76, pred: 65.50 },
    x12:  { y25: 65.64, pred: 64.66 },
    x13:  { y25: 61.89, pred: 61.89 },
    thpt: { y25: 26.55, pred: 25.45 },
    hotScore: 94,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 80 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 86 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'PH1', name: 'Vật lý kỹ thuật', combo: 'A00',
    tsa:  { y25: 65.19, pred: 64.49 },
    x12:  { y25: 64.63, pred: 63.88 },
    x13:  { y25: 61.23, pred: 59.73 },
    thpt: { y25: 26.41, pred: 25.21 },
    hotScore: 88,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 82 },
      { label: 'Xu hướng thị trường', val: 78 },
      { label: 'Mức độ cạnh tranh', val: 88 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET2', name: 'Kỹ thuật Y sinh', combo: 'A00',
    tsa:  { y25: 64.82, pred: 64.20 },
    x12:  { y25: 63.98, pred: 64.62 },
    x13:  { y25: 60.81, pred: 60.91 },
    thpt: { y25: 26.32, pred: 25.60 },
    hotScore: 51,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 89 },
      { label: 'Mức độ cạnh tranh', val: 43 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE2', name: 'Kỹ thuật Cơ khí động lực', combo: 'A00',
    tsa:  { y25: 64.53, pred: 65.04 },
    x12:  { y25: 63.47, pred: 62.51 },
    x13:  { y25: 60.48, pred: 59.49 },
    thpt: { y25: 26.25, pred: 25.19 },
    hotScore: 82,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 74 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-LUH', name: 'Cơ điện tử - hợp tác với ĐH Leibniz Hannover (Đức)', combo: 'A00',
    tsa:  { y25: 64.28, pred: 64.10 },
    x12:  { y25: 63.04, pred: 63.65 },
    x13:  { y25: 60.2, pred: 60.13 },
    thpt: { y25: 26.19, pred: 25.07 },
    hotScore: 87,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 78 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 79 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE-EP', name: 'Cơ khí hàng không (Chương trình Việt - Pháp PFIEV)', combo: 'A00',
    tsa:  { y25: 62.84, pred: 61.68 },
    x12:  { y25: 60.5, pred: 60.12 },
    x13:  { y25: 58.56, pred: 58.61 },
    thpt: { y25: 25.84, pred: 25.02 },
    hotScore: 64,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 81 },
      { label: 'Mức độ cạnh tranh', val: 56 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-NUT', name: 'Cơ điện tử - hợp tác với ĐH Công nghệ Nagaoka (Nhật Bản)', combo: 'A00',
    tsa:  { y25: 62.18, pred: 62.58 },
    x12:  { y25: 59.34, pred: 59.55 },
    x13:  { y25: 57.81, pred: 58.41 },
    thpt: { y25: 25.68, pred: 24.70 },
    hotScore: 63,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 79 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 81 },
      { label: 'Mức độ cạnh tranh', val: 55 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ET-E5', name: 'Kỹ thuật Y sinh (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 61.77, pred: 61.83 },
    x12:  { y25: 58.62, pred: 58.51 },
    x13:  { y25: 57.34, pred: 56.32 },
    thpt: { y25: 25.58, pred: 24.69 },
    hotScore: 80,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 87 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 72 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'HE1', name: 'Kỹ thuật Nhiệt', combo: 'A00',
    tsa:  { y25: 61.32, pred: 60.04 },
    x12:  { y25: 57.82, pred: 57.31 },
    x13:  { y25: 56.83, pred: 55.08 },
    thpt: { y25: 25.47, pred: 24.45 },
    hotScore: 67,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 82 },
      { label: 'Xu hướng thị trường', val: 89 },
      { label: 'Mức độ cạnh tranh', val: 67 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS1', name: 'Kỹ thuật Vật liệu', combo: 'A00',
    tsa:  { y25: 60.99, pred: 59.36 },
    x12:  { y25: 57.24, pred: 57.08 },
    x13:  { y25: 56.45, pred: 55.23 },
    thpt: { y25: 25.39, pred: 24.30 },
    hotScore: 60,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 84 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 84 },
      { label: 'Mức độ cạnh tranh', val: 60 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'PH3', name: 'Vật lý Y khoa', combo: 'A00',
    tsa:  { y25: 60.2, pred: 60.14 },
    x12:  { y25: 55.87, pred: 55.05 },
    x13:  { y25: 55.56, pred: 54.64 },
    thpt: { y25: 25.2, pred: 24.01 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 81 },
      { label: 'Xu hướng thị trường', val: 87 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TE-E2', name: 'Kỹ thuật Ô tô (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 60.12, pred: 59.41 },
    x12:  { y25: 55.72, pred: 54.55 },
    x13:  { y25: 55.47, pred: 55.15 },
    thpt: { y25: 25.18, pred: 24.47 },
    hotScore: 64,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 89 },
      { label: 'Mức lương khởi điểm', val: 82 },
      { label: 'Xu hướng thị trường', val: 80 },
      { label: 'Mức độ cạnh tranh', val: 56 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS3', name: 'Công nghệ vật liệu Polyme và Compozit', combo: 'A00',
    tsa:  { y25: 60.04, pred: 59.51 },
    x12:  { y25: 55.58, pred: 54.87 },
    x13:  { y25: 55.37, pred: 54.65 },
    thpt: { y25: 25.16, pred: 24.21 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 89 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 87 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'PH2', name: 'Kỹ thuật hạt nhân', combo: 'A00',
    tsa:  { y25: 59.68, pred: 57.78 },
    x12:  { y25: 55, pred: 54.68 },
    x13:  { y25: 55, pred: 53.35 },
    thpt: { y25: 25.07, pred: 23.82 },
    hotScore: 40,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 88 },
      { label: 'Xu hướng thị trường', val: 73 },
      { label: 'Mức độ cạnh tranh', val: 40 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ME-GU', name: 'Cơ khí - Chế tạo máy - hợp tác với ĐH Griffith (Úc)', combo: 'A00',
    tsa:  { y25: 59.49, pred: 59.58 },
    x12:  { y25: 55, pred: 54.36 },
    x13:  { y25: 55, pred: 55.10 },
    thpt: { y25: 25, pred: 23.98 },
    hotScore: 75,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 73 },
      { label: 'Mức lương khởi điểm', val: 78 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 67 }
    ],
    reason: 'Dù có chương trình học bổng mới, nhưng đề thi TSA khó hơn và phổ điểm chung dịch sang trái. Xu hướng từ dữ liệu cộng đồng cho thấy mức điểm chuẩn dự báo sẽ GIẢM so với năm 2025. đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS5', name: 'Kỹ thuật in', combo: 'A00',
    tsa:  { y25: 56.88, pred: 56.52 },
    x12:  { y25: 55, pred: 53.39 },
    x13:  { y25: 55, pred: 54.81 },
    thpt: { y25: 24.06, pred: 22.87 },
    hotScore: 47,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 71 },
      { label: 'Mức lương khởi điểm', val: 78 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 47 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'CH1', name: 'Kỹ thuật Hoá học', combo: 'A00',
    tsa:  { y25: 56.86, pred: 55.93 },
    x12:  { y25: 55, pred: 54.13 },
    x13:  { y25: 55, pred: 54.44 },
    thpt: { y25: 24.05, pred: 22.96 },
    hotScore: 49,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 73 },
      { label: 'Mức lương khởi điểm', val: 89 },
      { label: 'Xu hướng thị trường', val: 88 },
      { label: 'Mức độ cạnh tranh', val: 49 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'MS-E3', name: 'Khoa học và kỹ thuật vật liệu (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 55.89, pred: 55.36 },
    x12:  { y25: 55, pred: 54.22 },
    x13:  { y25: 55, pred: 53.92 },
    thpt: { y25: 23.7, pred: 22.75 },
    hotScore: 69,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 87 },
      { label: 'Mức lương khởi điểm', val: 89 },
      { label: 'Xu hướng thị trường', val: 85 },
      { label: 'Mức độ cạnh tranh', val: 69 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF2', name: 'Kỹ thuật Thực phẩm', combo: 'A00',
    tsa:  { y25: 55.05, pred: 53.63 },
    x12:  { y25: 55, pred: 54.46 },
    x13:  { y25: 55, pred: 53.80 },
    thpt: { y25: 23.38, pred: 22.17 },
    hotScore: 63,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 79 },
      { label: 'Xu hướng thị trường', val: 79 },
      { label: 'Mức độ cạnh tranh', val: 63 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'CH2', name: 'Hoá học', combo: 'A00',
    tsa:  { y25: 54.66, pred: 54.46 },
    x12:  { y25: 55, pred: 53.44 },
    x13:  { y25: 55, pred: 54.05 },
    thpt: { y25: 23.19, pred: 21.96 },
    hotScore: 50,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 71 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 50 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF1', name: 'Kỹ thuật Sinh học', combo: 'A00',
    tsa:  { y25: 54.3, pred: 53.28 },
    x12:  { y25: 55, pred: 53.51 },
    x13:  { y25: 55, pred: 54.33 },
    thpt: { y25: 23.02, pred: 21.84 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 75 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 77 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TX1', name: 'Công nghệ Dệt - May', combo: 'A00',
    tsa:  { y25: 53.17, pred: 52.07 },
    x12:  { y25: 55, pred: 54.40 },
    x13:  { y25: 55, pred: 54.01 },
    thpt: { y25: 22.48, pred: 21.24 },
    hotScore: 64,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 83 },
      { label: 'Mức lương khởi điểm', val: 88 },
      { label: 'Xu hướng thị trường', val: 86 },
      { label: 'Mức độ cạnh tranh', val: 64 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EV1', name: 'Kỹ thuật Môi trường', combo: 'A00',
    tsa:  { y25: 52.63, pred: 52.46 },
    x12:  { y25: 55, pred: 53.88 },
    x13:  { y25: 55, pred: 54.64 },
    thpt: { y25: 22.22, pred: 20.75 },
    hotScore: 74,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 73 },
      { label: 'Mức lương khởi điểm', val: 71 },
      { label: 'Xu hướng thị trường', val: 78 },
      { label: 'Mức độ cạnh tranh', val: 74 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EV2', name: 'Quản lý Tài nguyên và Môi trường', combo: 'A00',
    tsa:  { y25: 51.19, pred: 49.96 },
    x12:  { y25: 55, pred: 54.47 },
    x13:  { y25: 55, pred: 53.42 },
    thpt: { y25: 21.53, pred: 20.32 },
    hotScore: 53,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 72 },
      { label: 'Xu hướng thị trường', val: 86 },
      { label: 'Mức độ cạnh tranh', val: 53 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'CH-E11', name: 'Kỹ thuật Hóa dược (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 50.88, pred: 49.20 },
    x12:  { y25: 55, pred: 54.81 },
    x13:  { y25: 55, pred: 54.90 },
    thpt: { y25: 21.38, pred: 19.98 },
    hotScore: 52,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 82 },
      { label: 'Mức lương khởi điểm', val: 75 },
      { label: 'Xu hướng thị trường', val: 88 },
      { label: 'Mức độ cạnh tranh', val: 52 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF-E12', name: 'Kỹ thuật Thực phẩm (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 50.08, pred: 49.24 },
    x12:  { y25: 55, pred: 53.01 },
    x13:  { y25: 55, pred: 53.29 },
    thpt: { y25: 21, pred: 19.75 },
    hotScore: 67,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 80 },
      { label: 'Xu hướng thị trường', val: 82 },
      { label: 'Mức độ cạnh tranh', val: 67 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'BF-E19', name: 'Kỹ thuật sinh học (CT tiên tiến)', combo: 'A00',
    tsa:  { y25: 47.99, pred: 46.28 },
    x12:  { y25: 55, pred: 53.98 },
    x13:  { y25: 55, pred: 53.66 },
    thpt: { y25: 20, pred: 18.52 },
    hotScore: 66,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 77 },
      { label: 'Mức lương khởi điểm', val: 73 },
      { label: 'Xu hướng thị trường', val: 76 },
      { label: 'Mức độ cạnh tranh', val: 66 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'FL3', name: 'Tiếng Trung KHKT và Công nghệ', combo: 'D01',
    tsa:  { y25: 68.14, pred: 67.73 },
    x12:  { y25: 69.81, pred: 68.97 },
    x13:  { y25: 64.59, pred: 62.62 },
    thpt: { y25: 24.86, pred: 23.88 },
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
    tsa:  { y25: 65.81, pred: 63.82 },
    x12:  { y25: 65.73, pred: 64.60 },
    x13:  { y25: 61.94, pred: 60.80 },
    thpt: { y25: 24.3, pred: 23.31 },
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
    tsa:  { y25: 65.81, pred: 64.12 },
    x12:  { y25: 65.73, pred: 64.66 },
    x13:  { y25: 61.94, pred: 60.86 },
    thpt: { y25: 24.3, pred: 23.06 },
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
    tsa:  { y25: 65.81, pred: 64.98 },
    x12:  { y25: 65.73, pred: 65.24 },
    x13:  { y25: 61.94, pred: 60.01 },
    thpt: { y25: 24.3, pred: 23.29 },
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
    tsa:  { y25: 65.81, pred: 64.52 },
    x12:  { y25: 65.73, pred: 65.00 },
    x13:  { y25: 61.94, pred: 60.49 },
    thpt: { y25: 24.3, pred: 23.19 },
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
    tsa:  { y25: 65.11, pred: 63.81 },
    x12:  { y25: 64.49, pred: 63.63 },
    x13:  { y25: 61.14, pred: 60.06 },
    thpt: { y25: 24.13, pred: 23.19 },
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
    tsa:  { y25: 64.15, pred: 63.75 },
    x12:  { y25: 62.81, pred: 62.63 },
    x13:  { y25: 60.05, pred: 58.23 },
    thpt: { y25: 23.9, pred: 22.55 },
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
    tsa:  { y25: 63.36, pred: 63.05 },
    x12:  { y25: 61.42, pred: 60.21 },
    x13:  { y25: 59.16, pred: 57.43 },
    thpt: { y25: 23.71, pred: 22.55 },
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
    tsa:  { y25: 63.32, pred: 62.58 },
    x12:  { y25: 61.35, pred: 61.16 },
    x13:  { y25: 59.11, pred: 58.29 },
    thpt: { y25: 23.7, pred: 22.47 },
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
    tsa:  { y25: 61.66, pred: 60.74 },
    x12:  { y25: 58.43, pred: 57.45 },
    x13:  { y25: 57.22, pred: 55.67 },
    thpt: { y25: 23.3, pred: 22.26 },
    hotScore: 73,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 83 },
      { label: 'Mức lương khởi điểm', val: 75 },
      { label: 'Xu hướng thị trường', val: 89 },
      { label: 'Mức độ cạnh tranh', val: 73 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'ED3', name: 'Quản lý giáo dục', combo: 'D01',
    tsa:  { y25: 61.25, pred: 59.80 },
    x12:  { y25: 57.7, pred: 56.04 },
    x13:  { y25: 56.75, pred: 55.59 },
    thpt: { y25: 23.2, pred: 22.22 },
    hotScore: 71,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 86 },
      { label: 'Mức lương khởi điểm', val: 83 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 71 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'EM-E13', name: 'Phân tích kinh doanh (CT tiên tiến)', combo: 'D01',
    tsa:  { y25: 60.66, pred: 59.49 },
    x12:  { y25: 56.68, pred: 56.33 },
    x13:  { y25: 56.09, pred: 56.01 },
    thpt: { y25: 23.06, pred: 21.77 },
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
    tsa:  { y25: 54.07, pred: 54.03 },
    x12:  { y25: 55, pred: 54.16 },
    x13:  { y25: 55, pred: 54.77 },
    thpt: { y25: 21.3, pred: 20.10 },
    hotScore: 49,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 88 },
      { label: 'Mức lương khởi điểm', val: 76 },
      { label: 'Xu hướng thị trường', val: 72 },
      { label: 'Mức độ cạnh tranh', val: 49 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
  {
    code: 'TROY-BA', name: 'Quản trị kinh doanh - hợp tác với ĐH Troy (Hoa Kỳ)', combo: 'D01',
    tsa:  { y25: 46.48, pred: 46.08 },
    x12:  { y25: 55, pred: 53.06 },
    x13:  { y25: 55, pred: 54.20 },
    thpt: { y25: 19, pred: 17.60 },
    hotScore: 45,
    hotFactors: [
      { label: 'Cơ hội việc làm', val: 80 },
      { label: 'Mức lương khởi điểm', val: 80 },
      { label: 'Xu hướng thị trường', val: 78 },
      { label: 'Mức độ cạnh tranh', val: 45 }
    ],
    reason: 'Theo căn cứ từ dữ liệu đóng góp của hơn 4000 thí sinh và độ khó của đề thi năm nay, điểm chuẩn của nhóm ngành này có xu hướng GIẢM nhẹ nhằm đảm bảo chỉ tiêu tuyển sinh., phù hợp với các thí sinh có mức điểm trung bình khá. Cơ hội việc làm vẫn đảm bảo, nhưng ít chịu áp lực tăng điểm như nhóm IT hay Kinh tế.',
    specNote: 'Dự đoán tham khảo dựa trên phổ điểm 2025-2026.'
  },
];
