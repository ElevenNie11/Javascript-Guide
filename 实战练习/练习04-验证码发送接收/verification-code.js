// 获取html元素
const phoneNumber = document.querySelector('#phone');
const code = document.querySelector("#code");
const getCodeButton = document.querySelector("#getCodeButton");
const loginButton = document.querySelector("#loginButton");
const message = document.querySelector('#message');

// 保存正确的验证码
let corretCode = "";

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
    corretCode = Math.floor(100000 + Math.random()*900000).toString();
    // 模拟发送验证码
    console.log('验证码：' + corretCode);
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
    const code1 = code.value;  // 拿到用户输入的验证码的值
    if(code1 === ""){
        message.textContent = '请输入验证码';
        return;
    }
    if(code1 === corretCode){
        message.textContent = "验证码正确，验证成功！";
    }else{
        message.textContent = "验证码错误，请重新输入";
    }
});