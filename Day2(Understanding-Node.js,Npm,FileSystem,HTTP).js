// Node.js is not a library , framework , package ...  It is developed to run javascript code in the backend and to make servers . 

// Node.js is a javascript runtime environment.

// Node.js javascript ko wrapper ke tharah use karta hai v8 engine ko jo ki c++ language mein likha gaya hai.

// download node.js from nodejs.org/ ; 99.9% in cases it will download the npm package(node package manager - packages ka store ) 

// npm init -- it will create package.json which will contain all the details of the package



//File System👇

//1.Writing a file
//https://nodejs.org/docs/latest/api/fs.html#callback-example
//at bottom refer to To use the callback and sync API's
const fs = require('fs');
//https://nodejs.org/docs/latest/api/fs.html#fswritefilefile-data-options-callback(refer documentation)
// visit to bottom part and refer to fs.writefile(file,data[,options,callback])
fs.writeFile("day2FileSystem","Learning file system concepts",function(err){
  if(err) console.error("Error writing")
  else console.log("File written successfully")
})

//2.Append the file system
fs.appendFile("day2FileSystem"," at a lighting speed",function(err){
  if(err) console.error("Error writing")
  else console.log("done")
})

//3. Rename the file system
/*fs.rename("day2FileSystem","Day2FileSystemUnderstanding",function(err){
  if(err) console.error("Error writing")
  else console.log("done")
})*/

//4. Copy the file system
fs.copyFile("day2FileSystem","./Day2(FileSystem)/copied.txt",function(err){
  if(err) console.error(err.message) 
  else console.log("File copied successfully")
})

//5. Delete(Unlink) the file system
/*fs.unlink("day2FileSystem",function(err){
  if(err) console.error(err.message) 
  else console.log("File deleted successfully")
})*/

//6. Remove the directory file system
/*fs.rm("./Day2(FileSystem)",{recursive:true},function(err){
  if(err) console.error(err.message) 
  else console.log("Directory deleted successfully")})*/

  //if you don't mention recursive:true then it will basically delete the empty directory.

  // 7. Read the file system
  fs.readFile("Day2FileSystem",'utf8',function(err, data){
    if(err) console.error(err.message) 
    else console.log(data)
  })
  //refer the documentation . If you don'write utf8 then it will return the output in buffer format . utf8 is used for encoding



  //HTTP and HTTPS👇
  // Http is a protocol which allows you to work on the internet . It allows you to sent or receive  requests

  const http= require('http');

  const server= http.createServer(function(req, res){
    res.end("hello world");
  })
  server.listen(3000);
