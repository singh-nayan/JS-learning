// dynamic property of JS

var m = "nayan";
console.log(m);
console.log(typeof m);
m = 12.34;
console.log(m);
console.log(typeof m);
m = true;
console.log(m);
console.log(typeof m);

var x;
console.log(x);
console.log(typeof x);

var ob = null;
console.log(ob);
console.log(typeof ob);

// comparing string ->     comparision is done on lexicographical or dictionary basis

console.log("ab"<"ac")               //  true

console.log("acb"<"abc")             //  false

console.log("aa"<"a")                //  true because a comes before aa

console.log("a<"<"A")               //   false  because A comes before a

console.log("AA"<"a")                // true

// comparing String with number    == operator

console.log("2.000"==2.0)           // true as it only checks the values and not the type

console.log("a"==2)                 // false as a is not equal to 2

// === operator

console.log("2"===2)                // false as === checks the type first and then value, here types are different