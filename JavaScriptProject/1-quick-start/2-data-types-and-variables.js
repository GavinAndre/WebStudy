// JavaScript不区分整数和浮点数
// 统一用Number表示
123; // 整数123
0.456; // 浮点数0.456
1.2345e3; // 科学计数法表示1.2345x1000，等同于1234.5
-99; // 负数
NaN; // NaN表示Not a Number，当无法计算结果时用NaN表示
Infinity; // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity

// Number可以做四则运算 (%求余)
1 + 2; // 3
(1 + 2) * 5 / 2; // 7.5
2 / 0; // Infinity
0 / 0; // NaN
10 % 3; // 1
10.5 % 3; // 1.5

// 字符串
'abc';
"xyz";

// 布尔值
true; // 这是一个true值
false; // 这是一个false值
2 > 1; // 这是一个true值
2 >= 3; // 这是一个false值

// &&是与运算，所有条件都为true，运算结果才是true
true && true; // 这个&&语句计算结果为true
true && false; // 这个&&语句计算结果为false
false && true && false; // 这个&&语句计算结果为false

// ||是或运算，有一个条件为true，运算结果就是true
false || false; // 这个||语句计算结果为false
true || false; // 这个||语句计算结果为true
false || true || false; // 这个||语句计算结果为true

// !是非运算，用于取反
! true; // 结果为false
! false; // 结果为true
! (2 > 5); // 结果为true

// 比较运算符
2 > 5; // false
5 >= 2; // true
7 == 7; // true

// JS允许任意数据类型比较，有两种比较运算符，(推荐使用===比较)
// 第一种是==比较，它会自动转换数据类型再比较，很多时候，会得到非常诡异的结果；
// 第二种是===比较，它不会自动转换数据类型，如果数据类型不一致，返回false，如果一致，再比较。
false == 0; // true
false === 0; // false

// NaN这个特殊的Number与其他值包括自己都不相等
NaN === NaN; // false
// 只能使用isNaN函数判断
isNaN(NaN); // true

// 浮点数在运算过程中会产生误差
// 因此比较浮点数只能计算差值的绝对值是否小雨阈值
1 / 3 === (1 - 2 / 3); // false
Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true

// null和undefined
// null表示一个空的值
null
// undefined表示值未定义
// 可以用在判断函数参数是否传递的情况
undefined

// 使用[]创建数组(可读性建议)
// 数组用[]表示，元素之间用,分隔
var arr = [1, 2, 3.14, 'Hello', null, true];
// 也可以通过Array()函数创建数组
var arr1 =new Array(1, 2, 3);

// 对象是一组由键-值组成的无序集合
var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};
person.name; // 'Bob'
person.zipcode; // null

// 申明变量
var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null

// 动态语言可以把任意数据类型赋值给变量
var aa = 123; // a的值是整数123
aa = 'ABC'; // a变为字符串