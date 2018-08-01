
var a =1;
//var c=9;
f=()=>{
    var a=2;
    var b=10;
    //c=9;            // hoisting
    //alert(window.a);
    alert(a);
}

f();

//alert(b);
alert(a);
//alert(c);