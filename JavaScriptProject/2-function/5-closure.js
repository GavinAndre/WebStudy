// 闭包
function lazy_sum(arr) {
    // 在函数lazy_sum中定义函数sum
    var sum = function () {
        // 内部函数sum可以引用外部函数lazy_sum的参数和局部变量
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    // 返回sum时，相关参数和变量都保存在返回的函数中
    return sum;
}

var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
f();

// 返回函数不要引用任何循环变量，或者后续会发生变化的变量
// 否则执行函数时，变量已经循环到最后一位
function count() {
    var arr = [];
    for (var i = 1; i <= 3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
f1(); // 16
f2(); // 16
f3(); // 16

// 一定要引用循环变量则再创建一个函数，用该函数的参数绑定循环变量当前的值
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9

// 通过闭包把多参数函数变成单参数的函数
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}
// 创建两个新函数:
var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(5)); // 25
console.log(pow3(7)); // 343