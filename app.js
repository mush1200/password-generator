const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000
const generatePassword = require('./generate_password')

app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  console.log(password)
  res.render('index', {password: password})
})
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}.`)
})
