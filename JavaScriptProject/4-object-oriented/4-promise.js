// ES6统一规范了Promise，可以链式执行异步任务
function test(resolve, reject) {
    var timeout = Math.random() * 2;
    console.log('set timeout to: ' + timeout + ' seconds.');
    setTimeout(function () {
        if (timeout < 1) {
            console.log('timeout < 1 call resolve()...');
            resolve('200 OK');
        } else {
            console.log('timeout >= 1 call reject()...');
            reject('timeout in ' + timeout + ' seconds.');
        }
    }, timeout * 1000);
}

new Promise(test).then(function (result) {
    console.log('成功：' + result);
}).catch(function (reason) {
    console.log('失败：' + reason);
});

// 串行执行一系列需要异步计算获得结果的任务
// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' x ' + input + '...');
        setTimeout(resolve, 500, input * input);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        console.log('calculating ' + input + ' + ' + input + '...');
        setTimeout(resolve, 500, input + input);
    });
}

var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('start serial Promise...');
        resolve(123);
    }, 2500);
});
p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(function (result) {
        console.log('Got value: ' + result);
    });

// Promise.all 并行执行异步任务，等待都完成后执行then
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Start parallel Promise: P1');
        resolve('P1');
    }, 5500);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Start parallel Promise: P2');
        resolve('P2');
    }, 5600);
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log('Get P1 P2 result: ' + results); // 获得一个Array: ['P1', 'P2']
});

// Promise.race() 并行执行异步任务，只获取先返回的结果
var p1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 6500, 'P1');
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 6600, 'P2');
});
Promise.race([p1, p2]).then(function (result) {
    console.log(result); // 'P1'
});