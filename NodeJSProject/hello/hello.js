'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s+', '+name+'!');
}

function hi(name) {
    console.log('Hi, '+name+'!');
}

function goodbye(name) {
    console.log('Goodbye, ' + name +'!');
}

module.exports.greet = greet;
module.exports.hi = hi;
module.exports.goodbye = goodbye;

// module.exports = {
//     greet:greet,
//     hi:hi,
//     goodbye:goodbye
// };