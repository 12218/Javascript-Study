var myName = "Brian Li"

console.log(myName.length);
console.log(myName.charAt('2'));
console.log(myName.indexOf('ia'));
console.log(myName.lastIndexOf('i'));
console.log(myName.trim()); // 减去字符串两边空字符
console.log(myName.toUpperCase()); // 转大写
console.log(myName.toLowerCase()); // 转小写
console.log(myName.slice(1, 4)); // 切片
console.log(myName.slice(2));
console.log(myName.concat('123', '456', '789')); // 粘贴字符串
console.log(myName.replaceAll(' ', '.')); // 替换