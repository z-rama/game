const express = require('express')
const routerLogin = express.Router()
const bodyParser = require('body-parser')

routerLogin.use( bodyParser.urlencoded({extended: true}))

routerLogin.get('/login', (req, res) => {
	res.render('login')
})


routerLogin.post('/login', (req, res) => {
	console.log(req.body)
	res.redirect('/')
})


module.exports = routerLogin