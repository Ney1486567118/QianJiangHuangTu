document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        autoSave();
        window.location.href = nextPageUrl; // 改改改！
    } else if (hasSelectedOption) {
        // 如果对话正在逐字显示
        dialogueText.textContent = selectedDialogue;
        currentCharIndex = selectedDialogue.length;
        isShowingFullText = true;
    }
});


// 改改改 对话内容
function selectOption(option) {
    const optionsContainer = document.getElementById('options');
    
    switch(option) {
        case '拷问延禧宫中的其他宫女':
            selectedDialogue = "拷问延禧宫中的其他宫女";
            nextPageUrl = "4.17.1.html"; // 改改改！
            break;
        case '调查指控此事的宫女的人脉往来':
            selectedDialogue = "调查指控此事的宫女的人脉往来";
            var index = window.localStorage.userid;
            users = JSON.parse(localStorage.getItem('users'));
            users[index].achi12 = 1;
            console.log("index:", index); // 确认index的值
            console.log("users:", users); // 确认array是否被正确解析
            console.log("users[index]:", users[index]); // 确认 array[index] 是否有效
            console.log("users[index].achi12:", users[index].achi12);
    
            // window.localStorage.users = JSON.stringify(users);
            localStorage.setItem('users', JSON.stringify(users));
            // alert('恭喜你找到所有不同处！按确认自动跳转。');
            window.location.href = '4.17.2.html';
            // nextPageUrl = "4.17.2.html"; // 改改改！
            break;
    }
    
    hasSelectedOption = true;
    optionsContainer.style.display = 'none'; // 隐藏选项
    showDialogue(); // 开始显示对话
}

let dialogueText = document.getElementById('dialogue-text');
let currentCharIndex = 0;
let isShowingFullText = false;
let selectedDialogue = ''; // 当前选择的对话内容
let nextPageUrl = ''; // 存储下一个跳转的页面URL
let hasSelectedOption = false;

function showNextChar() {
    if (currentCharIndex < selectedDialogue.length) {
        dialogueText.textContent += selectedDialogue[currentCharIndex];
        currentCharIndex++;
        setTimeout(showNextChar, 50); // 控制每个字符出现的速度
    } else {
        isShowingFullText = true; // 当整个对话显示完时
    }
}

function showDialogue() {
    dialogueText.textContent = ''; // 清空对话框内容
    currentCharIndex = 0;
    isShowingFullText = false;
    showNextChar(); // 开始逐字符显示对话
}


document.addEventListener('DOMContentLoaded', () => {
    dialogueText.textContent = "【你选择】"; // 页面加载时显示初始话语
});
