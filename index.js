const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
var favicon = require('serve-favicon')
var path = require('path')
 
var app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))