// koi bi kaam ko routes ke pehele karna hai to ham middleware use karte hain

// const express = require('express')
// const app = express()

// app.use(function(req, res, next) {  // app.use hamara middleware hai jo ki pehele chalega router se pehele
//   console.log('Time: ', Date.now())
//   next() //agar next na likho to router kai pass nahi jaega au wahin par reload hota rahega
// })

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)



const express = require('express')
const app = express()

app.use(function (req, res,next) {
  console.log('Time: ', Date.now())
  next() 
})

app.use(function (req, res,next) {
  console.log('Bhai ye to badhia hai')
  next() 
})

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)



// 2.. There also exists another method of middleware

// Error Handling -https://expressjs.com/en/guide/error-handling.html
/*const express = require('express')
const app = express()

app.use(function (req, res,next) {
  console.log('Bhai ye to badhia hai')
  next() 
})
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home', function (req, res,next) {
  res.send('Hello World')
  return next(new Error('Something went wrong'));
})
app.use((err, req, res, next) => { // always write error towards last
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
app.listen(3000)
*/
