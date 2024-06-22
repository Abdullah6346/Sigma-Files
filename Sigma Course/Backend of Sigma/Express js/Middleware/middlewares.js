//  These are application level middle ware 
const express = require('express')
const send = require('send')
const app = express()
const port = 3000
// Basic Middleware Example
// Tradition method of writing middleware 
// Middleware is used to  make changes in req() object 

// const myLogger = function (req, res, next) {
//     res.send('LOGGED')
   
//   }

// app.use(myLogger)

// // Tradition method of writing middleware 
// const middleware=function(req, res, next){
//       res.send(" Your request is hacked by middleware")
      
// }

// app.use(middleware)

// Advanced Method of writing middleware 
// Use of next
// app.use((req, res,next)=>{
//   console.log("I will cause  error because i do not contain next()" )
// }
// )

// app.use((req, res,next)=>{
//   res.send(" this will not work")
// }
// )



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
