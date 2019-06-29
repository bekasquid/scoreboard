//배열 해체 할당 ---------------------
var a, b, rest, c;
[a, b] = [10, 20]; //default parameter

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

console.log(c);

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(c);
console.log(rest);
// expected output: [30,40,50]