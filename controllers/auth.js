const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { createAccessToken, createRefreshToken,generateResetToken, sendAccessToken, sendRefreshToken,sendResetToken } = require('../utils/token');
const axios = require('axios')

const register = async (req, res, next) => {
    const { firstName, lastName, phoneNumber, email, password, confirmPassword } = req.body;

    try {
        const existEmail = await User.findOne({ email });
        if (existEmail) return next({
            message: [{
                msg: 'A user with with email exist',
                path: 'error'
            }]
        });

        const user = new User({
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        });

        await user.save();

        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });

        sendRefreshToken(res, refreshToken);
        const { password: userPassword, refreshtoken, __v, ...others } = user._doc;

        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.log(error);
        next({
            message: [{
                msg: 'Internal Server error',
                path: 'error'
            }]
        });
    }
};

// Login user
const login = async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email,password)

    try {
        const user = await User.findOne({ email });

        if (!user) return next({
            message: [{
                msg: 'Invalid credentials',
                path: 'error'
            }]
        });
        
        if (user.signupMethod === 'google') {
            return next({
                status: 400,
                message: [{
                    msg: 'Please log in using Google',
                    path: 'error'
                }]
            });
        }

        const match = await user.isMatch(password);

        if (!match) return next({
            message: [{
                msg: 'Invalid credentials',
                path: 'error'
            }]
        });

        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });

        sendRefreshToken(res, refreshToken);
        const { password: userPassword, refreshtoken: reftoken, __v, ...others } = user._doc;

        sendAccessToken(res, accessToken, others);
    } catch (error) {
        next({
            message: [{
                msg: 'Internal Server error',
                path: 'error'
            }]
        });
    }
};

const requestPasswordReset = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next({
                message: [{
                    msg: 'User not found',
                    path: 'error'
                }]
            });
        }

        const resetToken = generateResetToken()
        user.resetToken = resetToken;
        user.resetTokenExpiry = Date.now() + 30 * 60 * 1000;

        await user.save();
        await sendResetToken(email, resetToken,next);
        res.json({ message: 'Reset token sent to email' });
    } catch (error) {
        next({
            message: [{
                msg: 'Internal Server error',
                path: 'error'
            }]
        });
    }
};


const resetPassword = async (req, res, next) => {
    const { email, token, newPassword } = req.body;

    try {
        const user = await User.findOne({ email, resetToken: token, resetTokenExpiry: { $gt: Date.now() } });
        if (!user) {
            return next({
                message: [{
                    msg: 'Invalid or expired token',
                    path: 'error'
                }]
            });
        }

        user.password = newPassword;
        user.resetToken = undefined;
        user.resetTokenExpiry = undefined;

        await user.save();
        res.json({ message: 'Password reset successful' });
    } catch (error) {
        console.log(error);
        next({
            message: [{
                msg: 'Internal Server error',
                path: 'error'
            }]
        });
    }
};



// Logout user
const logout = (req, res, next) => {
    res.clearCookie('ref', { httpOnly: true, secure: true, sameSite: 'None', path: '/' });
    return res.json({
        message: 'Logged out',
    });
};



// Refresh token
const refreshToken = async (req, res, next) => {
    const token = req.cookies.ref;

    if (!token) {
        return res.status(200).json({
            accesstoken: '',
        });
    }

    let payload;
    try {
        payload = jwt.verify(token, process.env.RTS);
    } catch (error) {
        return res.status(400).json({ accesstoken: '' });
    }

    const user = await User.findOne({ _id: payload.id });
    if (!user || user.refreshtoken !== token) {
        return res.status(400).json({
            accesstoken: '',
        });
    }

    const accessToken = createAccessToken(user.id);
    const refreshToken = createRefreshToken(user.id);

    try {
        await user.updateOne({ refreshtoken: refreshToken });
    } catch (error) {
        return next({ message: 'Internal server error' });
    }

    sendRefreshToken(res, refreshToken);
    const { password, refreshtoken: reftoken, isAdmin, __v, ...others } = user._doc;
    sendAccessToken(res, accessToken, others);
};



const googleRegister = async (req, res, next) => {
    const { code } = req.body;

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REDIRECT_URI || !code) {
        return next({ message: 'Server misconfiguration' });
    }

    try {
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token } = tokenResponse.data;
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const { name, email } = userInfoResponse.data;

        if (!name || !email) {
            return next({ message: 'Failed to retrieve essential user information' });
        }

        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ name, email, signupMethod: 'google' });
            await user.save();
        }


        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });


        sendRefreshToken(res, refreshToken);
        const { __v, refreshToken: userRefreshToken, ...others } = user._doc;
        console.log(userRefreshToken)
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.log(error)
        next({ message: 'Internal Server Error' });
    }
};



const googleLogin = async (req, res, next) => {
    const { code } = req.body;

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REDIRECT_URI || !code) {
        return next({ message: 'Server misconfiguration' });
    }

    try {
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: process.env.GOOGLE_REDIRECT_URI,
            grant_type: 'authorization_code',
        });

        const { access_token } = tokenResponse.data;
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const { name, email } = userInfoResponse.data;

        if (!name || !email) {
            return next({ message: 'Failed to retrieve essential user information' });
        }

        let user = await User.findOne({ email });

        if (!user) return next({ message: 'Please register to log in' });


        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });


        sendRefreshToken(res, refreshToken);
        const { __v, refreshToken: userRefreshToken, ...others } = user._doc;
        console.log(userRefreshToken)
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.log(error)
        next({ message: 'Internal Server Error' });
    }
};





const facebookAuth = async (req, res, next) => {
    try {
        const { name, email } = req.body

        if (!name || !email) {
            return next({ message: 'Name and email is required' });
        }

        let user = await User.findOne({ email });

        if (!user) {
            user = new User({ name, email });
            await user.save();
        }


        const accessToken = createAccessToken(user.id);
        const refreshToken = createRefreshToken(user.id);

        await user.updateOne({ refreshtoken: refreshToken });


        sendRefreshToken(res, refreshToken);
        const { __v, refreshToken: userRefreshToken, ...others } = user._doc;
        console.log(userRefreshToken)
        sendAccessToken(res, accessToken, others);
    } catch (error) {
        console.error(error);
        next({ message: 'Internal Server Error' });
    }
};

module.exports = {
    login,
    register,
    logout,
    refreshToken,
    googleRegister,
    googleLogin,
    facebookAuth,
    requestPasswordReset,
    resetPassword
};
