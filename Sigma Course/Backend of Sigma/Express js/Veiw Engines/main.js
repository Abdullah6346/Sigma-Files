const express = require('express')
const app = express()
const port = 3008
app.set('view engine','ejs')
var myvariable="hellokaise ho"
let people = ['geddy', 'neil', 'alex'];

app.get('/', (req, res) => {
  // {myvariable:myvariable} means pass variable myvariable as name myvariable to use in the index  ejs file 
  let x= " i am for clarification "
  res.render('index',{myvariable:myvariable,x:x,people:people})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})