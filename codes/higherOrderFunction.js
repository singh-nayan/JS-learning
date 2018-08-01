function a(c){
  return "hello "+c;
}

function b(f,n){
  return f(n);
}

console.log(b(a,"world"));


function result (num) {
  if(num%2==0) return num+" even ";
  else return num+" odd";
}

function checkOdd (num,final) {
  
  for(var i=1;i<=num;i++) 
  
    console.log(final(i));
  
  return "loop over"; 
  

}
  
function coding(num,func,final){
    
  return func(num,final); 
  
}
  
console.log(coding(10,checkOdd,result));