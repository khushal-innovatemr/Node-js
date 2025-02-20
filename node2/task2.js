const http =  require('http');
http.createServer((req,res) => {
    url = req.url
    if(url === '/'){
        res.write("Xiaomi")
        res.end();
    }
    if(url === '/about'){
        res.write('Redmi Note 9 Pro Max')
        res.end()
    }
    if(url === '/contact'){
        res.write("8983320")
        res.end();
    }
    else{
        res.write("Nahi Milega")
        res.end();
    }
}).listen(4356);
console.log("http://localhost:4356");
