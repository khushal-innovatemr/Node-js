const a = 1;
const b = 2;
const c = a * b;
console.log(c);

const p = new Promise(function(resolve,reject){
    request.get(options, function(err,resp,body){
        if(err){
            reject(err);
        }
        else{
            resolve(JSON.parse(body));
        }
    })
})
//example of custom promises