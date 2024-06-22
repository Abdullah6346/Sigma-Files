//  import fs from "fs/promises"
// One Method 
// console.log(a)
// Second Method
// const fs= require(`fs`)
// fs.writeFile('name.txt','hello i am the typed note wow',() => {
//   console.log("done")
// }
// )
// const fs= require(`fs`)
// fs.appendFile('name.txt','hello i am the typed note wow',() => {
//   console.log("done")
// }
// )

// const fs= require(`fs`)
// fs.readFile("name.txt",(err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data.toString());
//   });
 
// const fs = require(`fs`)
// fs.rename('name.txt','helloname.txt',() => {
//   console.log('hello')
// }
// )

// To delete a file with the File System module,  use the fs.unlink() method.
// const fs = require(`fs`)
// fs.unlink('helloname.txt', (err) => {
//     if (err) throw err;
//     console.log('helloname.txt was deleted');
//   });