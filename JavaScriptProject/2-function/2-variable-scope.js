// var申明的变量是有作用域的

// 一个变量在函数体内部申明，则该变量的作用域为整个函数体
function foo() {
    var x = 1;
    x = x + 1;
}

// 在函数体外不可引用该变量
// x = x + 2; // ReferenceError! 无法在函数体外引用变量x

// 不同函数内部的同名变量互相独立，互不影响
function bar() {
    var x = 'A';
    x = x + 'B';
}

// 内部函数可以访问外部函数定义的变量，反之不行
// 内部函数定义了与外部函数重名的变量，则内部函数的变量将“屏蔽”外部函数的变量
function foo1() {
    var x = 1;
    var fooX = 1;

    function bar1() {
        var x = 2; // bar1将屏蔽外部函数的变量x
        var barY = x + fooX; // bar1可以访问foo1的变量fooX
    }

    var fooY = barY + 1; // ReferenceError! foo1不可以访问bar1的变量barY
}

// 函数内定义变量会提升到函数顶部
function foo2() {
    var x = 'Hello, ' + y;
    console.log(x); // Hello, undefined
    var y = 'Bob';
}

// 在函数内部定义变量需要遵守"首先申明所有变量原则"
function foo3() {
    var
        x = 1, // x初始化为1
        y = x + 1, // y初始化为2
        z, i; // z和i为undefined
    // 其他语句:
    for (i = 0; i < 100; i++) {
    }
}

// 不在任何函数内定义的变量就具有全局作用域(全局对象window)
// 全局作用域的变量实际上被绑定到window中
function foo4() {
    console.log('foo');
}

foo4(); // 直接调用foo()
// window.foo4(); // 通过window.foo()调用

// 把自己的变量全部放入自定义的名字空间中，会大大减少全局变量冲突的可能
// 唯一的全局变量MYAPP:
var MYAPP = {};
// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;
// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};

// 局部作用域
function foo5() {
    // 使用var关键字无法在for循环等语句块中定义局部作用域的变量
    for (var i1 = 0; i1 < 100; i1++) {
        //
    }
    i1 += 100; // 仍然可以引用变量i

    // ES6引入的let关键字可以申明一个块级作用域
    var sum = 0;
    for (let i2 = 0; i < 100; i++) {
        sum += i2;
    }
    // SyntaxError:
    i2 += 1;
}

// 常量
// 在ES6之前通常用全部大写的变量来表示“这是一个常量，不要修改它的值”
var PI1 = 3.14;
// ES6引入了新的关键字const来定义常量，const与let都具有块级作用域
const PI2 = 3.14;
// PI2 = 3; // 某些浏览器不报错，但是无效果！
PI2; // 3.14


// 解构赋值
// ES6引入了结构赋值，可以同时最一组变量进行赋值
// 对数组元素进行解构赋值时，多个变量要用[...]括起来
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];
// 对对象进行解构赋值时，多个变量要用{...}括起来
// passport: id 表示把passport属性赋值给变量id
// single = true 表示如果对象没有single属性则默认赋值true
var {name, age, passport: id, single = true} = {
    name: '小明',
    age: 20,
    passport: 'G-12345678',
};

// 解构赋值使用场景
// 交换变量
var x=1, y=2;
[x, y] = [y, x]
// 获取当前页面的域名和路径
var {hostname:domain, pathname:path} = location;
// 使用对象作为参数的函数，可以使用解构赋值
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
// 调用时传入对象
buildDate({ year: 2017, month: 1, day: 1 });