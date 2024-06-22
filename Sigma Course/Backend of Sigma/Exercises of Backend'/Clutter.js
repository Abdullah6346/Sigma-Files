const fs = require(`fs`)
let path = require(`path`)

const folderpath = './jpg'
fs.mkdir(folderpath, (err) => {
  if (err) {
    console.error('Error creating folder:', err);
  } else {
    console.log('Folder created successfully!');
  }
})

// Get the directory where the files are located
const directory = path.dirname(path.resolve('Clutter.js'));
// Get all files in the directory
const files = fs.readdirSync(directory);
// Filter the files by their extension
const filteredFiles = files.filter((file) => {
  // Check if the file has the desired extension
  return path.extname(file) === '.jpg';
});
console.log(filteredFiles);


// Moving files
var oldpath = path.resolve('cat.jpg');
var destination = path.join(path.dirname(oldpath), `/jpg/${filteredFiles}`)

fs.rename(oldpath, destination, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("I have succeeded in moving the file.");
  }
});


