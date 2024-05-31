const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Replace bcrypt with bcryptjs
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[0-9\s-()]{7,15}$/,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    avatar: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "user",
        enum: ['user', 'admin', 'superadmin'],
    },
    payed: {
        type: Boolean,
        required: false,
        default: false,
    },
    signupMethod: {
        type: String,
        required: true,
        enum: ['traditional', 'google', 'facebook'],
        default: 'traditional',
    },
    refreshtoken: {},
    resetToken: String,
    resetTokenExpiry: Date,
}, {
    timestamps: true,
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

UserSchema.methods.isMatch = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
