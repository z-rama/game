const express = require('express')
const app = express()
const db = require(__dirname + '/modules/database')


app.use('/src',express.static(__dirname + '/static'))

app.set('view engine', 'pug')
app.set('views', __dirname+ '/views')

//test route
app.get('/hoi', (req, res) => {
	res.send('doei')
})


app.use('/', require( __dirname + '/routes/index'))
app.use('/', require( __dirname + '/routes/login'))
app.use('/', require( __dirname + '/routes/register'))


db.conn.sync( {force:true}).then( f => {
	return db.User.create({
		name: 'MemoryKillah',
		password: 'test',
		score: 0
	}).then( f =>{
		app.listen(8080, c => {
			console.log('server running on port 8080')
		})
	})
})
