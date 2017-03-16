const express = require('express')
const routerIndex = express.Router()

routerIndex.get('/', (req, res) => {
	res.render('index')
})


module.exports = routerIndex