const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSpaceSchema = new Schema({
  name: { type: String, required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  notes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Note' }],
  articles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Article' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('WorkSpace', WorkSpaceSchema);
