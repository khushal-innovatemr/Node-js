const fs = require('fs');

fs.open('abc.txt','r',function(err,f){
    if(err){
        console.log('file error')
    }
    console.log(f);
    console.log("File Open_ed!")
})

fs.open('dc.txt', 'w+', function (err, f) {
    if (err) {
        return console.error(err);
    }
    console.log("File opened!!"+f);
});


fs.open('dc.txt', 'w+', function (err, f) {
    if (err) {
        return console.error(err);
    }
    console.log("2 opened!!"+f);
});
