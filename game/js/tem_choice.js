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

    switch(option) {
        case '父皇教训的是':
            emperor += 10;//改改改！！！！！！！！！！！！
            sixArts -= 5;
            break;
        case '儿臣就是不喜欢读书嘛'://根据实际情况改改改！！！！
            emperor -= 10;
            military += 20;
            sixArts += 5;
            break;
        default:
            break;
    }

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
    if (isShowingFullText) {
        autoSave();
        window.location.href = "2.2.html"; // 改改改！
    } else {
        dialogueText.textContent = selectedDialogue;
        currentCharIndex = selectedDialogue.length;
        isShowingFullText = true;
    }
});

function selectOption(option) {

     // 更新点数！！！！！！！！！！这句加到原来里面！！！！！！！！！
    updatePoints(option);//就这句！！！！！

    const optionsContainer = document.getElementById('options');

    switch(option) {//改改改！！！！！！后面弹的认可度数值！！！！改掉！！！
        case '父皇教训的是':
            selectedDialogue = "皇上面露喜色，十分满意：\"不错，倒没有把这志气给忘了，好好习诗书，朕可是以后要考你的。\"\n\n认可度+10";
            break;
        case '儿臣就是不喜欢读书嘛':
            selectedDialogue = "皇上叹气：\"唉，由你胡闹吧。\"";
            break;
    }
    hasSelectedOption = true;
    optionsContainer.style.display = 'none';
    showDialogue();
}

let dialogueText = document.getElementById('dialogue-text');
let currentCharIndex = 0;
let isShowingFullText = false;
let selectedDialogue = '';
let hasSelectedOption = false;

function showNextChar() {
    if (currentCharIndex < selectedDialogue.length) {
        dialogueText.textContent += selectedDialogue[currentCharIndex];
        currentCharIndex++;
        setTimeout(showNextChar, 50);
    } else {
        isShowingFullText = true;
    }
}

function showDialogue() {
    dialogueText.textContent = '';
    currentCharIndex = 0;
    isShowingFullText = false;
    showNextChar();
}


document.addEventListener('DOMContentLoaded', () => {
    dialogueText.textContent = "【你选择】"; // 页面加载时显示初始话语
});
