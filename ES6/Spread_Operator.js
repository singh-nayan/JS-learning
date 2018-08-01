/*
let a = [4,5,6,];
let b = [1,2,3,...a,7,8];
alert(b);
*/

function prime(...z){                      // by default values are passed as an array
    for(var i=0;i<z.length;i++){
        var flag=0;
        for(var num=2;num<=z[i]/2;num++){
            if(z[i]%num==0)
                flag=1;
        }
        if(flag==0) document.write(z[i]+": prime<br>");
        else document.write(z[i]+": composite<br>");


    }

    document.write(z);

}
prime(2,3,4,5,6,7,8,9,10,11,12,13,14);