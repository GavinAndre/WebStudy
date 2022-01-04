// 数组可以包含任意数据类型并通过索引来访问每个元素
var arr1 = [1, 2, 3.14, 'Hello', null, true];
// 获取长度使用length属性
arr1.length; // 6

// 直接对length赋新值会导致数组大小变化
var arr2 = [1, 2, 3];
arr2.length; // 3
arr2.length = 6;
arr2; // arr2变为[1, 2, 3, undefined, undefined, undefined]
arr2.length = 2;
arr2; // arr2变为[1, 2]

// 通过索引修改对应元素的值
var arr3 = ['A', 'B', 'C'];
arr3[1] = 99;
arr3; // arr现在变为['A', 99, 'C']
// 索引赋值时超过数组范围同样会导致数据大小变化
arr3[5] = 'x';
arr3; // arr变为[1, 2, 3, undefined, undefined, 'x']

// 通过indexOf()来搜索一个指定的元素的位置
var arr4 = [10, 20, '30', 'xyz'];
arr4.indexOf(10); // 元素10的索引为0
arr4.indexOf(20); // 元素20的索引为1
arr4.indexOf(30); // 元素30没有找到，返回-1
arr4.indexOf('30'); // 元素'30'的索引为2

// slice()可以截取Array的部分元素，然后返回一个新的Array
var arr5 = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
arr5.slice(0, 3); // 从索引0开始，到索引3结束，但不包括索引3: ['A', 'B', 'C']
arr5.slice(3); // 从索引3开始到结束: ['D', 'E', 'F', 'G']
// slice()不传递任何参数就会从头到尾截取所有元素，可以用来赋值一个数组
var aCopy = arr5.slice();
aCopy; // ['A', 'B', 'C', 'D', 'E', 'F', 'G']
aCopy === arr5; // false

// push()向Array的末尾添加若干元素，pop()则把Array的最后一个元素删除掉：
var arr6 = [1, 2];
arr6.push('A', 'B'); // 返回Array新的长度: 4
arr6; // [1, 2, 'A', 'B']
arr6.pop(); // pop()返回'B'
arr6; // [1, 2, 'A']
arr6.pop();
arr6.pop();
arr6.pop(); // 连续pop 3次
arr6; // []
arr6.pop(); // 空数组继续pop不会报错，而是返回undefined
arr6; // []

// unshift()向Array的头部添加若干元素，shift()则把Array的第一个元素删掉：
var arr7 = [1, 2];
arr7.unshift('A', 'B'); // 返回Array新的长度: 4
arr7; // ['A', 'B', 1, 2]
arr7.shift(); // 'A'
arr7; // ['B', 1, 2]
arr7.shift();
arr7.shift();
arr7.shift(); // 连续shift 3次
arr7; // []
arr7.shift(); // 空数组继续shift不会报错，而是返回undefined
arr7; // []

// sort()可以对当前Array进行排序，它会直接修改当前Array的元素位置，直接调用时，按照默认顺序排序
var arr8 = ['B', 'C', 'A'];
arr8.sort();
arr8; // ['A', 'B', 'C']

// reverse()把整个数组元素反转
var arr9 = ['1', '2', '3'];
arr9.reverse();
arr9; // ['3', '2', '1']

// splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素
var arr10 = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从索引2开始删除3个元素,然后再添加两个元素:
arr10.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
arr10; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// 只删除,不添加:
arr10.splice(2, 2); // ['Google', 'Facebook']
arr10; // ['Microsoft', 'Apple', 'Oracle']
// 只添加,不删除:
arr10.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
arr10; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']


// concat()把当前的Array和另一个Array连接起来，并返回一个新的Array
var arr11 = ['A', 'B', 'C'];
var added = arr11.concat([1, 2, 3]);
added; // ['A', 'B', 'C', 1, 2, 3]
arr11; // ['A', 'B', 'C']
// concat()方法可以接收任意个元素和Array，并且自动把Array拆开，然后全部添加到新的Array里
arr11.concat(1, 2, [3, 4]); // ['A', 'B', 'C', 1, 2, 3, 4]

// join()把当前Array的每个元素都用指定的字符串连接起来，然后返回连接后的字符串
var arr12 = ['A', 'B', 'C', 1, 2, 3];
arr12.join('-'); // 'A-B-C-1-2-3'

// 多维数组
var arr13 = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr13[1][1]) // 500

// 练习：在新生欢迎会上，你已经拿到了新同学的名单，请排序后显示：欢迎XXX，XXX，XXX和XXX同学！：
var arr14 = ['小明', '小红', '大军', '阿黄'];
let pop = arr14.sort().pop()
console.log(`欢迎${arr14.join('，')}和${pop}同学！`)