var num = prompt("give a number");

i=0;

while(i<num){

var rand = Math.floor(Math.random()*num+1);

alert(rand);

i++;
}

document.write(rand);