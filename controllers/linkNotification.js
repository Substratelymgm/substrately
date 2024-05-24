const LinkNotification = require('../models/LinkNotification');


exports.createLinkNotification = async (req, res) => {
  try {
    const { recipient, type, itemType, itemName, itemId, workSpaceId } = req.body;
    
    const newNotification = new LinkNotification({
      sender:req.user._id,
      recipient,
      type,
      itemType,
      itemName,
      itemId,
      workSpace:workSpaceId
    });

    await newNotification.save();
    
    res.status(201).json(newNotification);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.getLinkNotifications = async (req, res) => {
  const userId = req.params.userId;
  
  try {
    const notifications = await LinkNotification.find({ recipient: userId }).sort({ createdAt: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.markNotificationAsRead = async (req, res) => {
  const notificationId = req.params.notificationId;
  
  try {
    const notification = await LinkNotification.findByIdAndUpdate(notificationId, { read: true });
    res.json({ message: 'Notification marked as read', notification });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
