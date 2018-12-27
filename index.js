const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
var favicon = require('serve-favicon')
var path = require('path')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.get('/', (req, res) => res.send('Home page'))
app.get('/contact', (req, res) => res.send('contact page'))
app.get('/about', (req, res) => res.send('about page !'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))