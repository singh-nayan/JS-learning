
function add(to) {

    document.write(to);
    //document.write(x);                 // value passed as x is not defined in outer function but only inside the inner function

  return function(x) {
    return x + to;
  }
}

alert(add(2) ("xyz"));



