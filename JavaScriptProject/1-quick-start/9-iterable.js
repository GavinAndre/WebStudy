// 为了统一集合类型，ES6标准引入了新的iterable类型
// Array、Map和Set都属于iterable类型
// iterable类型的集合可以通过新的for of循环来遍历
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // 遍历Array
    console.log(x);
}
for (var x of s) { // 遍历Set
    console.log(x);
}
for (var x of m) { // 遍历Map
    console.log(x[0] + '=' + x[1]);
}

// for in遍历对象的属性名称(数组实际也是对象，每个元素的索引被视为属性)
// for of遍历集合本身元素

// forEach
a.forEach(function (element, index, array) {
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(element + ', index = ' + index);
});

s.forEach(function (element, sameElement, set) {
    console.log(element);
});

m.forEach(function (value, key, map) {
    console.log(value);
});