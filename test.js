const rsa = require("./index");

let a =rsa({plainText: 2, primeRange: {lower: 99, upper: 599}});
console.log(a);