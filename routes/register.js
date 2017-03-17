
const db = require(__dirname + '/../modules/database')
const express = require('express')
const routerRegister = express.Router()
const bodyParser = require('body-parser')

routerRegister.use( bodyParser.urlencoded({extended: true}))


routerRegister.post('/register', (req, res) => {
	db.User.create({
		name: req.body.name,
		password:req.body.password,
		score: 0
	}).then( user => {
		res.render('index', {user:user})
	})
	
})


module.exports = routerRegister