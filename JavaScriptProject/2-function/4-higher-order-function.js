// 高阶函数表示一个函数可以接收另一个函数作为参数
function add(x, y, f) {
    return f(x) + f(y);
}

// Math.abs(-5) + Math.abs(6)
var x = add(-5, 6, Math.abs); // 11
console.log(x);

// map 将自定义函数作用到数组中每个值上, 返回新数组
var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result1 = arr1.map(function (x) {
    return x * x;
});
result1; // [1, 4, 9, 16, 25, 36, 49, 64, 81]

// reduce 累计运算
var arr2 = [1, 3, 5, 7, 9];
var result2 = arr2.reduce(function (x, y) {
    return x + y;
});
result2; // 25

// filter 筛选出数组中符合条件的元素, 返回新数组
var arr3 = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];
var result3 = arr3.filter(function (e, i, self) {
    // 保留当前索引与indexOf相等的元素, 后续重复元素不保留 (indexOf总是返回第一个元素位置)
    return self.indexOf(e) === i;
});
result3; // [ 'apple', 'strawberry', 'banana', 'pear', 'orange' ]

// sort 直接对原数组进行排序
var arr4 = [10, 20, 1, 2];
arr4.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
arr4; // [1, 2, 10, 20]

// every 判断数组的所有元素是否满足测试条件
var arr = ['Apple', 'pear', 'orange'];
var result5 = arr.every(function (s) {
    return s.length > 0;
});
result5; // true

// find 查找符合条件的第一个元素，找到返回这个元素，否则返回undefined
var result6 = arr.find(function (s) {
    return s.length > 0;
});
result6; // Apple

// findIndex 与find类似, 找到返回索引, 否则返回-1
var result7 = arr.findIndex(function (s) {
    return s.length > 10;
});
result7; // -1

// forEach 常用于遍历数组
arr.forEach(function (e) {
    console.log(e);
});