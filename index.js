const fs1 = require('fs');


// 1) a: 
fs1.mkdirSync("new1");


// 1) b: 
fs1.writeFileSync('file1.txt',"Hi there this my 1st line!! \n")


// 1) c: 
fs1.appendFileSync('file1.txt', "So this is my 2nd line!!")

// 1) d: 

dispalyData = fs1.readFileSync('file1.txt', "latin1")

console.log(dispalyData)

// 1) e: 

fs1.rename('file1.txt', 'changed.txt', () => {
  console.log("\nFile Renamed!\n");
});