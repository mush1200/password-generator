const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000


app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})
app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}.`)
})
