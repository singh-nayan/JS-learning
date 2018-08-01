num=9;

var obj = {num:2};

var addThisTo= function(a){
    return this.num +a;
}

console.log(addThisTo(4));
console.log(addThisTo.call(obj,4));