const express=require('express')
const router=require('./router.js')
const app=express()
const cors=require('cors')
const sequelize=require('../MODELS/database.js')
const User=require('../MODELS/usertable')
const Address=require('../MODELS/address.js')
app.use(express.json())
app.use(cors())
sync()
async function sync(){
    await sequelize.sync()
   
}
User.hasMany(Address)
Address.belongsTo(User)


app.use(router)

app.listen(5000)