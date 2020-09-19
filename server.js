const express = require('express')
const mongoose = require('mongoose')
const exphbs  = require('express-handlebars')
const app = express()
const path = require('path')
const PORT = process.env.PORT | 3000
const todosRoutes = require('./routes/todos.js')
const { connect } = require('http2')


const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
// app.set('views', path.join(`${__dirname}/views`));
// app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true}))
app.use(todosRoutes)

async function connectDB () {
  try {
    await mongoose.connect("mongodb+srv://rasulkurbon:MuhammadY330@cluster0.xqfqn.mongodb.net/node-mongo-app", {useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true})
  }
  catch(err) {
    console.log(err.message)
  }
}  
connectDB()


app.listen(PORT, () => console.log(`Server running port on: ${PORT}`))