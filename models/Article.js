const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
    title: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    avatar: { type: String },
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }],
    collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Collaborator' }],
    tags: [{ type: String }],
    isSingle: { type: Boolean, required: true },
  }, { timestamps: true });
  
module.exports = mongoose.model('Article', ArticleSchema);
