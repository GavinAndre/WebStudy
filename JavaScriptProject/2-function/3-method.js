// 绑定到对象上的函数称为方法
var xiaoming = {
    name: '小明',
    birth: 1990,
    age1: function () {
        var y = new Date().getFullYear();
        // this是一个特殊变量，它始终指向当前对象(xiaoming)
        return y - this.birth;
    },
    age2: getAge
};

function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

xiaoming.age1; // function xiaoming.age()
xiaoming.age1(); // 今年调用是32,明年调用就变成33了
xiaoming.age2(); // 32

// 单独调用getAge()函数，this指向全局对象
getAge(); // NaN
// 使用函数本身的apply或call方法，指定函数的this指向哪个对象
// apply第一个参数是需要绑定的this变量，第二个参数是数组，表示调用函数时需要传递的参数
getAge.apply(xiaoming, [1, 2, 3]); // 32, this指向xiaoming, 参数为空
// call与array的区别
// apply把参数打包成Array再传入
// call把参数按顺序传入
getAge.call(xiaoming, 1, 2, 3);

// 装饰器
// 使用apply可以动态改变函数的行为
var count = 0;
var oldParseInt = parseInt; // 保存原函数
parseInt = function () { // 统计parseInt函数调用了多少次
    count += 1;
    return oldParseInt.apply(null, arguments); // 调用原函数
};
parseInt('10');
parseInt('20');
parseInt('30');
console.log('count = ' + count); // 3