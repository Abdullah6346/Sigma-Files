
import mongoose from 'mongoose'
import express from 'express'
await mongoose.connect('mongodb://localhost:27017/')

const app = express()
const port = 3001
app.set('view engine', 'ejs')


const mySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

const myModel = mongoose.model('employees', mySchema);

const data = 
    [
          {
            "name": "Harry",
            "salary": 45000000,
            "language": "Python",
            "city": "New York",
            "isManager": true
          },
          {
            "name": "Monica",
            "salary": 35000000,
            "language": "JavaScript",
            "city": "London",
            "isManager": false
          },
          {
            "name": "Chandler",
            "salary": 25000000,
            "language": "C++",
            "city": "Paris",
            "isManager": false
          },
          {
            "name": "Phoebe",
            "salary": 20000000,
            "language": "Java",
            "city": "Berlin",
            "isManager": false
          },
          {
            "name": "Joey",
            "salary": 15000000,
            "language": "PHP",
            "city": "Rome",
            "isManager": false
          },
          {
            "name": "Rachel",
            "salary": 10000000,
            "language": "Ruby",
            "city": "Madrid",
            "isManager": false
          },
          {
            "name": "Ross",
            "salary": 5000000,
            "language": "Swift",
            "city": "Barcelona",
            "isManager": false
          },
          {
            "name": "Susan",
            "salary": 4000000,
            "language": "Go",
            "city": "Lisbon",
            "isManager": false
          },
          {
            "name": "Mike",
            "salary": 3000000,
            "language": "Kotlin",
            "city": "Dublin",
            "isManager": false
          },
          {
            "name": "Carol",
            "salary": 2000000,
            "language": "Scala",
            "city": "Amsterdam",
            "isManager": false
          }
        ]
      

 
  console.log(data)
app.post('/insertData', async (req, res) => {
  

  await myModel.insertMany(data)
      .then(() => {
          console.log("Data inserted successfully");
          res.send("Data inserted successfully");
      })
      .catch(error => {
          console.error("Error inserting data:", error);
          res.status(500).send("Error inserting data");
      });
});
     

app.get('/', (req, res) => {

    res.render('dummy', { data: data })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})