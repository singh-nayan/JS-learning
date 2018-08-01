//prime
var val = prompt("give a number");

alert(prime(val,check));

function prime(val,check) {
    return check(val);
}

function check(val){
    var flag=0;
    for(var i=2;i<=val/2;i++){
        if(val%i==0)
            flag=1;
    }
    if(flag==0) return "prime";
    else return "composite";

}
/*/ odd
function odd(n){
    return n%2!=0;
}

function num(upto,filter){
    for(var i=0;i<=upto;i++)
        {
            if ( filter(i) )
            console.log(i);
        }
}

num(10,odd);
*/

