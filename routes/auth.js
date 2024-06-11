const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

const {
    login, register, logout, refreshToken, googleRegister, googleLogin, facebookAuth,
    requestPasswordReset, resetPassword
} = require('../controllers/auth');

// Validators
const userValidators = [
    body('firstName').trim().isLength({ min: 1 }).withMessage('First name is required'),
    body('lastName').trim().isLength({ min: 1 }).withMessage('Last name is required'),
    body('phoneNumber').matches(/^[0-9\s-()]{7,15}$/).withMessage('Invalid phone number format'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2})(?=\S+$).{8,100}$/).withMessage('Min of 8 characters, 1 uppercase, 1 lowercase, and 2 digits and no spaces'),
    body('confirmPassword').custom((value, { req }) => value === req.body.password).withMessage('Passwords do not match'),
];

const loginValidators = [
    body('email').isEmail().withMessage('Invalid email address').normalizeEmail(),
    body('password').isLength({ min: 1 }).withMessage('Password is required').escape()
];

const requestPasswordResetValidators = [
    body('email').isEmail().withMessage('Invalid email address').normalizeEmail()
];


const resetPasswordValidators = [
    body('email').isEmail().withMessage('Internal server error'),
    body('token').isLength({ min: 5, max: 5 }).withMessage('Invalid token link'),
    body('newPassword')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2})(?=\S+$).{8,100}$/).withMessage('Min of 8 characters, 1 uppercase, 1 lowercase, and 2 digits and no spaces'),
    body('confirmPassword').custom((value, { req }) => value === req.body.newPassword).withMessage('Passwords do not match'),
];

// Routes
router.route('/google-register').post(googleRegister);
router.route('/google-login').post(googleLogin);
router.route('/facebook-auth').post(facebookAuth);

router.route('/register').post(userValidators, (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return next({ message: errors.array() });
    }
    next();
}, register);

router.route('/login').post(loginValidators, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({ message: errors.array() });
    }
    next();
}, login);

router.route('/logout').post(logout);
router.route('/refresh_token').post(refreshToken);

router.post('/request-password-reset', requestPasswordResetValidators, (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next({ message: errors.array() });
    }
    next();
}, requestPasswordReset);


router.post('/reset-password', resetPasswordValidators, (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return next({ message: errors.array() });
    }
    next();
}, resetPassword);

module.exports = router;
