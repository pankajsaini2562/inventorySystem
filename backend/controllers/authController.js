import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const register = async (req,res)=>{
const {name,email,password}=req.body
try {
  const user =await User.findOne({email})
  if (user) {
    return res.status(400).json({success:false,msg:"user already exist"})
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,salt)
  const newuser =new User({name,email,password:hashedPassword})
  await newuser.save()

 const payload = {
  id:newuser._id
 }
  const token = jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn: '1000000h'
  })

  res.status(201).json({success:true,token
  })

}
catch (err) {
  console.log(err.message)
  res.status(500).send('server error')
}

};
export const login = async (req,res)=>{
  const {email,password} =req.body
 try {
 const user = await User.findOne({email})
 if (!user) {
return res.status(400).json({success:false,message:"wrong crendential"})
 }
   const isMatch =await bcrypt.compare(password,user.password)
   if (!isMatch) {
    return res.status(400).json({success:false,message:"wrong crendential"})
   }

   const payload ={
    id:user._id
   }
   const token = jwt.sign(payload,process.env.JWT_SECRET,{
    expiresIn: '1000000h'
  })
   res.status(200).json({
    success: true,
    token
  });
 }
 catch (err) {
console.log(err)
res.status(500).send("server error")
 }
}