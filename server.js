const express = require('express')
const mongoose = require('mongoose')
const exphbs  = require('express-handlebars')
const app = express()
const PORT = process.env.PORT | 3000
const router = express.Router()



const hbs = exphbs.create({

})

app.get('/', (req, res) => {
    res.json({hello: "Assalomu alaykum"})
  })


async function connectDB () {
  try {
    await mongoose.connect("mongodb+srv://rasulkurbon:MuhammadY330@cluster0.xqfqn.mongodb.net/node-mongo-app", {useFindAndModify: false, useNewUrlParser: true})
  }
  catch(err) {
    console.log(err.message)
  }
}  



app.listen(PORT, () => console.log(`Server running port on: ${PORT}`))