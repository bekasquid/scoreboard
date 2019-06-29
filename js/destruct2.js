//배열 해체 할당 ---------------------
var a, b, rest;
({c=30, b, a} = {a: 10, b: 20});
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
console.log(c);

// Stage 4(finished) proposal
({a,b,...rest} = {a:10, b:20, c:30, d:40});
console.log(a);
console.log(b);
console.log(rest);