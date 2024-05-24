const mongoose = require('mongoose');

const LinkNotificationSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, required: true },
    itemType: { type: String },
    itemName: { type: String },
    itemId: { type: mongoose.Schema.Types.ObjectId, required: true }, 
    workSpace: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkSpace', required: true },
    read: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('LinkNotification', LinkNotificationSchema);
