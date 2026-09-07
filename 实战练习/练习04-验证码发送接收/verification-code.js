// 获取html元素
const phoneNumber = document.querySelector('#phone');
const code = document.querySelector("#code");
const getCodeButton = document.querySelector("#getCodeButton");
const loginButton = document.querySelector("#loginButton");
const message = document.querySelector('#message');

// 保存正确的验证码
let correctCode = "";

// 点击获取验证码（模拟发送：在控制台查看）
getCodeButton.addEventListener('click', () => {
    // 获取用户输入的手机号
    const phone = phoneNumber.value;
    // 判断手机号是否为空
    if(phone === ""){
        message.textContent = '请输入手机号';
        return;
    }
    // 随机生成6位数的验证码
    correctCode = Math.floor(100000 + Math.random()*900000).toString();
    // 模拟发送验证码
    console.log('验证码：' + correctCode);
    message.innerText = '验证码已发送成功，请在控制台查看！';

    // 禁用按钮
    getCodeButton.diabled = true;
    // 倒计时60s
    let time = 60;
    const timer = setInterval(() => {
        time--;
        getCodeButton.textContent = `${time}后将重新获取`;
        if(time === 0){
            clearInterval(timer);
            getCodeButton.disabled = false; // 启用
            getCodeButton.textContent = "获取验证码";
        }
    }, 1000);
});

// 点击验证
loginButton.addEventListener('click', () => {
    const code1 = code.value;  // 拿到用户输入的验证码code1的值
    if(code1 === ""){
        message.textContent = '请输入验证码';
        return;
    }
    if(code1 === correctCode){
        message.textContent = "验证码正确，验证成功！";
    }else{
        message.textContent = "验证码错误，请重新输入";
    }
});


// 数学函数：随机数
// Math.random():生成[0,1)的随机小数
// Math.random()*900000：范围[0,900000)
// 再加上100000：把范围偏移到：[100000,1000000)正好覆盖100000-999999的全部6位数字
// Math.floor()：向下取整，得到整数
// .toString()：转换为字符串验证码