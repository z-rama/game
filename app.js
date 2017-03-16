const express = require('express')
const app = express()


app.get('/hoi', (req, res) => {
	res.send('doei')
})


app.listen(8080, c => {
	console.log('server running on port 8080')
})