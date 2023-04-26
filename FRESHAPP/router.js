const express=require('express')
const router=express.Router()
const controller=require('../CONTROLLER/controller.js')
const authenticate=require('../CONTROLLER/authenticate.js')

router.post('/post/user',controller.createSignUpPage)
router.post('/sign/user',controller.signInAlreadyPresentUser)
router.post('/add/address',authenticate.verifyUserAuthencity,controller.addAddress)

module.exports=router