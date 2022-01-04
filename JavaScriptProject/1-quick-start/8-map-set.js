// 使用二维数组初始化Map
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95

// 初始化空Map
var m = new Map(); // 空Map
m.set('Adam', 67); // 添加新的key-value
m.set('Bob', 59);
m.has('Adam'); // 是否存在key 'Adam': true
m.get('Adam'); // 67
m.delete('Adam'); // 删除key 'Adam'
m.get('Adam'); // undefined

// 由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉
m.set('Adam', 88);
m.get('Adam'); // 88

// 初始化Set可以创建空Set或传递一个数组
var s1 = new Set(); // 空Set
var s2 = new Set([1, 2, 3]); // 含1, 2, 3

// 重复元素在Set中自动被过滤(数字3和字符串'3'是不同的元素)
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}

// 通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果
s2.add(4);
s2; // Set {1, 2, 3, 4}
s2.add(4);
s2; // 仍然是 Set {1, 2, 3, 4}

// 通过delete(key)方法可以删除元素
s2; // Set {1, 2, 3}
s2.delete(3);
s2; // Set {1, 2}