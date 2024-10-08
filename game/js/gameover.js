


    // 等待动画完成后允许点击
    animatedText.addEventListener('animationend', function() {
        document.body.addEventListener('click', function() {
            window.location.href = '../../start/start.html'; // 将此处的URL替换为你想要跳转的页面

            
        });
    });
});

