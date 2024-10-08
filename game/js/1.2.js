document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            autoSave();
            window.location.href = '../html/1.3.html'; // 改改改！
        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue].text; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].text.length;
        isShowingFullText = true;
    }
});


let dialogues = [
    { text: "【五感六识逐渐回归，空气中弥漫着一股药香。你积蓄力量倏然睁开双眼，眼前人影绰绰，是个温婉而忧愁的宫装女子】", character: "玩家", speaker: 1 },
    { text: "【女子见你醒了，喜不自胜落下泪来，急忙拉住你的手。你朝四周望去，只见紫檀雕窗锦绣画屏，端是一副后宫绮丽光景】 ", character: "玩家", speaker: 1},
    { text: " 母妃......", character: "玩家", speaker: 1},
    { text: "【女子显然是这间屋子里做主的人，就连发号施令也很是端庄从容，教人心甘情愿地听她使唤】 \n", character: "昭妃", speaker: 2 },
    { text: "素云，伺候三皇子喝水。堇心，快叫人请御医过来。", character: "昭妃", speaker: 2 },
];

let currentDialogue = 0;
let currentCharIndex = 0;
let isShowingFullText = false;
let dialogueElement = document.getElementById('dialogue-text');
let characterElement = document.getElementById('character-name');
let person1 = document.getElementById('person1');
let person2 = document.getElementById('person2');

function showNextChar() {
    if (currentCharIndex < dialogues[currentDialogue].text.length) {
        dialogueElement.textContent += dialogues[currentDialogue].text[currentCharIndex];
        currentCharIndex++;
        setTimeout(showNextChar, 50); // 控制每个字符出现的速度
    } else {
        isShowingFullText = true; // 当整个对话显示完时
    }
}

function showDialogue() {
    dialogueElement.textContent = ''; // 清空对话框内容
    currentCharIndex = 0;
    characterElement.textContent = dialogues[currentDialogue].character;
    isShowingFullText = false;
    showNextChar();

    if (dialogues[currentDialogue].speaker === 1) {
        person1.style.opacity = "1";
        person2.style.opacity = "0.5";
    } else {
        person1.style.opacity = "0.5";
        person2.style.opacity = "1";
    }
}


// 开始显示第一段对话
showDialogue();