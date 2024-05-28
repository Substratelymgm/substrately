const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

const createAccessToken = (id) =>{
   return jwt.sign({id},process.env.ATS,{
       expiresIn:process.env.ATE
   })
}

const createRefreshToken = (id) =>{
   return jwt.sign({id},process.env.RTS,{
       expiresIn:process.env.RTE
   })
}

const sendAccessToken = (res,accesstoken,user) =>{
    res.status(200).json({
       accesstoken,
       ...user
    })
}

const sendRefreshToken = (res, refreshtoken) => {
   res.cookie('ref', refreshtoken, {
      httpOnly: true,
      maxAge: 2 * 24 * 60 * 60 * 1000, 
      secure: true, 
      sameSite: 'None', 
    });
    
 };



const generateResetToken = () => {
    let token;
    do {
        token = parseInt(crypto.randomBytes(3).toString('hex'), 16) % 100000;
    } while (token < 10000);
    return token.toString();
};


 const sendResetToken = async (email, token,next) => {
   console.log('Email:', process.env.EMAIL);
   console.log('Email Password:', process.env.EMAIL_PASSWORD);
   
   const transporter = nodemailer.createTransport({
       service: 'Gmail',
       auth: {
           user: process.env.EMAIL, 
           pass: process.env.EMAIL_PASSWORD 
       }
   });

   const mailOptions = {
       from: process.env.EMAIL,
       to: email,
       subject: 'Password Reset Token',
       text: `Your password reset token is ${token}`
   };

   try {
       await transporter.sendMail(mailOptions);
   } catch (error) {
      console.log(error)
      next({
         message: [{
             msg: 'Error sending token',
             path: 'error'
         }]
     });
   }
};



module.exports = {
   createAccessToken,
   createRefreshToken,
   sendAccessToken,
   sendRefreshToken,
   sendResetToken,
   generateResetToken
}