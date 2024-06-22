use('sigma')
// To create a collection
// db.createCollection('crud')

// CRUD operations
// Create data into documents

// db.crud.insertOne({
//     name:'Abdullah',
//     class:'first year',
//     hobby:'Software Developer'
// })

// db.crud.insertMany([
//     {
//         "name": "Abdullah",
//         "class": "first year",
//         "hobby": "Software Developer"
//     },
//     {
//         "name": "John",
//         "class": "second year",
//         "hobby": "Graphic Designer"
//     },
//     {
//         "name": "Emily",
//         "class": "third year",
//         "hobby": "Data Scientist"
//     },
//     {
//         "name": "Michael",
//         "class": "first year",
//         "hobby": "Game Developer"
//     },
//     {
//         "name": "Sophia",
//         "class": "second year",
//         "hobby": "UX Designer"
//     },
//     {
//         "name": "Daniel",
//         "class": "third year",
//         "hobby": "Mobile App Developer"
//     },
//     {
//         "name": "Olivia",
//         "class": "first year",
//         "hobby": "Web Developer"
//     },
//     {
//         "name": "Matthew",
//         "class": "second year",
//         "hobby": "Network Engineer"
//     },
//     {
//         "name": "Ava",
//         "class": "third year",
//         "hobby": "AI Researcher"
//     },
//     {
//         "name": "William",
//         "class": "first year",
//         "hobby": "Cybersecurity Analyst"
//     }
// ])

// Read Operations
// db.crud.findOne({"name":"Ava"})

// db.crud.find({"class":"first year","name":"Abdullah"})

// Delete Operations

// db.crud.deleteOne({"name":"Ava"})


// Update Operations
// It's Syntax is very important it requires atomic operators

// db.crud.updateOne({"name":"Abdullah"},{$set:{"updatedname":"Ali"}})


// db.crud.updateMany({"name":"Abdullah"},{$set:{"updatedname":"Ali"}})
// It will delete existing data in document check syntax


// db.crud.replaceOne({"name":"Abdullah"},{"updatedname":"Ali"})