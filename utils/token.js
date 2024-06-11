const crypto = require('crypto');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');

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


 const generateResetToken = (length = 5) => {
    const characters = process.env.CHARACTER_SET;
    const characterCount = characters.length;
    let token = '';
    const randomBytes = crypto.randomBytes(length);
    for (let i = 0; i < length; i++) {
        const randomIndex = randomBytes[i] % characterCount;
        token += characters[randomIndex];
    }
    return token;
};


const sendResetToken = async (email, token, next) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        const sourcePath = path.join(__dirname, '..', 'templates', 'resetPasswordTemplate.html');
        if (!fs.existsSync(sourcePath)) {
            throw new Error(`Template file not found: ${sourcePath}`);
        }

        const source = fs.readFileSync(sourcePath, 'utf8');
        const template = handlebars.compile(source);
        const resetLink = `${process.env.RESET_LINK}/${token}`;
        const htmlToSend = template({ resetLink });

        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Password Reset Request',
            html: htmlToSend
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error in sendResetToken:', error);
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