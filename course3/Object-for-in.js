//var car = {color:"red", model:"swift", make:"maruti"}             // declaring and defining at the same time
//
//console.log(car);
//console.log(car.model);
//
//
//var car = new Object();                 // declaring an object
////console.log(car);
//
//car.color="blue";                       // defining the object
//car.model="baleno";                     //  ----do----
//car.make="suzuki";                      //  ----do----
//
////console.log(car);
//
//delete car.model;
//
//for(var p in car){
//console.log(p);                 // iterates only the properties
//}
//
//for(var p in car){
//console.log(p+" : "+car[p]);        // iterates the values
//}

var person = {

name :"nayan",
age: 25,
isMale:true,
persona: ['calm','patient','best person in the world','loyal'],
company: {name: "eonics", id:301},
greeting: function() { return "hello world ";}
}

for(var key in person){
    if (person.hasOwnProperty(key)){
    var val=person[key];
    //console.log(key);
    console.log(val);
    }
}

//var obj = {a: 1, b: 2};
//for (var key in obj) {
//  if (obj.hasOwnProperty(key)) {
//    var val = obj[key];
//    console.log(val);
//  }
//}