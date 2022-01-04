var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

// middle-school不是一个有效的变量需要用''括起来
// 访问这个属性也无法使用.操作符，必须用['xxx']来访问
xiaoming['middle-school'] = 'No.1 Middle School';
console.log(xiaoming)
// 访问不存在的属性不会报错，而是返回undefined
console.log(xiaoming.age); // undefined

// 由于JavaScript的对象是动态类型，可以自由地给一个对象添加或删除属性
xiaoming.age; // undefined
xiaoming.age = 18; // 新增一个age属性
xiaoming.age; // 18
delete xiaoming.age; // 删除age属性
xiaoming.age; // undefined
delete xiaoming['name']; // 删除name属性
xiaoming.name; // undefined
delete xiaoming.grade; // 删除一个不存在的grade属性也不会报错

// 要检测对象中是否拥有某一属性可以用in操作符
'school' in xiaoming; // true
'grade' in xiaoming; // false
'toString' in xiaoming; // true
// 要判断一个属性是否是对象自身拥有的，而不是继承得到的，可以用hasOwnProperty()方法
xiaoming.hasOwnProperty('school'); // true
xiaoming.hasOwnProperty('toString'); // false
