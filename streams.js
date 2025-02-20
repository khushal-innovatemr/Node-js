// read  stream
const fs = require('fs');

const reader = fs.createReadStream('dc.txt');

reader.on('data',function(chunk){
    console.log(chunk.toString());
    console.log("normal\n")
});



// by defining blocks,byte,encoding

red = fs.createReadStream('dc.txt',{
    flag:'a+',
    encoding:'UTF-8',
    start:5,
    end:64,
    highWaterMark: 16
});

red.on('data',function(chunk){
    console.log(chunk.toString());
})

//write stream
redit = fs.createWriteStream('dc.txt',{
        flag:'a+',
        encoding:'UTF-8',
        start:78,
        end:64,
        highWaterMark: 16
    });
    redit.write('Dhruv Suthar')
    
    red.on('data',function(chunk){
        console.log(chunk.toString());
    })

// create writestream

let writer = fs.createWriteStream('dc.txt')
writer.write('Rohit Virat KL Iyer Gill')


//create writestream from readstream using piping
let writers = fs.createWriteStream('ef.txt',{flags:'w'});

let readers = fs.createReadStream('ef.txt').pipe(writers);
readers.write("Rohitsharmasss")




