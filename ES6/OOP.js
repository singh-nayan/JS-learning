var val = "global scope variable";
class College{
  //let name;                                           // cannot do this unlike java
  //let height;                                         //     -----do----
  //let id;                                             //     ----do----

    setVal(n,c,i,h){

    this.name=n;
    this.city=c;
    this.id=i;
    this.height=h;

    }
    greet(){
        alert(`hi i am ${this.name} having id ${this.id} and ${this.height} high from ${this.city}`);
    }

}

class student extends College{

    greet(){                                                               // overriding greet
        alert(`i am ${this.name}, friend of ${nayan.name}, having id ${this.id} and ${this.height} high from ${this.city}`);
    }
}

let nayan = new College();
nayan.setVal("nayan","delhi","201","5.10");
console.log(nayan);
nayan.greet();

let naman = new student();
naman.setVal("naman","jaipur","202","5.6")
console.log(naman);
naman.greet();

alert(val);