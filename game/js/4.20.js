let dialogues = [
    "【你成功帮助四皇子为熙妃和将军府正名，从此四皇子和将军府成为了你的最大助力。】。",
    "【同时因为此事皇帝对你更加赏识。不过，皇后做事滴水不漏，将此事推得干净，并未留下把柄。】"
];

// alert("获得成就：聪慧过人");
// 显示自定义弹窗，替换 alert
function showCustomModal() {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'flex'; // 显示弹窗

    var closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.onclick = function() {
        modal.style.display = 'none'; // 关闭弹窗
        window.location.href = '5.1.html'; // 跳转到下一个页面
    };
}

document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            autoSave();
            showCustomModal();

        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue]; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].length;
        isShowingFullText = true;
    }
});

let currentDialogue = 0;
let currentCharIndex = 0;
let isShowingFullText = false;
let dialogueElement = document.getElementById('dialogue-text');

function showNextChar() {
    if (currentCharIndex < dialogues[currentDialogue].length) {
        dialogueElement.textContent += dialogues[currentDialogue][currentCharIndex];
        currentCharIndex++;
        setTimeout(showNextChar, 50); // 控制每个字符出现的速度
    } else {
        isShowingFullText = true; // 当整个对话显示完时
    }
}

function showDialogue() {
    dialogueElement.textContent = ''; // 清空对话框内容
    currentCharIndex = 0;
    isShowingFullText = false;
    showNextChar();
}


// 开始显示第一段对话
showDialogue();


// function autoSave() {
//     // 获取当前用户的用户名
//     const username = localStorage.getItem('username');
//     if (!username) {
//         console.error('用户名未找到');
//         return;
//     }

//     const autoSaveData = {
//         url: window.location.href, // 当前网页地址
//         title: document.title,
//         time: new Date().toLocaleString(), // 当前时间，格式为字符串
//         background: getComputedStyle(document.body).backgroundImage // 获取背景图片的 URL
//     };

//     // 使用用户名作为前缀将自动存档数据保存到 localStorage 中
//     localStorage.setItem(`${username}_autoSave`, JSON.stringify(autoSaveData));
// }

// // 删除截图功能的手动存档
// function captureScreenshotAndSave() {
//     // 构建完整的手动存档数据对象
//     const manualSaveData = {
//         url: window.location.href,
//         title: document.title, // 获取当前页面的标题作为剧情名称
//         time: new Date().toLocaleString() // 存档时间
//     };

//     // 保存手动存档数据到 localStorage 中
//     localStorage.setItem('manualSaveData', JSON.stringify(manualSaveData));

//     // 完成存档操作后跳转到 score.html
//     window.location.href = '../../start/score.html';
// }

// // 点击事件绑定
// document.getElementById('pause-btn').addEventListener('click', function() {
//     // 直接调用手动存档功能
//     localStorage.setItem('previousStoryUrl', window.location.href);
//     captureScreenshotAndSave();
// });



// function autoSave() {
//     // 获取当前用户的用户名
//     const username = localStorage.getItem('username');
//     if (!username) {
//         console.error('用户名未找到');
//         return;
//     }

//     html2canvas(document.body).then(function(canvas) {
//         const screenshotData = canvas.toDataURL('image/png');
//         localStorage.setItem('screenshot', screenshotData);
        
//         const autoSaveData = {
//             url: window.location.href, // 当前网页地址
//             time: new Date().toLocaleString(), // 当前时间，格式为字符串
//             background: getComputedStyle(document.body).backgroundImage, // 获取背景图片的 URL
//             screenshot: screenshotData // 截图的 base64 数据
//         };

//         // 使用用户名作为前缀将自动存档数据保存到 localStorage 中
//         localStorage.setItem(`${username}_autoSave`, JSON.stringify(autoSaveData));
//     });
// }

// // 截取页面截图并存入 localStorage
// function captureScreenshotAndSave() {
//     html2canvas(document.body).then(function(canvas) {
//         const screenshotData = canvas.toDataURL('image/png');
//         localStorage.setItem('screenshot', screenshotData);

//         // 构建完整的手动存档数据对象
//         const manualSaveData = {
//             title: document.title, // 获取当前页面的标题作为剧情名称
//             time: new Date().toLocaleString(), // 存档时间
//             screenshot: screenshotData // 截图的 base64 数据
//         };

//         // 保存手动存档数据到 localStorage 中
//         localStorage.setItem('manualSaveData', JSON.stringify(manualSaveData));

//         // 完成存档操作后跳转到 score.html
//         window.location.href = '../../start/score.html';
//     });
// }

// // 点击事件绑定
// document.getElementById('pause-btn').addEventListener('click', function() {
//     // 截取截图并保存到 localStorage，然后跳转
//     captureScreenshotAndSave();
// });


