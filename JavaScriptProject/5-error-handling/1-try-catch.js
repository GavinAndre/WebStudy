// try catch finally
var r1, r2, s = null;
try {
    r1 = s.length; // 此处应产生错误
    r2 = 100; // 该语句不会执行
} catch (e) {
    console.log('出错了：' + e);
} finally {
    console.log('finally');
}
console.log('r1 = ' + r1); // r1应为undefined
console.log('r2 = ' + r2); // r2应为undefined

// Error对象用来表示错误
// 还有从Error派生的TypeError、ReferenceError等错误对象
try {
    // ....
} catch (e) {
    if (e instanceof TypeError) {
        alert('Type error!');
    } else if (e instanceof Error) {
        alert(e.message);
    } else {
        alert('Error: ' + e);
    }
}

// 主动抛出一个错误
try {
    throw new Error('输入错误');
} catch (e) {
    console.log('出错了：' + e);
}