const User=require('../MODELS/usertable.js')
const Address=require('../MODELS/address.js')
const jwt=require('jsonwebtoken')

exports.createSignUpPage=async (req,res,next)=>{
    let {name,email,password,number}=req.body
    
    
    console.log(req.body)
    
    await User.findAll({where:{}})

    const signupUser=await User.create({email:email,name:name,password:password,mnumber:number})
    res.status(200).send({})
}
exports.signInAlreadyPresentUser=async (req,res,next)=>{
    let email=req.body.email
    let password=req.body.password

    const allUsers=await User.findAll({where:{email:email}})
    if(allUsers.length!==0){
        let findParticularUser=await User.findByPk(allUsers[0].id)
        if(findParticularUser.password===password){
            const token=jwt.sign({userId:allUsers[0].id},'indreshsingh')
            res.status(200).send(token)
        }else{
            res.status(205).send({})
        }
    }
}
exports.addAddress=async (req,res,next)=>{
    let town=req.body.town
    let city=req.body.city
    let state=req.body.state
    console.log(town,'town')
    console.log(city,'city')
    console.log(state,'state')

    await Address.create({building:town,city:city,state:state,UserId:req.user.id})
    res.status(200).send({})

}
