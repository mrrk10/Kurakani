const router = require('express').Router();
const registerController=require('../controllers/regitserController')


router.post('/register', registerController)
  
module.exports=router