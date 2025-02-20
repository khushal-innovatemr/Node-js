const http =  require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify({
        data:'Manual Reader!'
    }))
})
console.log("Server is Listening to : 'http://localhost:4002'")
server.listen(4002);


const servers = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify({
        data:'Functional Auto!'
    }))
})
const port =  4124;
console.log(`Server is listening to "http://localhost:${port}"`);
servers.listen(port);


// const http = require('http');
http.createServer((req,res)=>{
    res.write("Welcome to Innovate Mr");
    res.end();
}).listen(4200)
console.log("Listening to :","http://localhost:4200")


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
console.log("Listening to :","http://localhost:8980")

