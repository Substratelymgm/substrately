const Section = require('../models/Section');

// Controller to create a new section
exports.createSection = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newSection = new Section({
      title,
      content
    });

    await newSection.save();

    res.status(201).json(newSection);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get all sections
exports.getAllSections = async (req, res) => {
  try {
    const sections = await Section.find();
    res.json(sections);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get a single section by ID
exports.getSectionById = async (req, res) => {
  const sectionId = req.params.sectionId;

  try {
    const section = await Section.findById(sectionId);
    if (!section) {
      return res.status(404).json({ message: 'Section not found' });
    }
    res.json(section);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to update a section by ID
exports.updateSectionById = async (req, res) => {
  const sectionId = req.params.sectionId;
  const updates = req.body;

  try {
    const updatedSection = await Section.findByIdAndUpdate(sectionId, updates, { new: true });
    if (!updatedSection) {
      return res.status(404).json({ message: 'Section not found' });
    }
    res.json(updatedSection);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to delete a section by ID
exports.deleteSectionById = async (req, res) => {
  const sectionId = req.params.sectionId;

  try {
    const deletedSection = await Section.findByIdAndDelete(sectionId);
    if (!deletedSection) {
      return res.status(404).json({ message: 'Section not found' });
    }
    res.json({ message: 'Section deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
