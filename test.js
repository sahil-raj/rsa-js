const rsa = require("./index");

let a =rsa({plainText: 3, primeRange: {upper: 9, lower: 99}});
console.log(a);