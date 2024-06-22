const express = require('express')
// console.log(express())
const app = express()
const port = 3000
// first is path and the second thing is handler function in app.get() 
// We can also use app.delete() app.put() app.post() app.get() means crud

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})