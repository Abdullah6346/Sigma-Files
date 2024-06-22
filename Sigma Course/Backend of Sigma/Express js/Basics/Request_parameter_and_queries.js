const express=require(`express`)
const app=express()
const port=3001
// Anyone can access these static files:
// Creating public folder is tradition but you can also use other names as 'files'
// app.use(express.static('public'))
// app.use(express.static('files'))

// app.METHOD(PATH, HANDLER)
// WE can send one thing at a time 

// Use of queries: They are passed as follows in url: http://localhost:3001/hey?userid=1&name=abdullah

app.get('/', (req, res) => {
  console.log(req.params)
  const userid = req.query.userid;
  const name = req.query.name;
  res.send(`Userid: ${userid}, Name: ${name}`);
});

// Parameters
app.get('/:parameter', (req, res) => {
  res.send(`Hello! I am back here ${req.params.parameter}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});