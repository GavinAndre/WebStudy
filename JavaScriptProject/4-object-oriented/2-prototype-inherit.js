function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

// 原型继承实现方式
// 定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；
// 借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；
// 继续在新的构造函数的原型上定义新方法。

// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function inherits(Child, Parent) {
    // 空函数F:
    var F = function () {};
    // 把F的原型指向Student.prototype
    F.prototype = Parent.prototype;
    // 把PrimaryStudent的原型指向一个新的F对象
    // F对象的原型正好指向Student.prototype
    Child.prototype = new F();
    // 把PrimaryStudent原型的构造函数修复为PrimaryStudent
    Child.prototype.constructor = Child;
}

// 实现原型继承链:
inherits(PrimaryStudent, Student);

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name; // '小明'
xiaoming.grade; // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype; // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student; // true