const path = require('path');
//file extension name for path
console.clear();
const filepath = '/users/gfg/documents/reports.pdf'
const extension = path.extname(filepath);
console.log('File Extension:',extension);

//expected output:".pdf"

//resolve sequence of paths
console.clear();
const abs = path.resolve('users','gfg','documents')
console.log(abs);

//expected output:"/home/khusal_jain/Public/nodejs/users/gfg/documents"

//filename portion
console.clear();
p1 = path.basename('/home/khusal_jain/Public/nodejs/abc.txt','.txt')
console.log(p1);
p2 = path.basename('/home/khusal_jain/Public/nodejs/bc.txt')
console.log(p2);

//expected output: abc
//bc.txt

//using windows path
console.clear();
  
ph1 = path.basename('C:\\users\\bash\\index.html'); 
console.log(ph1) 
  
ph2 = path.basename('C:\\users\\bash\\index.html', '.html'); 
console.log(ph2)

// //expected output:
// C:\users\bash\index.html
// C:\users\bash\index


//dirname
console.clear();
pt1 = path.dirname('/home/khusal_jain/Public/nodejs/abc.txt')
console.log(pt1);

//expected output:/home/khusal_jain/Public/nodejs

//path.format
console.clear()
let pk1 = path.format({
    root:"/ignored/root/",
    dir:"/home/user/personal",
    base:"details.txt",
})
console.log('Path:',pk1);

//expected ouput :Path: /home/user/personal/details.txt

console.clear();
let path3 = path.format({ 
    root: "website\\", 
    name: "main", 
    ext: ".js", 
}); 
console.log("Path:", path3); 

//expected output:Path: website\main.js

//abs path
let ph5 = path.isAbsolute("user/bash/readme.md"); 
console.log(ph5); 
   
let ph6 = path.isAbsolute("/user/bash/readme.md"); 
console.log(ph6); 
   
let ph7 = path.isAbsolute(".."); 
console.log(ph7); 

//expected output: false
// true
// false

//windows methods
console.clear();
let p5 = path.isAbsolute("\\home\\khusal_jain\\Public\\nodejs\\"); 
console.log(p5); 

let p6 = path.isAbsolute("\\user\\bash\\"); 
console.log(p6); 

// expected output :false
// false

//join methods
console.clear()
p_t = path.join('users/admin/files','index.html');
console.log(p_t);
//expected output: users/admin/files/index.html

p_t1 = path.join('users',"..");
console.log(p_t1)
//expected output: .

console.log("current_directory:",__dirname);
//expected output: current_directory: /home/khusal_jain/Public/nodejs
pt2 = path.join(__dirname,"..")
console.log("directory above:",pt2)
// expected output : directory above: /home/khusal_jain/Public
pt3 = path.join(pt2,'..')
console.log("Main directory:",pt3);
// expected output : Main directory: /home/khusal_jain


//parse method
console.clear()
pr1 = path.parse("/users/admin/website/index.html"); 
console.log(pr1); 
   
pr2 = path.parse("website/readme.md"); 
console.log(pr2); 