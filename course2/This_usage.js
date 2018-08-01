var firstName="naman";
var lastName="sharma";

function fullName(){
    console.log(this.firstName+" "+this.lastName);
}


var person={
    firstName:'nayan',

    lastName:'singh',

    fullName:function(){
        console.log(person.firstName+" "+person.lastName);
        console.log(firstName+" "+lastName);
        console.log(this.firstName+" "+this.lastName);          // context changed from window to person using this
    }
}

person.fullName();

fullName();

this.fullName();                                               // context is window object in this

window.fullName();

/*
Just like the pronoun “he” is used to refer to the antecedent (antecedent is the noun that a pronoun refers to),
the this keyword is similarly used to refer to an object that the function (where this is used) is bound to.
The this keyword not only refers to the object but it also contains the value of the object. Just like the pronoun,
this can be thought of as a shortcut (or a reasonably unambiguous substitute) to refer back to the object in
context (the “antecedent object”).

this is not assigned a value until an object invokes the function where this is defined. Let’s call the function
where this is defined the “this Function.”

Even though it appears this refers to the object where it is defined, it is not until an object invokes the
this Function that this is actually assigned a value. And the value it is assigned is based exclusively on the
object that invokes the this Function. this has the value of the invoking object in most circumstances.
*/