const { Router } = require('express')
const router = Router()
const Todo = require('../models/Todo.js')


router.get('/', async (req, res) => {
  try{
    const todos = await Todo.find({})
    console.log(todos)
      res.render('index', {
        title: 'Todo-index',
        isIndex: true,
        todos: todos
      })
      res.end()
  }
  catch(err) {
    console.log(err)
  }
})

router.post('/create', async (req, res) => {
  console.log(req.body.title)
  try{
    const todo = new Todo({
      title: req.body.title
    })
    await todo.save()
    res.redirect('/')
  }
  catch(err) {
    console.log(err)
  }
})

router.get('/create', (req, res) => {
  res.render('create', {
    title: 'Todo-create',
    isCreate: true
  })
})

module.exports = router