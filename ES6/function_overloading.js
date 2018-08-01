a=()=>{                                    // original function a().

    alert("nayan");

}

a=(s)=>{                                   // now a() will be replaced by a(s).

    alert(s) ;

}

a=(x,y)=>{                                 // now a(s) will be replaced by a(x,y).

    alert(x+y);

}

a();
a(89);
a(3,4);                                             // only this will work