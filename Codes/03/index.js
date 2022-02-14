// var obj = { // 创建对象
//     uname: 'lbr', // 对象属性
//     uage: 22,
//     gender: 'male',
//     saySth: function() { // 方法
//         console.log('Hello World');
//     }
// }

// var obj = new Object();
// obj.uname = 'lbr';
// obj.uage = 22;
// obj.gender = 'male';
// obj.saySth = function() {
//     console.log('Hi, Object');
// }

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var lbr = new Person('lbr', 22, 'male');

for (let k in lbr) {
    console.log(k); // 属性名
    console.log(lbr[k]); // 属性值
}