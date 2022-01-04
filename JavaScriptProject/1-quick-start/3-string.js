// 字符串内部既包含'又包含"则需要用转义字符\来识别
var s1 = 'I\'m \"OK\"!';
console.log(s1);
// ASCII字符可以以\x##形式的十六进制表示
s1 = '\x41';
console.log(s1);
// Unicode字符可以用\u####表示
s1 = '\u4e2d\u6587';
console.log(s1);

// ES6新增反引号来表示多行字符串(`abc`)
var s2 = `aa
cc
vv`;
console.log(s2);

// 多个字符串用+连接
var name = '小明';
var age = '20'
var s3 = '你好, ' + name + ', 你今年' + age + '岁了!';
console.log(s3);
// ES6新增模版字符串
s3 = `你好, ${name}, 你今年${age}岁了!`;
console.log(s3);

// 操作字符串
var s = 'Hello, world!';
s.length; // 13
// 获取字符串指定索引字符
s[0]; // 'H'
s[6]; // ' '
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined
// 字符串不可变，对字符串某个索引赋值不会报错但也没有效果
s[0] = 'X';
console.log(s); // s仍然为'Hello, world!'

// 字符串内置了一些常用方法
// 调用这些方法不会改变原有字符串，而是返回一个新字符串
// toUpperCase()把一个字符串全部变为大写
var ss1 = 'Hello';
ss1.toUpperCase(); // 返回'HELLO'
// toLowerCase()把一个字符串全部变为小写：
var lower = ss1.toLowerCase(); // 返回'hello'并赋值给变量lower
lower; // 'hello'

// indexOf()会搜索指定字符串出现的位置
var ss2 = 'hello, world';
ss2.indexOf('world'); // 返回7
ss2.indexOf('World'); // 没有找到指定的子串，返回-1

// substring()返回指定索引区间的子串
var ss3 = 'hello, world'
ss3.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
ss3.substring(7); // 从索引7开始到结束，返回'world'