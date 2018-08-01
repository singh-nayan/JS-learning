// dynamic property of array
//var a=[];
var a = ['a','b',3];

//alert(a.length);

a[3]= "2434";
a[4]= 'fg';

//alert(a);

//alert(a.length);

a[10]=11;                   // size grows

//alert(a);

//alert("length: "+a.length);      // it gives lenth as 11 instead of 6

//alert(typeof a);                    // it gives object and not array
/*
b=[1,2,3,4,5,6,];
alert(b);
alert(b.length);
b.length=3;                         // shrinking of array
alert(b);*/

for(var i=0;i<a.length;i++){
console.log(a[i]+" ");
}

for(var i in a){
console.log(a[i]+" ");
}

alert(a);
delete a[2];
alert(a);