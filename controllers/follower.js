const Follower = require('../models/Follower');

// Controller to create a new follower
exports.createFollower = async (req, res) => {
  try {
    const { userId, followerId } = req.body;

    const newFollower = new Follower({
      userId,
      followerId
    });

    await newFollower.save();

    res.status(201).json(newFollower);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get all followers for a user
exports.getFollowersByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const followers = await Follower.find({ userId });
    res.json(followers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to get all users followed by a user
exports.getUsersFollowedByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    const usersFollowed = await Follower.find({ followerId: userId });
    res.json(usersFollowed);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to delete a follower
exports.deleteFollower = async (req, res) => {
  const followerId = req.params.followerId;

  try {
    const deletedFollower = await Follower.findByIdAndDelete(followerId);
    if (!deletedFollower) {
      return res.status(404).json({ message: 'Follower not found' });
    }
    res.json({ message: 'Follower deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
