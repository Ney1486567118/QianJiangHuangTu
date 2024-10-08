showCustomModal();
document.addEventListener('DOMContentLoaded', function() {
    const animatedText = document.getElementById('animatedText');

    //alert("获得成就：一锅端，全都完蛋辣");

    var index = window.localStorage.userid;
    users = JSON.parse(localStorage.getItem('users'));
    users[index].achi7 = 1;
    console.log("index:", index); // 确认index的值
    console.log("users:", users); // 确认array是否被正确解析
    console.log("users[index]:", users[index]); // 确认 array[index] 是否有效
    console.log("users[index].achi7:", users[index].achi7);

    // window.localStorage.users = JSON.stringify(users);
    localStorage.setItem('users', JSON.stringify(users));
    
    // 等待动画完成后允许点击
    animatedText.addEventListener('animationend', function() {
        document.body.addEventListener('click', function() {
            window.location.href = '../../start/start.html'; // 将此处的URL替换为你想要跳转的页面
        });
    });
});
// 显示自定义弹窗，替换 alert
function showCustomModal() {
    var modal = document.getElementById('custom-modal');
    modal.style.display = 'flex'; // 显示弹窗

    var closeModalBtn = document.getElementById('close-modal-btn');
    closeModalBtn.onclick = function() {
        modal.style.display = 'none'; // 关闭弹窗
        // window.location.href = '6.8.html';
    };
}
