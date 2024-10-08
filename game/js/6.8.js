let dialogues = [
    "【经历了数年的沙场征战，战争胜利的消息传遍天下，你已然成为你已然成为民众心中的英雄】",
    "【使者跪地，双手呈上皇上的诏书，宣读着你被召回皇宫的命令。你听着那熟悉而又陌生的诏书，心中涌起了复杂的情绪。】\n军事能力+50",
    "【你曾是被流放的皇子，因为宫廷的权力斗争而被迫离开故土，流浪在外。那些日子里，你品尝了人间的冷暖，体验了世事的艰辛。】",
    "【但正是这些经历，铸就了你坚强的意志和不屈的精神。】",
    "【如今，你以战功赫赫的身份被召回，不再是那个被放逐的皇子，你脱下战袍，换上了皇子服饰，尽管有些陌生，但你明白，这不仅仅是一次身份的回归，更是一次责任的重新承担。】",

];
//新增内容
function getUsername() {
    // 从 localStorage 获取当前登录的用户名
    const username = localStorage.getItem('username');

    if (username) {
        return username; 
    } else {
        console.error('未找到登录的用户名');
        return null; 
    }
}

function check(emperor, military, sixArts, wisdom, reputation, talent) {
    return {
        emperor: Math.max(0, Math.min(100, emperor)),
        military: Math.max(0, Math.min(100, military)),
        sixArts: Math.max(0, Math.min(100, sixArts)),
        wisdom: Math.max(0, Math.min(100, wisdom)),
        reputation: Math.max(0, Math.min(100, reputation)),
        talent: Math.max(0, Math.min(100, talent))
    };
}

function updatePoints(option) {
    const username = getUsername();
    
    let emperor = parseInt(localStorage.getItem(`${username}-emperorAffection`)) || 0;
    let military = parseInt(localStorage.getItem(`${username}-militaryCapability`)) || 0;
    let sixArts = parseInt(localStorage.getItem(`${username}-sixArts`)) || 0;
    let wisdom = parseInt(localStorage.getItem(`${username}-wisdom`)) || 0;
    let reputation = parseInt(localStorage.getItem(`${username}-reputation`)) || 0;
    let talent = parseInt(localStorage.getItem(`${username}-talent`)) || 0;

    military += 50;
    const updatedValues = check(emperor, military, sixArts, wisdom, reputation, talent);

    localStorage.setItem(`${username}-emperorAffection`, updatedValues.emperor);
    localStorage.setItem(`${username}-militaryCapability`, updatedValues.military);
    localStorage.setItem(`${username}-sixArts`, updatedValues.sixArts);
    localStorage.setItem(`${username}-wisdom`, updatedValues.wisdom);
    localStorage.setItem(`${username}-reputation`, updatedValues.reputation);
    localStorage.setItem(`${username}-talent`, updatedValues.talent);
}
//新增结束
document.querySelector('.dialogue-box').addEventListener('click', () => {
    getUsername()
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            autoSave();
            window.location.href = '9.1.html'; // 替换为你的目标 HTML 文件
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


