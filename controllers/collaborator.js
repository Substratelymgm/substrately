const Collaborator = require('../models/Collaborator');

// Controller to create a new collaborator
exports.createCollaborator = async (req, res) => {
  try {
    const { user, role, sections } = req.body;

    const newCollaborator = new Collaborator({
      user,
      role,
      sections
    });

    await newCollaborator.save();

    res.status(201).json(newCollaborator);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get all collaborators
exports.getAllCollaborators = async (req, res) => {
  try {
    const collaborators = await Collaborator.find();
    res.json(collaborators);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get a single collaborator by ID
exports.getCollaboratorById = async (req, res) => {
  const collaboratorId = req.params.collaboratorId;

  try {
    const collaborator = await Collaborator.findById(collaboratorId);
    if (!collaborator) {
      return res.status(404).json({ message: 'Collaborator not found' });
    }
    res.json(collaborator);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to update a collaborator by ID
exports.updateCollaboratorById = async (req, res) => {
  const collaboratorId = req.params.collaboratorId;
  const updates = req.body;

  try {
    const updatedCollaborator = await Collaborator.findByIdAndUpdate(collaboratorId, updates, { new: true });
    if (!updatedCollaborator) {
      return res.status(404).json({ message: 'Collaborator not found' });
    }
    res.json(updatedCollaborator);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to delete a collaborator by ID
exports.deleteCollaboratorById = async (req, res) => {
  const collaboratorId = req.params.collaboratorId;

  try {
    const deletedCollaborator = await Collaborator.findByIdAndDelete(collaboratorId);
    if (!deletedCollaborator) {
      return res.status(404).json({ message: 'Collaborator not found' });
    }
    res.json({ message: 'Collaborator deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
