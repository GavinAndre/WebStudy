// generator（生成器）是ES6标准引入的新的数据类型
// 一个generator看上去像一个函数，但可以返回多次
function* foo(x) {
    yield x + 1;
    yield x + 2;
    return x + 3;
}

// 调用foo(0)仅仅是创建了一个generator对象
var f = foo(0);
// 使用next()方法执行generator的代码
// 返回的value就是实际的返回值，done表示generator是否已经结束
f.next(); // { value: 1, done: false }
f.next(); // { value: 2, done: false }
f.next(); // { value: 3, done: true }
f.next(); // { value: undefined, done: true }

// 使用for of循环迭代generator对象
// 当next方法返回的对象的done属性为true，循环就会终止
for (var x of foo(0)) {
    // 由于执行到return语句时，done属性就变为true，循环终止了
    // 因此不会输出return语句的值
    console.log(x); // 依次输出1, 2
}
