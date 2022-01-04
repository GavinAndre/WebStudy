// 赋值语句
// 一行代码可以包含两个语句，用;表示语句结束
var x = 1; var y = 2;

// 一个字符串也可以视为一个完整的语句
'Hello, world';

// 语句块
if (2 > 1) {
    x = 1;
    y = 2;
    z = 3;
    // 语句块还可以嵌套
    if (x < y) {
        z = 4;
    }
    if (x > y) {
        z = 5;
    }
}

console.log('hello');
// 注释
// console.log('world');

/* 块注释
   注释
   注释
   注释结束 */