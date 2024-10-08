function go_back(){
    location.assign("start.html");
}

function init(){
    console.log("init() function called");

    let data_1 = localStorage.getItem("ach1");
    if(data_1=="true"){
        var tmp = document.getElementById('1');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p11').innerHTML = "Unlocked";
        document.getElementById('p12').innerHTML = "结局二: 你因结党营私，徇私舞弊，扰乱春闱被贬为庶民，彻底与皇位无缘。";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_2 = localStorage.getItem("ach2");
    if(data_2=="true"){
        var tmp = document.getElementById('2');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p21').innerHTML = "Unlocked";
        document.getElementById('p22').innerHTML = "考场突然燃起了熊熊大火，数十学子命丧考场。作为主考官的你难辞其咎，被贬为平民，彻底与皇位无缘";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    // let data_1_0 = JSON.parse(localStorage.getItem("ach1_0"));
    //let data_1_1 = JSON.parse(localStorage.getItem("ach1_1"));
    //let data_1_2 = JSON.parse(localStorage.getItem("ach1_2"));
    let data_3 = localStorage.getItem("ach3");
    //if((data_1_0=="true")&&(data_1_1=="true")&&(data_1_2=="true")){
    if(data_3=="true"){
        var tmp = document.getElementById('3');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p31').innerHTML = "Unlocked";
        document.getElementById('p32').innerHTML = "玩过三款minigame";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_4 = localStorage.getItem("ach4");
    if(data_2=="true"){
        var tmp = document.getElementById('4');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p41').innerHTML = "Unlocked";
        document.getElementById('p42').innerHTML = "将过去美好的回忆留在学校与心底，迎接未知的未来。";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_5 = localStorage.getItem("ach5");
    if(data_5=="true"){
        var tmp = document.getElementById('5');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p51').innerHTML = "Unlocked";
        document.getElementById('p52').innerHTML = "接受慈姐“爱的抱抱与进食”";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_6 = localStorage.getItem("ach6");
    if(data_6=="true"){
        var tmp = document.getElementById('6');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p61').innerHTML = "Unlocked";
        document.getElementById('p62').innerHTML = "重要的人，包括自己，全都逝去。";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_7 = localStorage.getItem("ach7");
    if((data_7=="true")&&(data_2=="true")&&(data_3=="true")&&(data_4=="true")){
        var tmp = document.getElementById('7');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p71').innerHTML = "Unlocked";
        document.getElementById('p72').innerHTML = "解锁全部结局";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    //if((data_0!="true")&&(data_2=="true")&&(data_3!="true")&&(data_4!="true")){
    // let data_8 = JSON.parse(localStorage.getItem("ach8"));
    let data_8 = localStorage.getItem("ach8");

    if(data_8=="true"){
        var tmp = document.getElementById('8');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p81').innerHTML = "Unlocked";
        document.getElementById('p82').innerHTML = "在不经过任何bad end的情况下，走向最终结局";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_9 = localStorage.getItem("ach9");
    if(data_9=="true"){
        var tmp = document.getElementById('9');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p91').innerHTML = "Unlocked";
        document.getElementById('p92').innerHTML = "结局二: 你因结党营私，徇私舞弊，扰乱春闱被贬为庶民，彻底与皇位无缘。";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_10 = localStorage.getItem("ach2");
    if(data_10=="true"){
        var tmp = document.getElementById('10');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p101').innerHTML = "Unlocked";
        document.getElementById('p102').innerHTML = "考场突然燃起了熊熊大火，数十学子命丧考场。作为主考官的你难辞其咎，被贬为平民，彻底与皇位无缘";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    // let data_1_0 = JSON.parse(localStorage.getItem("ach1_0"));
    //let data_1_1 = JSON.parse(localStorage.getItem("ach1_1"));
    //let data_1_2 = JSON.parse(localStorage.getItem("ach1_2"));
    let data_11 = localStorage.getItem("ach3");
    //if((data_1_0=="true")&&(data_1_1=="true")&&(data_1_2=="true")){
    if(data_11=="true"){
        var tmp = document.getElementById('ach11');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p111').innerHTML = "Unlocked";
        document.getElementById('p112').innerHTML = "玩过三款minigame";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_12 = localStorage.getItem("ach12");
    if(data_12=="true"){
        var tmp = document.getElementById('12');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p121').innerHTML = "Unlocked";
        document.getElementById('p122').innerHTML = "将过去美好的回忆留在学校与心底，迎接未知的未来。";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_13 = localStorage.getItem("ach13");
    if(data_13=="true"){
        var tmp = document.getElementById('13');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p131').innerHTML = "Unlocked";
        document.getElementById('p132').innerHTML = "接受慈姐“爱的抱抱与进食”";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_14 = localStorage.getItem("ach14");
    if(data_14=="true"){
        var tmp = document.getElementById('14');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p141').innerHTML = "Unlocked";
        document.getElementById('p142').innerHTML = "重要的人，包括自己，全都逝去。";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    let data_15 = localStorage.getItem("ach15");
    if((data_15=="true")&&(data_2=="true")&&(data_3=="true")&&(data_4=="true")){
        var tmp = document.getElementById('15');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p151').innerHTML = "Unlocked";
        document.getElementById('p152').innerHTML = "解锁全部结局";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
    //if((data_0!="true")&&(data_2=="true")&&(data_3!="true")&&(data_4!="true")){
    let data_16 = localStorage.getItem("ach16");
    if(data_16=="true"){
        var tmp = document.getElementById('16');
        tmp.setAttribute('style', 'width: calc(25% - 2rem); margin: 1rem;cursor: pointer; filter:brightness(1.1);');
        document.getElementById('p161').innerHTML = "Unlocked";
        document.getElementById('p162').innerHTML = "在不经过任何bad end的情况下，走向最终结局";
        var frontElement = tmp.querySelector('.front'); // 找到对应的 .front 元素
        if (frontElement) {
            frontElement.classList.add('front-bright'); // 添加亮度类
        }
    }
}

window.onload = function() {
    init();
};