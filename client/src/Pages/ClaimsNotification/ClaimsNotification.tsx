import  { useState } from 'react';

const ClaimsNotification = () => {
  const [notifications, _] = useState([
    { id: 1, message: 'Claim incident reported in Field A', date: '2023-05-20' },
    { id: 2, message: 'Claim incident reported in Field B', date: '2023-05-21' }
  ]);


  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Claims Notification</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className="mb-2 p-2 border rounded">
            <p>{notification.message}</p>
            <span className="text-gray-500 text-sm">{notification.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimsNotification;
