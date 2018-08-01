console.log(this)               // this refers to global object which is window here

var circle = { area: function(){
                     return Math.PI*this.radius*this.radius;
                     }
              }
circle.radius=3,
console.log(circle);
console.log(circle.area());