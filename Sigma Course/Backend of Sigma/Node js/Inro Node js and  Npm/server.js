console.log("Hello World")
// Slugify use

var slugify = require('slugify')

let a =slugify('Hello jdoids @b@@ dnso') // some-string
console.log(a)
// if you prefer something other than '-' as separator
let c=slugify('some string', '_')  // some_string
console.log(c)