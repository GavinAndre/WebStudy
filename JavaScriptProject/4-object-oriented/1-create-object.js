// 构造函数
function Student1(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}
// 使用关键字new就变为构造函数
var xiaoming = new Student1('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!

// 让创建的对象共享一个hello函数
function Student2(name) {
    this.name = name;
}
// 把函数移到对象原型上
Student2.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

var xiaohong = new Student2('小红');
var xiaowang = new Student2('小王');
xiaohong.hello === xiaowang.hello; // true

// 封装构造函数
function Student3(props) {
    this.name = props.name || '匿名'; // 默认值为'匿名'
    this.grade = props.grade || 1; // 默认值为1
}

Student3.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
};

function createStudent3(props) {
    return new Student3(props || {})
}
// 封装构造函数优点
// 一是不需要new来调用
// 二是参数非常灵活，可以不传，也可以这么传
var xiaojun = createStudent3({
    name: '小军'
});
xiaojun.grade; // 1