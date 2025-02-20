// // console.log('hello world')

const fs = require('fs');

fs.readFile('abc.txt', (err, data) => {
    if (err) throw err;
    console.log('async file read,',data.toString());
});

//read //sync

const dt = fs.readFileSync('abc.txt');
console.log('sync file read')
console.log(dt.toString());


//read//async//promises
const fss = require('fs').promises;

async function example(){
    try{
        const cont = "Yo change";
        // console.log("\nImplemented,write promises\n")
        await fss.writeFile('dc.txt', cont);
    }
    catch(err){
        console.log(err);
    }
}

example();

//write //sync
const content = 'One Insure';

try {
  fs.writeFileSync('bc.txt', content);
  console.log('\nThis is implemented then WriteFilesync')
} catch (err) {
  console.error(err);
}

// //write file
fs.writeFile('abc.txt','Innovate MR',err => {
    if(err) throw err;
    else{
        console.log('This is Implemented then i.e writefile\n')
    }
})

// // fspromises for write

async function example(){
    try{
        const cont = "Yo change";
        console.log("\nImplemented,write promises\n")
        await fss.writeFile('dc.txt', cont);
    }
    catch(err){
        console.log(err);
    }
}

example();

//append method
fs.appendFile('ef.txt','\nInn-Mr',err => {
    if(err){
        console.log(err);
    }
    else{
        console.log('appended the content')
    }
});

//fs append promises
const fs_1 = require('fs').promises;

async function ex(){
    try{
        await fs_1.appendFile('ef.txt','\nMR')
    }
    catch(err){
        console.log(err);
    }
}
ex();
