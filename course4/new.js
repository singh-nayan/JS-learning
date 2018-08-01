var ob={a:"nayan", b:"navneet", c:"abhinav"};

console.log(ob.b);

var b="first ";                         // global scope

var a = function myFunc(){                                          // local scope
var b="second ";                     //  creates a new local a
//b="second ";                      // overrites global a
return b;
}

console.log(b);
console.log(a());
console.log(a);
console.log(b)

console.log(document);