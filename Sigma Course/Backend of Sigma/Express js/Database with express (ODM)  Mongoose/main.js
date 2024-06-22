import mongoose from "mongoose";
import { Schema } from "./models/forschema.js";
await mongoose.connect('mongodb://localhost:27017/')


import express from "express";
const app = express()
const port = 5023
// Objects are created with models of moongose
const user = new Schema(
    {
        name: "Abdullah",
        hobby:'Painting',
        age:9
    })
    // For validation of Schema 

        user.validate()



    //Crud Operations
    // Read Data

    // const doc = await Schema.findOne();
    // console.log(doc)
    // Update Data 
    
    // doc.name="I am Updated"
    // await doc.save()

    // Update with queries 
    // await Schema.updateMany({name:"Abdullah"},{$set:{name:"Hacker"}})
    // Deleting Data 

    // await Schema.deleteMany({name:"Hacker"})
     
app.get('/', (req, res) => {
    res.send(user)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})