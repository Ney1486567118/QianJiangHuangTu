document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            autoSave();
            window.location.href = '../html/2.1.html'; // 改改改！
        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue].text; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].text.length;
        isShowingFullText = true;
    }
});


let dialogues = [
    { text: "【春日渐暖，在昭妃的照料下你的病逐渐好转，可以下地行走了。这日你正躺在床上，忽然听见外面大总管\"皇上驾到\"的声音，倏然慌了心神。】", character: "玩家", speaker: 1 },
    { text: "儿臣参见父皇，父皇万福金安。", character: "玩家", speaker: 1 },
    { text: "【明黄的身影由远及近，一双温暖有力的大手将你拉起。你偷偷抬头，望向了一双威严深邃，仿佛能够洞悉一切的眼睛】", character: "皇帝", speaker: 2 },
    { text: "手怎么这么冷，你病体未愈，无需多礼，快坐下。这几日怎么样，身体可有什么不适?", character: "皇帝", speaker: 2},
    { text: "多谢父皇关心，儿臣已经要好全了。", character: "玩家", speaker: 1},
    { text: "这段时间你在病中，确实是要好生休养，不要劳神伤思把身子给败坏了。朕听闻你因病记忆多有遗忘，可有此事?", character: "皇帝", speaker: 2},
    { text: "儿臣......儿臣大部分人事还记得，但是夫子教的诗书文章，倒确实是忘光了", character: "玩家", speaker: 1},
    { text: "【闻言大笑】", character: "皇帝", speaker: 2},
    { text: "好你个机灵鬼，平时不好好学诗书，现在到来怪这病让你忘光了，你以前连《出师表》都背不全，朕都给你记着呢", character: "皇帝", speaker: 2},
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