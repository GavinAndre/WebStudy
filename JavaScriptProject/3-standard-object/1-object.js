// 使用typeof操作符获取对象类型
typeof 123; // 'number'
typeof NaN; // 'number'
typeof 'str'; // 'string'
typeof true; // 'boolean'
typeof undefined; // 'undefined'
typeof Math.abs; // 'function'
typeof null; // 'object'
typeof []; // 'object'
typeof {}; // 'object'

// 包装对象(闲的蛋疼也不要使用!)
var n = new Number(123); // 123,生成了新的包装类型
var b = new Boolean(true); // true,生成了新的包装类型
var s = new String('str'); // 'str',生成了新的包装类型
// 包装对象类型是object，与原始值比较是false
typeof n; // 'object'
new Number(123) === 123; // false
typeof b; // 'object'
new Boolean(true) === true; // false
typeof s; // 'object'
new String('str') === 'str'; // false

// 不使用new关键字会被当作普通转换函数(不是包装类型)
var n = Number('123'); // 123，相当于parseInt()或parseFloat()
typeof n; // 'number'
var b = Boolean('true'); // true
typeof b; // 'boolean'
var b2 = Boolean('false'); // true! 'false'字符串转换结果为true！因为它是非空字符串！
var b3 = Boolean(''); // false
var s = String(123.45); // '123.45'
typeof s; // 'string'
(123).toString(); // 123要加括号

/**
 * 总结一下，有这么几条规则需要遵守：
 * 不要使用new Number()、new Boolean()、new String()创建包装对象；
 * 用parseInt()或parseFloat()来转换任意类型到number；
 * 用String()来转换任意类型到string，或者直接调用某个对象的toString()方法；
 * 通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；
 * typeof操作符可以判断出number、boolean、string、function和undefined；
 * 判断Array要使用Array.isArray(arr)；
 * 判断null请使用myVar === null；
 * 判断某个全局变量是否存在用typeof window.myVar === 'undefined'；
 * 函数内部判断某个变量是否存在用typeof myVar === 'undefined'。
 **/
