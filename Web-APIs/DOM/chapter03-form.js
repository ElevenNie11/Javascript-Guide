//========================================操作[表单]元素的属性========================================
// 1.获取表单元素的值（表单是无法通过innerHTML或innerText获取其内容的！！！）
// 获取：DOM对象.属性名
// 设置：DOM对象.属性名 = '值';
// 表单.value = '值';
// 表单.type = 'password';

// 获取元素
const inputContent = document.querySelector("#input1");
// 获取元素的值（用户输入的值）
const value = inputContent.value;
console.log(value);                   // 打印用户输入的值
// 设置元素的值（修改用户输入的值）
inputContent.value = "Hello World!";  // 设置输入框的值为"Hello World!"
console.log(inputContent.value);      // 打印修改后的值
// 获取元素的类型
const type = inputContent.type;
console.log(type);                    // 打印输入框的类型：text
// 设置元素的类型
inputContent.type = "password";       // 将输入框的类型修改为密码框：里面的数字都会变成小黑点
console.log(inputContent.type);       // 打印修改后的类型：password


// ------
//  ------
//   ------
//     ------
//   ------
//  ------
// ------
// 重申：表单是无法通过innerHTML或innerText获取其内容的！！！
// Q：表单元素有哪些？
// A：HTML中的[表单元素]主要就是用来让用户输入、选择、提交数据的元素
// <input> 输入各种数据类型：用户名/密码/邮箱/单选多选
// <textarea> 多行文本输入： 留言/评论/简介
// <select> 下拉选择框：     城市/生日乃年月日/分类
// <option> <select>中的选项：成都/北京
// <button> 按钮
// <form>   表单容器：把一组表单控件组织起来
// <label>  表单控件的文字说明：“用户名：”“密码：”
/* <input> 是表单中使用频率最高的元素 */
// ------
//  ------
//   ------
//     ------
//   ------
//  ------
// ------
// <input> 里有很多不同的 type
// 1. text：     普通文本框
// 2. password： 密码框
// 3. radio：    单选框：性别男女
// 4. checkbox： 复选框
// <input type="checkbox"> Java
// <input type="checkbox"> JavaScript
// <input type="checkbox"> C++
// 5. file：     文件选择
// 6. number：   数字输入
// 7. email：    邮箱
// 8. date：     日期
// 9. color:     颜色
// 10. range：   滑块
// 11. time：    时间
// 12. submit：  提交按钮
// 13. reset:    重置按钮
// ------
//  ------
//   ------
//     ------
//   ------
//  ------
// ------

