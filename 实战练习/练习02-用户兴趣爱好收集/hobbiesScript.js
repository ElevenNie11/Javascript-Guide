// 获取表单
const form = document.querySelector('#interestForm');

// 监听表单提交事件
form.addEventListener("submit", e => {
    e.preventDefault();  // 阻止表单默认提交行为
    // 获取用户名（值）
    // document.querySelector("#username")获取的是HTML元素
    // 值必须是document.querySelector("#username").value;
    const username = document.querySelector("#username").value;
    const age = document.querySelector("#age").value;

    // const gender = document.querySelector("#gender").value;  [xxxxxxxxxxxxxxxx错误的xxxxxxxxxxxxxxxxxxx]
    /*
    性别有三个input:
        1. <input type="radio" name="gender" value="男">
        2. <input type="radio" name="gender" value="女">
        3. <input type="radio" name="gender" value="保密"> 
    */

    // :checked表示被选中的元素，值为布尔值true
    // 查找与设置对象的另一种写法：对象名['属性名'] 或者 对象名["属性名"]
    // name="gender" 就是在记录属性名
    // document.querySelector('input[name="gender"]:checked')返回的就是一个[ DOM 元素对象]
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const favorite = document.querySelector("#favorite").value;
    const descriptions = document.querySelector("#description").value;
    
    let genderValue = "";   // 声明一个性别值的变量以便下一步保存性别的值
    //确认性别
    if(gender){
        genderValue = gender.value;
    } 

    // 创建用户对象[对象！！！]
    const user = {
        username: username,
        age: age,
        gender: genderValue,
        favorite: favorite,
        descriptions: descriptions
    };
    // 打印输出对象
    console.log(user);
});