// 1. INTRODUCTION
/*
express js ek npm package hai

it is a framework( a tool for developers to control flow)
frame work bata ta hai ki kisi chej ko kaisa karain . Aur usko waisa hi karna hai.eg- In morning you have to bath; in which way you can bath is your wish (through shower , through bouquet , through pond etc) but you have to bath.This is the flow

Therefor Angular is a  framework while React is not a framework it is a tool

Express js manages eveything from receiving the request and giving the response. eg- when we search for a query like give me a photo of a dog ie we basically send a request to the server  done through the browser. to express js uss request ko accept karega fir wahan se accept kaarne se leke response kya ata hai sab kuch express js hai
*/
/////////////////////////////////////////////////////////////////////////////////////////////

/*
2. Setting up the basic Express application
  search Express in NPM and install the package - npm i express
  copy the code from the npm -https://www.npmjs.com/package/express

  Route ?
  eg- www.instagram.com/profile - www.instagram.com is the domain name and profile is the route
*/
const express = require('express')
const app = express()// const app - here express is not a variable it is a function

app.get('/', function (req, res) { // get has usually req,response, next ; response is a middleware also called request handler
  res.send('Hello World')
})

 app.listen(3000) // to check the code running go to browser and search localhost:3000 and without app.listen our server will not start


/* 3. Installing Nodemon Package
  npm i nodemon -g - package
nodemon is a package which will automatically restart the server whenever we make changes in the code
to run the code - npx nodemon filename 

*/
/*const express = require('express');
const func = express();

func.get('/hi', function (req, res) {
  res.send('Hi How are you?');
})
func.get('/profile', function (req, res) {
  res.send("This is my profile")
})

func.listen(3000);*/

// run the code