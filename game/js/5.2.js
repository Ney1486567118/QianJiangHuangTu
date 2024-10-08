document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        autoSave();
        window.location.href = "5.3.html"; // 改改改！
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
        case '太子二哥看起来不胜酒力啊':
            selectedDialogue = "太子二哥看起来不胜酒力啊";
            break;
        case '太子二哥还是少喝点酒吧':
            selectedDialogue = "太子二哥还是少喝点酒吧";
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
    dialogueText.textContent = "【你走上去敬太子酒】:恭喜太子殿下替父皇分担重任啊，只是今天是重要聚会，"; // 页面加载时显示初始话语
});
