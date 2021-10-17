const {Router} = require('express')
const router = Router()

let counter = 0;

router.get('/', (req, res)=>{
  res.render('main', {
    title: 'Main page',
    counter: counter
  })
})

router.get('/stat', (req, res)=>{
  counter++
  res.render('stat', {
    title: 'Increment',
    counter: counter
  })
})

router.get('/about', (req, res)=>{
  res.render('about', {
    title: 'About',
    name: 'Anastasia'
  })
})

module.exports = router
