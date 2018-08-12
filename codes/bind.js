var person={
    name:"nayan ",
    surname:"singh ",
    fullName:function(){
        console.log(this.name+this.surname);
    }
}

var person1={
    name:"navneet ",
    surname:"kumar "
}

var newPerson1=person.fullName.bind(person1);

newPerson1();

var car1={
    name:"maruti ",
    model:"swift "
}

function car(){
    console.log(this.name+this.model);
}

// car();

var carName=car.bind(car1);

carName();
