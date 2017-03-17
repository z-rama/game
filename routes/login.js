const db = require(__dirname + '/../modules/database')
const express = require('express')
const routerLogin = express.Router()
const bodyParser = require('body-parser')

routerLogin.use( bodyParser.urlencoded({extended: true}))

routerLogin.get('/login', (req, res) => {
	res.render('login')
})


routerLogin.post('/login', (req, res) => {
	db.User.findOne({where: {name:req.body.name}}).
	then(user => {
		console.log(user.password)
		console.log(req.body.password)
		if (user && req.body.password === user.password) {
			console.log("I run")
			res.render('index' , {user:user})
		}
		else {
			res.redirect('/login/?message=' + encodeURIComponent("Man you don't excist yet. Register first."))
		}
	})
})


module.exports = routerLogin