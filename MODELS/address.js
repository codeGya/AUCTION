const Sequelize=require('sequelize')
const sequelize=require('./database.js')

const Address=sequelize.define('Address',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    building:{
        type:Sequelize.STRING
    },
    city:
    {
        type:Sequelize.STRING,
    },
    state:
    {
        type:Sequelize.STRING
    }
    


})
module.exports=Address