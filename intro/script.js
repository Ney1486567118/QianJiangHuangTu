let currentPage = 0;
let pages = document.querySelectorAll('.page');
let currentSentence = 0;
let showSentenceInterval = 3000; // 每行文字显示的时间间隔
let showPageInterval = 1500; // 每页的显示时间
let fadeDuration = 1000; // 页面淡入淡出持续时间

function showNextSentence() {
    let sentences = pages[currentPage].querySelectorAll('.sentence');
    
    if (currentSentence < sentences.length) {
        sentences[currentSentence].style.opacity = 1; // 显示当前句子
        currentSentence++;
        setTimeout(showNextSentence, showSentenceInterval); // 定时显示下一行
    } else {
        // 当前段落显示完毕后，延时翻页
        setTimeout(nextPage, showPageInterval);
    }
}

function nextPage() {
    // 先将当前页面淡出
    pages[currentPage].style.transition = `opacity ${fadeDuration}ms ease-in-out`;
    pages[currentPage].style.opacity = 0; // 淡出当前页面
    
    // 等待淡出完成后，切换到下一页
    setTimeout(() => {
        pages[currentPage].style.display = 'none'; // 完全淡出后隐藏当前页面
        currentPage++;
        currentSentence = 0; // 重置句子计数
        
        if (currentPage < pages.length) {
            pages[currentPage].style.display = 'block'; // 显示下一段落
            pages[currentPage].style.opacity = 0; // 先将下一个页面设置为透明
            pages[currentPage].style.transition = `opacity ${fadeDuration}ms ease-in-out`;
            
            setTimeout(() => {
                pages[currentPage].style.opacity = 1; // 让下一段落淡入
                showNextSentence(); // 开始显示下一段落的句子
            }, 50); // 确保页面显示后才开始淡入
        } else {
            // 如果所有段落都显示完，跳转到 index.html
            window.location.href = 'login/login.html';
        }
    }, fadeDuration); // 等待淡出完成
}

function skipIntro() {
    window.location.href = "login/login.html"; // 直接跳转
}

// 开始时显示第一个段落
pages[currentPage].style.display = 'block';
pages[currentPage].style.opacity = 1; // 初始页面立即显示
showNextSentence();
