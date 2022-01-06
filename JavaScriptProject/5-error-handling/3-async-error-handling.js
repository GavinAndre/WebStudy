// 异步错误
function printTime() {
    // 在异步函数内部捕获错误
    try {
        throw new Error();
    } catch (e){
        console.log('printTime error');
    }
}

try {
    // 异步代码无法在调用时捕获
    // 在捕获时，回调函数并未执行
    setTimeout(printTime, 3000);
    console.log('done');
} catch (e) {
    console.log('error');
}