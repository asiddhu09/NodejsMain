const fs2 = require('fs')

// 2) a: 

fs2.mkdir("new2",()=>{
    console.log("new Folder Created");
});

// 2) b: 

fs2.writeFile("file2.txt","This is 1st line of second file and this is created in Async \n",()=>{})

// 2) c:

fs2.appendFile("file2.txt","This is 2nd line created using Async",()=>{})

// 2) d:

displayData1 = fs2.readFile("file2.txt","latin1",(err,displayData1)=>{
    console.log("Your file's content is :" , displayData1);
});

// 2) e: 

fs2.rename('file2.txt','changed1.txt',()=>{
    console.log("Renamed !!");
})