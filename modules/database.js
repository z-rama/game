const sequelize  = require('sequelize')
const db = {}

db.conn = new sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: 'localhost',
	dialect: 'postgres'
})

db.User = db.conn.define('user', {
	name: sequelize.STRING,
	password: sequelize.STRING,
	score: sequelize.INTEGER
})

db.conn
  .authenticate()
  .then(err => {
    console.log('Connection has been established successfully.')
  })
  .catch( err => {
    console.log('Unable to connect to the database:', err)
  })




  module.exports = db