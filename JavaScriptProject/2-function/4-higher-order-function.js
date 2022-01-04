// 高阶函数表示一个函数可以接收另一个函数作为参数
function add(x, y, f) {
    return f(x) + f(y);
}
// Math.abs(-5) + Math.abs(6)
var x = add(-5, 6, Math.abs); // 11
console.log(x);