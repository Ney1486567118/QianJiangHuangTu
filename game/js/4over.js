
showCustomModal();
document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animatedText');

    // 等待动画完成后允许点击
    animatedText.addEventListener('animationend', function() {
        document.body.addEventListener('click', function() {
            window.location.href = '../../start/start.html'; // 将此处的URL替换为你想要跳转的页面
        });
    });
});
function showCustomModal() {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'flex'; // 显示弹窗

    var closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.onclick = function() {
        modal.style.display = 'none'; // 关闭弹窗
    };
}
