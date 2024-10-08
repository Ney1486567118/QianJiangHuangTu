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
        case '国破山河在，城春草木深。':
            emperor -= 30;//改改改！！！！！！！！！！！！
            sixArts -= 20;
            break;
        case '春眠不觉晓，处处闻啼鸟。'://根据实际情况改改改！！！！
            break;
        case '日融花气暖，忘却是谁香。'://根据实际情况改改改！！！！
            emperor += 20;
            talent += 20;
            sixArts += 20;
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
        window.location.href = "2.10.html"; // 改改改！
    } else if (hasSelectedOption) {
        // 如果对话正在逐字显示
        dialogueText.textContent = selectedDialogue;
        currentCharIndex = selectedDialogue.length;
        isShowingFullText = true;
    }
});


// 改改改 对话内容
function selectOption(option) {
    updatePoints(option);//就这句！！！！！

    const optionsContainer = document.getElementById('options');
    
    switch(option) {
        case '国破山河在，城春草木深。':
            selectedDialogue = "【皇上大怒】\"盛世美景，你怎能吟此亡国之诗？\"\n六艺-20；皇帝认可度-30";
            break;
        case '春眠不觉晓，处处闻啼鸟。':
            selectedDialogue = "【皇上无奈】\"在你牙牙学语是便会吟此诗，为何多年来没有任何长进？\"";
            break;
            case '日融花气暖，忘却是谁香。':
                selectedDialogue = "【皇上微笑】\"好景好诗，深得朕心，朕是极爱苏轼啊。\"\n六艺+20；才华+20；皇帝认可度+20";
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
    dialogueText.textContent = "【你选择】"; // 页面加载时显示初始话语
});
