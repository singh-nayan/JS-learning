[2,3,6,8,9,13,11,25,17,19,21,22,23,29,,30,31,32,33,37,41].forEach(prime);

function prime(val){
var flag=0;
    for(var i=2;i<=val/2;i++){
        if(val%i==0)
            flag=1;
    }
    if(flag==0) document.write(val+": prime<br>");
    else document.write(val+": composite<br>");

}
/*
[1,2,3,4,5,6,7,8,9].forEach(is_odd);

function is_odd(elem) {
if(elem%2!=0)
console.log(elem);
}
*/