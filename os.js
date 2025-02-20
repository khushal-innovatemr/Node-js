const os = require('os');
console.log("CPU Architecture:",os.arch());
console.log("Free Memory:",os.freemem(),"bytes");
console.log("Total Memory:",os.totalmem(),"bytes");
console.log("Network Interfaces:",os.networkInterfaces());
console.log("default directory for temp files:",os.tmpdir());
console.log("OS Used:",os.platform());
console.log("hostname:",os.hostname());
console.log("home directory:",os.homedir());
console.log("uptime",os.uptime());
console.log("priority",os.getPriority())