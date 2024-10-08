document.querySelector('.dialogue-box').addEventListener('click', () => {
    if (isShowingFullText) {
        currentDialogue++;
        if (currentDialogue < dialogues.length) {
            showDialogue();
        } else {
            // 所有对话结束后跳转到下一个 HTML 文件
            window.location.href = '3.7.html'; // 改改改！
        }
    } else {
        dialogueElement.textContent = dialogues[currentDialogue].text; // 快速显示完整对话
        currentCharIndex = dialogues[currentDialogue].text.length;
        isShowingFullText = true;
    }
});


let dialogues = [
    { text: "【你来到了混入了贫寒学子在贡院打工的队伍，碰到了来找你拜师的李序。他看到你眼神立马亮起了光，但在你眼神的示意下并未伸张，而是暗中靠拢】", character: "李序", speaker: 2 },
    { text: "(压低声音说话) 大人怎么穿成这样来贡院视察？", character: "李序", speaker: 2 },

    { text: "我来实地看看这些惠民的新政策，大家可别因为这个把自己累着了影响考试", character: "玩家", speaker: 1 },
    { text: "大人实在是心忧我等草民，但是......(欲言又止)", character: "李序", speaker: 2 },
    { text: "但说无妨 ", character: "玩家", speaker: 1 },
    { text: "大人，草民祖上是泥瓦匠，这几日修外墙却发现这贡院所用砖头看似坚固，实则以次充好，还不如之前的旧砖。", character: "李序", speaker: 2 },
    { text: "但草民一面之词也人言微轻，只能说与大人您，还望大人暗中调查，草民为这天下学生谢谢大人了。", character: "李序", speaker: 2 },

    { text: "【你蹲下身来查看自己背的砖头，掰下一小块准备回宫让人查看】\n我知道了，谢谢你 ", character: "玩家", speaker: 1 },
    { text: "大人，其实还有一事", character: "李序", speaker: 2 },
    { text: "其实来这里干活的考生都是被记录在册的，大家都想给礼部尚书留下好印象，如果能有幸和礼部尚书说上话，他们的考卷就能获得优先批阅权。", character: "李序", speaker: 2 },
    { text: "这春闱的黑幕大家都知道，朝中大员，宫里和太学每次都会推荐几个得意门生，家里有钱有势的考生走后门，托关系，都希望能做这些人的门生。", character: "李序", speaker: 2 },
    { text: "还有一些文坛名士要照顾，真正留给成千上万考生的名额寥寥无几，春闱就是个给他们搭建平台的摆设。", character: "李序", speaker: 2 },

    { text: "【你听闻后勃然大怒，忍着怒气干完活后回宫先检验砖，果不其然，砖以次充好】 ", character: "玩家", speaker: 1 },
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