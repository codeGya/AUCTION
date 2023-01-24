const Sequelize=require('sequelize')


const sequelize=new Sequelize('auction','root','Is18071995$',{host:'localhost',dialect:'mysql'
})

module.exports=sequelize