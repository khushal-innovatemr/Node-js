console.log('Hello World!');

const fs = require('fs');

fs.readFile('ef.txt',(err,data) => {
    if (err) throw err;
    console.log("File is Read Using Callback Version:",data.toString())
})

const sf = require('fs').promises

fs.writeFile('ef.txt','InnovateMR',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Write Action Performed");
})

async function read_file(){
    try{
        const data_1 = await sf.readFile('ef.txt',{encoding:'utf8'});
        console.log("File is Read Through Promises and Async Await:",data_1);
    }
    catch(err){
        console.log(err)
    }
}
read_file();