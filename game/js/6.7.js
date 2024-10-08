let dialogues = [
    "【经过一番惨烈的厮杀，终于，胜利的号角在这片古老的大地上响起。天空中，夕阳如血，将整个战场染成了一片金红。】",
    "【在这片被战火洗礼的土地上，虽然留下了无数的创伤，但胜利的喜悦和对和平的渴望，让人们对未来充满了希望。】",
    "【战争虽然残酷，但胜利的这一天，却是如此的光辉灿烂......】",
];


// 显示自定义弹窗，替换 alert
function showCustomModal() {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'flex'; // 显示弹窗

    var closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.onclick = function() {
        modal.style.display = 'none'; // 关闭弹窗
        window.location.href = '6.8.html';
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
            // alert("获得成就：英勇杀敌");

            var index = window.localStorage.userid;
            users = JSON.parse(localStorage.getItem('users'));
            users[index].achi6 = 1;
            console.log("index:", index); // 确认index的值
            console.log("users:", users); // 确认array是否被正确解析
            console.log("users[index]:", users[index]); // 确认 array[index] 是否有效
            console.log("users[index].achi6:", users[index].achi6);
    
            // window.localStorage.users = JSON.stringify(users);
            localStorage.setItem('users', JSON.stringify(users));
            // alert('恭喜你找到所有不同处！按确认自动跳转。');
            showCustomModal();
            // window.location.href = '6.8.html'; // 替换为你的目标 HTML 文件
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


