const WorkSpace = require('../models/WorkSpace');

// Controller to create a new workspace
exports.createWorkSpace = async (req, res) => {
  try {
    const { name } = req.body;
    const newWorkSpace = new WorkSpace({
      name,
    });
    await newWorkSpace.save();
    res.status(201).json(newWorkSpace);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Controller to get all workspaces
exports.getAllWorkSpaces = async (req, res) => {
  try {
    const workSpaces = await WorkSpace.find();
    res.json(workSpaces);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get a single workspace by ID
exports.getWorkSpaceById = async (req, res) => {
  const workSpaceId = req.params.workSpaceId;

  try {
    const workSpace = await WorkSpace.findById(workSpaceId);
    if (!workSpace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }
    res.json(workSpace);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to update a workspace by ID
exports.updateWorkSpaceById = async (req, res) => {
  const workSpaceId = req.params.workSpaceId;
  const updates = req.body;
  try {
    const updatedWorkSpace = await WorkSpace.findByIdAndUpdate(workSpaceId, updates, { new: true });
    if (!updatedWorkSpace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }
    res.json(updatedWorkSpace);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Controller to delete a workspace by ID
exports.deleteWorkSpaceById = async (req, res) => {
  const workSpaceId = req.params.workSpaceId;

  try {
    const deletedWorkSpace = await WorkSpace.findByIdAndDelete(workSpaceId);
    if (!deletedWorkSpace) {
      return res.status(404).json({ message: 'Workspace not found' });
    }
    res.json({ message: 'Workspace deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
