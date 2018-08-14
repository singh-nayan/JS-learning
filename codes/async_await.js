// You will notice that A, B, and C print in a different and random order
//  each time you call printAll!
// This is because these functions are asynchronous. Each function gets executed
// in order, but each one is independent with it’s own setTimeout. They won’t wait 
// for the last function to finish before they start.

function printString(str){
    setTimeout( 
        ()=>{ console.log(str) }, 
        Math.floor(Math.random()*1000)+1
    )
}

// function print(){
//     printString("A");
//     printString("B");
//     printString("C");
// }

// print();

// function printString(str,callback){

//     setTimeout( 
//         ()=>{ 
//             //callback();
//             console.log(str);
//             callback();
//         }, 
//         Math.floor(Math.random()*1000)+1
//     )

// }
// function printAll(){
//     printString("A",
//      ()=>{ 
//          console.log("1st callback");
//          printString("B",
//             ()=>{
//                 console.log("2nd callback");
//                 printString("C",
//                     ()=>{
//                         console.log("3rd callback");}
//                     )
//                 })
//     })
// }

//printAll();

function printString(str){
    return new Promise((resolve, reject) => {
        setTimeout(
          () => {
           console.log(str)
           resolve()
          }), 
          Math.floor(Math.random() * 1000) + 1
    })
}


async function printing(){
    await printString("A")
    await printString("B")
    await printString("C")
}

printing();
