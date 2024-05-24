const Note = require('../models/Note');

// Controller to create a new note
exports.createNote = async (req, res) => {
  try {
    const { title, avatar, user, sections, collaborators, tags, isSingle } = req.body;
    
    const newNote = new Note({
      title,
      avatar,
      user,
      sections,
      collaborators,
      tags,
      isSingle
    });

    await newNote.save();
    
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Controller to get a single note by ID
exports.getNoteById = async (req, res) => {
  const noteId = req.params.noteId;
  
  try {
    const note = await Note.findById(noteId);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to update a note by ID
exports.updateNoteById = async (req, res) => {
  const noteId = req.params.noteId;
  const updates = req.body;
  
  try {
    const updatedNote = await Note.findByIdAndUpdate(noteId, updates, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to delete a note by ID
exports.deleteNoteById = async (req, res) => {
  const noteId = req.params.noteId;
  
  try {
    const deletedNote = await Note.findByIdAndDelete(noteId);
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
