// for循环，利用索引遍历数组
var arr = ['Apple', 'Google', 'Microsoft'];
var i, x;
for (i=0; i<arr.length; i++) {
    x = arr[i];
    console.log(x);
}

// for in循环，把对象的所有属性依次循环出来
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    // 使用hasOwnProperty()过滤对象继承的属性
    if (o.hasOwnProperty(key)) {
        console.log(key); // 'name', 'age', 'city'
    }
}

// for in循环可以直接循环出Array的索引
var a = ['A', 'B', 'C'];
for (var index in a) {
    // index是String而不是Number
    console.log(index); // '0', '1', '2'
    console.log(a[index]); // 'A', 'B', 'C'
}

// while判断条件后进行循环
var x = 0;
var n = 99;
while (n > 0) {
    x = x + n;
    n = n - 2;
}
x; // 2500

// do while循环完成时判断条件
var n = 0;
do {
    n = n + 1;
} while (n < 100);
n; // 100