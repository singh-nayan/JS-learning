
class RTU{
  //let name;                                           // cannot do this unlike java
  //let height;                                         //     -----do----
  //let id;                                             //     ----do----
/*
	constructor(id){                                 // more than one constructor not allowed
		this.id=id;
  		}
}*/
	constructor(name,height){
		this.name=name;
  		this.height=height;

}

    greet(){
        alert(`hi i am ${this.name} and ${this.height} high from delhi`);
    }

}

class student extends RTU{

    constructor(name,height){
        super(name,height);                         // super keyword will invoke parent class constructor
    }

    greet(){                                                               // overriding greet
        alert(`i am ${this.name}, friend of ${nayan.name} and ${this.height} high from jaipur`);
    }
}

let nayan = new RTU("nayan","5.10");
console.log(nayan);
nayan.greet();

let naman = new student("naman","5.6");
console.log(naman);
naman.greet();