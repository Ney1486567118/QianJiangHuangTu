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
        case '跟着皇上上去查看情况':
            selectedDialogue = "你跟着皇上走上前去，只见一男一女衣衫半褪，在倚梅园中的亭子内共赴云雨。皇上当即震怒，叫内侍上前拿下，可内侍上前看清男女容貌后战战兢兢，倒先跑回来给皇上回话。";
            nextPageUrl = "5.8.1.html"; // 改改改！
            break;
        case '站在原地不动':
            selectedDialogue = "只见内侍跑到皇帝身边耳语几句，皇上便勃然大怒，下令将那对男女押送过来。你一看，竟然是太子殿下和准噶尔献于皇上的香妃娘娘。";
            nextPageUrl = "5.9.html"; // 改改改！
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
