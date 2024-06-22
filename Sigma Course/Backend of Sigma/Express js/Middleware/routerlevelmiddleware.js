//  These are router level middle ware 
const express = require('express')
const app = express()
const port = 3000

// const routerlevelmiddleware=(req,res,next) => {
//   res.send("I am a router level middleware")
// }


// app.get('/', routerlevelmiddleware, (req, res) => {
//   res.send('Hello World!')
// })

app.get('/', (req, res) => {
  res.send('routerlevelmiddleware is not working in me')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})