// ES6标准新增了一种新的函数：Arrow Function（箭头函数）
// 单表达式，可以省略return
x => x * x;
// 多表达式，不能省略{}和return
x => {
    if (x > 0) {
        return x * x;
    } else {
        return -x * x;
    }
};
// 参数不是一个就用括号括起来
// 多个参数
(x, y) => x * x + y * y;
// 无参数
() => 3.14;
// 单表达式返回对象要加花括号
x => ({ foo: x });

// 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth; // 1990
        // 这里箭头函数中的this继承getAge: function ()内的this
        var fn = () => new Date().getFullYear() - this.birth; // this指向obj对象
        return fn();
    }
};
console.log(obj.getAge());; // 32
console.log()