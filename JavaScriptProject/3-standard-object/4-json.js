// 序列化
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    // 精确控制序列化方式
    /*toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }*/
};
// 序列化方法
var s = JSON.stringify(xiaoming);
console.log(s);
// 可以加上参数，按缩进输出
var s = JSON.stringify(xiaoming, null, '    ');
console.log(s);
// 第二个参数用于控制如何筛选对象的键值
var s = JSON.stringify(xiaoming, ['name', 'skills'], '  ');
console.log(s);
// 第二个参数也可以传入函数
// 把所有string都变成大写
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
var s = JSON.stringify(xiaoming, convert, '  ');
console.log(s);

// 反序列化
JSON.parse('[1,2,3,true]'); // [1, 2, 3, true]
JSON.parse('{"name":"小明","age":14}'); // Object {name: '小明', age: 14}
JSON.parse('true'); // true
JSON.parse('123.45'); // 123.45
// JSON.parse()还可以接收一个函数，用来转换解析出的属性
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}