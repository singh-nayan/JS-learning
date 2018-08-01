/*/ prime number

function prime(num){

    function check(num){
    var flag=0;
    for(var i=2;i<=num/2;i++)
        if(num%i==0)
            flag=1;

         if(flag==0) return "prime";
         else return "composite";
    }

    return check(num);

}

var num=prompt("give a number:");

alert(prime(num));
*/
// hypotenuse

function hypotenuse(a,b){

    function square(x){
        return x*x;
    }
     return Math.sqrt(square(a)+square(b))
}

alert(hypotenuse(6,8));