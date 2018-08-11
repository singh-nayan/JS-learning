var person1={
    firstName:"navneet ",
    lastName:"kumar ",
    fullName:function(){
        return this.firstName+this.lastName+this.age;
    }
}

var person2={
    firstName:"abhinav ",
    lastName:"sharma ",
    age:38
}

console.log(person1.fullName());                
// it will call person1.fullName with person1 firstName and lastName

console.log(person1.fullName.call(person2));
// call is used to explicitely bind the context 
// it will call person1.fullName with person2 firstName and lastName





// call with arguments-------------------

var car={
    name:"maruti",
    model:"swift",
    detail:function(year,country){
        console.log(this.name+this.model+year+country)
    }
}

var car1={
    name:"honda ",
    model:"city ",
}

var car2={
    name:"tata ",
    model:"safari ",
}

car.detail();
car.detail.call(car1,"2016 ","japan");
car.detail.call(car2,"2012 ","india");