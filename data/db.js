const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('hexfm','root','', {
    host: 'localhost',
    dialect: 'mysql'
})

var UserModel = require('../models/user')
var LogModel = require('../models/log')
var SettingModel = require('../models/setting')
var MessageModel = require('../models/message')

const User = UserModel(sequelize, Sequelize)
const Log = LogModel(sequelize, Sequelize)
const Setting = SettingModel(sequelize, Sequelize)
const Message = MessageModel(sequelize, Sequelize)

User.hasMany(Log)
Log.belongsTo(User)
User.hasMany(Message)
Message.belongsTo(User)

sequelize.sync().then(() => {
  console.log(`Database & tables created!`)
})

module.exports = {
  User,
  Log,
  Setting,
  Message
}