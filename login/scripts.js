// 切换到注册表单
document.getElementById('signUp')?.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

// 切换到登录表单
document.getElementById('signIn')?.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// 处理注册表单提交事件
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('new-username').value.trim();
    const newPassword = document.getElementById('new-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (newPassword.length < 6) {
        alert('密码长度不能少于6个字符。');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('密码和确认密码不匹配，请重新输入。');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // 检查用户名是否已存在
    for (var i = 0; i < users.length; i++) {
        if (newUsername == users[i].username) {//判断是否有相同账号
            alert("该账号已存在");
            return;
        }
    }

    // 创建用户对象并存入 localStorage
    const newUser = {
        username: newUsername,
        password: newPassword
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('注册成功！现在您可以登录了。');
    
    document.getElementById('signup-form').reset();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// 处理登录表单提交事件
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    let users = JSON.parse(localStorage.getItem('users')) || [];

    // 验证用户名是否存在并检查密码
    const currentUser = users.find(user => user.username === username);
    if (currentUser && currentUser.password === password) {
        alert('登录成功！欢迎来到皇宫。');
        
        localStorage.setItem('username', username);
        
        find_date(username);
        window.location.href = '../start/start.html';
    } else {
        alert('用户名或密码错误，请重新输入。');
    }
});

function find_date(username) {
    window.localStorage.userid = -1;
    window.localStorage.username = undefined;
    window.localStorage.GameName = undefined;
    window.localStorage.GameAddress = undefined;
    window.localStorage.achi1 = 0;
    window.localStorage.achi2 = 0;
    window.localStorage.achi3 = 0;
    window.localStorage.achi4 = 0;
    window.localStorage.achi5 = 0;
    window.localStorage.achi6 = 0;
    window.localStorage.achi71=0;
    window.localStorage.achi72 = 0;
    window.localStorage.achi8 = 0;
    window.localStorage.achi9 = 0;
    window.localStorage.achi10 = 0;
    window.localStorage.choose1 = 0;
    // var username_text = document.getElementById("username").value;
    // var password_text = document.getElementById("password").value;
    var isHad = false; //定义一个开关变量
    var index = 0; //定义一个下标确定用户
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    } else {
        alert("请先注册一个用户");
        return;
    }
    for (var i = 0; i < users.length; i++) {
        if (username == users[i].username) {  //有这个账号
            isHad = true;
            index = i;
        }
    }

    if (isHad) {  //如果存在
            window.localStorage.userid = index;
            var Arr = JSON.parse(localStorage.getItem('users'));
            window.localStorage.username = Arr[index].username;
            window.localStorage.password = Arr[index].password;
            window.localStorage.GameName = Arr[index].GameName;
            window.localStorage.GameAddress = Arr[index].GameAddress;
            window.localStorage.likability = Arr[index].likability;
            window.localStorage.achi1 = Arr[index].achi1;
            window.localStorage.achi2 = Arr[index].achi2;
            window.localStorage.achi3 = Arr[index].achi3;
            window.localStorage.achi4 = Arr[index].achi4;
            window.localStorage.achi5 = Arr[index].achi5;
            window.localStorage.achi6 = Arr[index].achi6;
            window.localStorage.achi71 = 0;
            window.localStorage.achi72 = 0;
            window.localStorage.achi7 = Arr[index].achi7;
            window.localStorage.achi9 = Arr[index].achi9;
            window.localStorage.achi10 = Arr[index].achi10;
            window.localStorage.achi8 = Arr[index].achi8;
            window.localStorage.choose1 = Arr[index].choose1;
            window.location.href = "../start/start.html";
            
            return;
    } else { 
        alert('账号不存在或输入错误');
    }
}
