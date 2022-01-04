// 使用if () { ... } else { ... }来进行条件判断
var age = 20;
if (age >= 18) { // 如果age >= 18为true，则执行if语句块
    console.log('adult');
} else if (age >= 6) {
    alert('teenager');
} else { // 否则执行else语句块
    console.log('kid');
}

// JavaScript把null、undefined、0、NaN和空字符串''视为false
// 其他值一概视为true
var s = '123';
if (s.length) { // 条件计算结果为3
    // if (s.length) 为true
}
