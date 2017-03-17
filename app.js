const express = require('express')
const app = express()
var lodash = require('lodash');

app.use('/src',express.static(__dirname + '/static'))

app.set('view engine', 'pug')
app.set('views', __dirname+ '/views')


app.get('/hoi', (req, res) => {
	res.send('doei')
})


app.use('/', require( __dirname + '/routes/index'))

app.listen(8080, c => {
	console.log('server running on port 8080')
})