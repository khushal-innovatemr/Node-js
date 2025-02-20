// //timers
const fs = require('fs');

// function file_read(callback){
//     fs.readFile('dc.txt',callback);
// }

// const timeout = Date.now();

// setTimeout(() => {
//     const delay = Date.now()-timeout;

//     console.log(`${delay}ms have passed since timeout has been scheduled `)
// },100);

// //file_read takes 100 ms to complete
// file_read(()=>{
//     const start_callback = Date.now();

//     let count = 0;  //do nothing
//     while(Date.now()-start_callback<10){
      
//         console.log(`"do nothing",${count+1}`)
//         count++;
//     }
// });

console.clear();
fs.readFile('abc.txt',()=>{
    setTimeout(()=>{
        console.log('Kevin')
    },0);
    setImmediate(()=>{
        console.log('Shah1')
    })
    process.nextTick(()=>{
        console.log("Intern1")
    })
    process.nextTick(()=>{
        console.log("Intern2")
    })
    setImmediate(()=>{
        console.log('Shah2')
    })
    process.nextTick(()=>{
        console.log("Intern3")
    })
    console.log("Mean Stack2")
    process.nextTick(()=>{
        console.log("Intern4")
    })
    console.log("Mean Stack")
})


// console.clear()
// let bar;

// const someAsyncApiCall = (() => {
//   console.log('bar', bar);
// });

// bar = 1;
// someAsyncApiCall()