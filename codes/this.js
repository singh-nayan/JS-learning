// this is object owner of the function

var firstName="nayan";
var lastName=" singh";

console.log(this);                          // it will return window in google console

function fullName(){
    // return this;                          // it will return the global object
    // return firstName+lastName;            // it will return global object key values    
}

console.log(fullName());

var person={
    firstName:"naman",
    
    lastName:" rajvanshi",

    fullName:function(){
        //return this;                          // it will return the object in context
        //return firstName+lastName;            // it will return global object key values    
        //return this.firstName+this.lastName     // it will return current object keys
        return person.firstName+person.lastName   // it will work same as line just above
    }
}

//console.log(person.fullName());

