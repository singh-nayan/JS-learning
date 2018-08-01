//Closure means that an inner function always has access to the 
//vars and parameters of its outer function, even after the outer function has returned.

// let count=0;

// const add=()=>{
//   return count+=1;
// }

// console.log(add());
// console.log(add());
// console.log(add());



// function add() {  
//     var count = 0;
//     return count += 1;    
//  }
    
// console.log(add());
// console.log(add());
// console.log(add());

function add() {  
    var count=0;
    
    function plus(){ return count+=1;}
    
     return plus;
  }
  
  var sum=add();
  
  console.log(sum);
  console.log(sum);
  console.log(sum);




function OuterFunction() {

    var outerVariable = 1;
    console.log(76);

    function InnerFunction(param) {
        return(outerVariable+=param);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();


console.log(innerFunc(5));
console.log(innerFunc(5));
console.log(innerFunc(5));



function counter(para){
  
    var name=" swati";
    
    return function (a) { return para()+(name+=a) ; };
    
  }
  
  var result=counter(function(){return " hello";});
  
  console.log(result(function(){return " nayan";}));
  console.log(result(function(){return " pratika";}));
  console.log(result(function(){return " aparna";}));

// In the above example, return InnerFunction; returns InnerFunction from OuterFunction 
// when you call OuterFunction(). A variable innerFunc reference the InnerFunction() only, 
// not the OuterFunction(). So now, when you call innerFunc(), 
// it can still access outerVariable which is declared in OuterFunction(). 
// This is called Closure.
