// 对象的声明：
// 方法a: let 对象名 = {...属性和方法};
// 方法b: let 对象名 = new Object();
// 属性由属性名和属性值组成：属性值存在属性名里面
// 在对象里面，叫做“属性”
// 在对象外面，叫做“变量”
let phone = {
    phoneName: 'iphone15 plus',
    company: 'apple',
    price: 7800,
    color: 'black'
};
// console.log(phone);
// console.log(typeof phone);
// console.log(phone.company);  // 查
// 改
phone.color = 'White';
// console.log(phone.color);
//增
phone.companyAddress = 'America';
//删
delete phone.price;
// console.log(phone);

// 另一种属性的写法: 有 - 
let newPhone = {
    'phone-name': 'iphone15 plus',
    'phone-company': 'apple',
    'phone-price': 7800,
    'phone-color': 'black'
}
// 查: 对象名['属性名']
// 一定要有单引号或者双引号！
// console.log(newPhone["phone-color"]);

// 方法就是函数
// 在对象里面叫做“方法”
// 在对象外面叫做“函数”
let user = {
    userName: 'Allinsync-eleven',
    age: 19,
    gender: '女',
    userLog: function(){
        let password = prompt('请输入用户密码');
        console.log(`用户密码为：${password}`);
    }
}
// 方法调用：对象名.方法名
user.userLog();


//遍历对象
for(let i in user){
    console.log(i);        // 打印 属性名（字符串类型：'userName' 'age' 'gender' 'userLog'）
    console.log(user[i]);  // （按顺序）打印 属性值
}