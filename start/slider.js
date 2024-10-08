document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 0;
    const slider = document.getElementById('achievement-slider');
    const pages = document.querySelectorAll('.achievement-page');
    
    // 触摸事件监听
    let startX = 0;
    let endX = 0;
    
    function switchPage(pageIndex) {
        const offset = pageIndex * -100;
        slider.style.transform = `translateX(${offset}%)`;
        currentPage = pageIndex;
    }

    slider.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    slider.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX;
        if (startX > endX + 50 && currentPage < pages.length - 1) {
            switchPage(currentPage + 1);
        } else if (startX < endX - 50 && currentPage > 0) {
            switchPage(currentPage - 1);
        }
    });
});
