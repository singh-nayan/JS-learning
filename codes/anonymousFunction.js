
(function(){
  console.log("hello");
})();



const b=(f)=>{
    return f();
  }
  
  console.log(b(()=>{
    return "hello";
  }));
  
  
  
  
  const verify=(num,func)=>{
  
    return func(num); 
    
  }
  
  console.log(verify(4,(num)=>{
    
    if(num%2==0) return "even";
    else return "odd";
  }));