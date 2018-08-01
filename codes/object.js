const obj={
    nayan:"24",
    navneet:"40",
    pratika:"21",
    abhinav:"38",
    func:()=>{
      return hello;
    }
}

console.log(obj["navneet"]);

const arr=[1,2,3,4,5];

arr.map((val,index,arr)=>{
  console.log(index+" : "+val+" "+arr);
})


const objIndices=Object.keys(obj);
console.log(objIndices);

objIndices.map(val=>{
    console.log(val+" : "+obj[val]);
})







var employee={
  
    nayan:{
      age:"25",
      place:"goa",
      color:"wheat"
    },
    
    swati:{
      age:"20",
      place:"up",
      color:"green"
    },
    
    aparna:{
      age:"27",
      place:"mp",
      color:"blue"
    },
    
    pratika:{
      age:"20",
      place:"hp",
      color:"orange"
    }
    
  }
  
  var employeeKeys=Object.keys(employee);
  
  //console.log(employeeKeys);
  
  employeeKeys.map(val=>{
    
    var innerKeys=Object.keys(employee[val]);
    
    console.log(val+":");
    
    innerKeys.map(value=>{
      
      console.log(value+":"+employee[val][value]);
      
    })
    
  })



