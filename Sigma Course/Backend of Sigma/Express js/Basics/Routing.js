const express = require('express')
const app = express()
const port = 3000
// This will not work 
// app.post('/', (req, res) => {
//   for (let i = 0; i < 5; i++) {
//     res.send( `Hello I am back ${i}`)
    
//   }
// })
// app.post('/', (req, res) => {
//     let responses = [];
//     for (let i = 0; i < 5; i++) {
//       responses.push(`Hello I am back ${i}`);
//     }
//     res.send(responses.join('\n'));
//   });

// app.get('/', (req, res) => {
//   res.sendFile( '/index.html', {root:__dirname});
  
// })
// for downloading a file
// app.get('/', (req, res) => {
//   res.download( '/index.html', {root:__dirname});
  
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})