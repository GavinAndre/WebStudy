// ES6引入新的关键字class，让定义类更简单
class Student {
    constructor(name) {
        this.name = name;
    }

    // 没有function关键字
    hello() {
        console.log('Hello, ' + this.name + '!');
    }
}

var xiaoming = new Student('小明');
xiaoming.hello();

// 定义PrimaryStudent继承与Student
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); // 记得用super调用父类的构造方法!
        this.grade = grade;
    }

    // 没有function关键字
    myGrade() {
        console.log('I am at grade ' + this.grade);
    }
}

var xiaohong = new PrimaryStudent('小红', 2);
xiaohong.hello();
xiaohong.myGrade();