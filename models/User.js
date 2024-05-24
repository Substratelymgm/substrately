const mongoose = require('mongoose');
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
    userName: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    countryCode: {
        type: String,
        required: false,
        unique: true,
    },
    role: {
        type: String,
        default: "user",
        enum: ['user', 'admin', 'superadmin'],
    },
    level: {
        type: String,
        enum: ['basic', 'pro', 'business'],
        default: 'basic',
    },
    signupMethod: {
        type: String,
        required: true,
        enum: ['traditional', 'google', 'facebook'],
        default: 'traditional',
    },
    refreshtoken: {},
    canReceiveJoinRequestForWorkSpace: {
        type: Boolean,
        default: false,
    },
    canReceiveLinkRequestForNote: {
        type: Boolean,
        default: false,
    },
    canReceiveLinkRequestForArticle: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
