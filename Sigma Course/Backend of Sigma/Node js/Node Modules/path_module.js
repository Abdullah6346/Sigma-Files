// The Path module provides a way of working with directories and file paths.
// let path=require(`path`)
// console.log(path)
// resolve()	Resolves the specified paths into an absolute path
// let path=require(`path`)
// let fullpath=path.resolve('name.txt')
// console.log(fullpath)
// let directory=path.dirname(fullpath)
// console.log(directory)

// const path=require(`path`)
// let j=path.join('C','\\User\\name.txt')
// console.log(j)
const path=require(`path`)
let name =path.basename('name.txt')
console.log(name)