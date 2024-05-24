const Article = require('../models/Article');

// Controller to create a new article
exports.createArticle = async (req, res) => {
  try {
    const { title, user, avatar, sections, collaborators, tags, isSingle } = req.body;

    const newArticle = new Article({
      title,
      user,
      avatar,
      sections,
      collaborators,
      tags,
      isSingle
    });

    await newArticle.save();

    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Controller to get all articles
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get a single article by ID
exports.getArticleById = async (req, res) => {
  const articleId = req.params.articleId;

  try {
    const article = await Article.findById(articleId);
    if (!article) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to update an article by ID
exports.updateArticleById = async (req, res) => {
  const articleId = req.params.articleId;
  const updates = req.body;

  try {
    const updatedArticle = await Article.findByIdAndUpdate(articleId, updates, { new: true });
    if (!updatedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Controller to delete an article by ID
exports.deleteArticleById = async (req, res) => {
  const articleId = req.params.articleId;

  try {
    const deletedArticle = await Article.findByIdAndDelete(articleId);
    if (!deletedArticle) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
