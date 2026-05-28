const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'js', 'data.js');
let content = fs.readFileSync(dataPath, 'utf8');

// Replace string reasons directly
content = content.replace(/Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu với độ cạnh tranh cực cao\. Nhu cầu nhân lực AI, Data, Cloud bùng nổ toàn cầu\. Dự đoán điểm chuẩn tiếp tục tăng trong năm 2026\./g, 'Nhóm ngành Công nghệ thông tin tiếp tục dẫn đầu. Nhu cầu nhân lực AI, Data bùng nổ. Điểm SAT năm nay rất cao cũng làm tăng mức độ cạnh tranh của các phương thức xét tuyển sớm, kéo theo điểm chuẩn dự đoán tiếp tục tăng mạnh.');

content = content.replace(/Khối ngành kỹ thuật truyền thống, điện tử, viễn thông có sức hút ổn định\. Cơ hội việc làm rộng mở nhờ làn sóng FDI công nghệ cao \(bán dẫn, tự động hóa\)\. Dự đoán điểm chuẩn tăng nhẹ\./g, 'Khối ngành kỹ thuật (Cơ khí, Điện, Viễn thông...) đang có sức hút lớn nhờ chương trình học bổng mới của BKHN và làn sóng FDI công nghệ cao (bán dẫn). Điểm chuẩn dự báo sẽ có mức tăng đáng kể.');

// To modify the objects inside the file safely, we can use simple regex replacements or eval.
// Since it's a simple JS file with const METHODS = [...] and const MAJORS = [...], let's try eval.
// But evaluating the file string as a script context and then stringifying it is hard because of the comments and structure.
// Instead, let's use regex to selectively boost `hotScore` and `pred` for engineering and IT.

// 1. Boost hotScore for Engineering (ME, EE, TE, ET)
content = content.replace(/code: '(ME|EE|TE|ET)[^']*'.*?hotScore: (\d+)/gs, (match, prefix, hotScore) => {
    let newScore = Math.min(100, parseInt(hotScore) + 8);
    return match.replace(`hotScore: ${hotScore}`, `hotScore: ${newScore}`);
});

// 2. Boost pred slightly for all methods if it's an engineering major or IT major
// We can just add +0.5 to pred values for those.
content = content.replace(/code: '(ME|EE|TE|ET|IT)[^']*'.*?tsa:\s*{\s*y25:\s*([\d.]+),\s*pred:\s*([\d.]+)\s*}/gs, (match, prefix, y25, pred) => {
    let newPred = (parseFloat(pred) + 0.6).toFixed(2);
    return match.replace(`pred: ${pred}`, `pred: ${newPred}`);
});
content = content.replace(/code: '(ME|EE|TE|ET|IT)[^']*'.*?x12:\s*{\s*y25:\s*([\d.]+),\s*pred:\s*([\d.]+)\s*}/gs, (match, prefix, y25, pred) => {
    let newPred = (parseFloat(pred) + 0.8).toFixed(2);
    return match.replace(`pred: ${pred}`, `pred: ${newPred}`);
});
content = content.replace(/code: '(ME|EE|TE|ET|IT)[^']*'.*?x13:\s*{\s*y25:\s*([\d.]+),\s*pred:\s*([\d.]+)\s*}/gs, (match, prefix, y25, pred) => {
    let newPred = (parseFloat(pred) + 0.8).toFixed(2);
    return match.replace(`pred: ${pred}`, `pred: ${newPred}`);
});
content = content.replace(/code: '(ME|EE|TE|ET|IT)[^']*'.*?thpt:\s*{\s*y25:\s*([\d.]+),\s*pred:\s*([\d.]+)\s*}/gs, (match, prefix, y25, pred) => {
    let newPred = (parseFloat(pred) + 0.2).toFixed(2);
    return match.replace(`pred: ${pred}`, `pred: ${newPred}`);
});

fs.writeFileSync(dataPath, content, 'utf8');
console.log('Successfully updated data.js');
