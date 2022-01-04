// 定义函数
// function指出这是一个函数定义
// abs是函数的名称
// (x)括号内列出函数的参数，多个参数以,分隔
// { ... }之间的代码是函数体，可以包含若干语句，甚至可以没有任何语句
function abs1(x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

// 第二种函数定义方式，末尾加;
// 定义一个匿名函数并赋值给变量
var abs2 = function (x) {
    // 对参数进行检查，避免收到undefined
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
};

// 调用函数
abs1(10);
abs1(-9);
// 允许传入任意参数而不影响调用
abs1(10, 'blablabla'); // 返回10
abs1(-9, 'haha', 'hehe', null); // 返回9
// 不传参也没问题
// 只是参数x将收到undefined，return -x; 将返回NaN
abs1(); // 返回NaN
abs2(); // throw

// arguments只在函数内部起作用，指向函数传入的所有参数
// 类似Array但不是一个Array
// 常用于判断传入参数的个数，如foo(a[, b], c)函数，b为可选参数
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo1(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}

foo1(1, 2, 3); // a=1 b=2 c=3
foo1(1, 3); // a=1 b=null c=3

// rest 在ES6引入，只能写在参数最后，前面用...标识
function foo2(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo2(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo2(1);
// 结果:
// a = 1
// b = undefined
// Array []