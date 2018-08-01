/*
function check_scope(){

    alert(inner);


}

var inner = "local";

check_scope();

//var inner = "local";
*/

function check_scope(){

    //var inner = "local";
    //alert(inn);

    function f(){

        alert(inner);
        //alert(inn);
        //var inn="closed";
    }
    var inner = "local";

    return f();
}

alert(inner);

check_scope();

