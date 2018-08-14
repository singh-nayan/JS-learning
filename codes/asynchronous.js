// console.log("plant maize");

// setTimeout(()=>{
//     console.log("watering");
// },3000)

// console.log("fertilizer");



const weather=true;

const meeting=new Promise((resolve,reject)=>{

    if(weather){
    
        const address={
            name:"Starbucks",
            location:"NSP",
            table:"11",
            time:"12 pm"
        }
        resolve(address);
    }
    
    else{
        reject(new Error('Bad weather'))
    }
});

const askForcab=meetingDetails=>{
    const situation="Get me a cab to "+meetingDetails.location+", we are going for a meeting";
    return Promise.resolve(situation);
}

// const eonicsMeeting=()=>{
    meeting
    .then(askForcab)    
    // then is default function which takes a function body, we cannot write .then(askForCab())
    // .then( done => console.log("We are going for meeting at "+JSON.stringify(done)) )
    // .then( done => {
    //     console.log("We are going for meeting at :"); 
    //     console.log(done)
    // })
    .then( done => console.log(done) )
    .catch(err=> console.log(err))
// }

// eonicsMeeting();

// console.log("hello");
// console.log("nayan");

// then and catch always takes a function as a parameter