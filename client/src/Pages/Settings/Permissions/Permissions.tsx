import React from 'react';

const permissions = [
  { id: '1', name: 'Read' },
  { id: '2', name: 'Write' },
  { id: '3', name: 'Execute' },
  { id: '4', name: 'Delete' },
  { id: '5', name: 'Admin' },
];

const Permissions: React.FC = () => {
  return (
    <div className="px-2">
      <div className="w-full">
      <h1 className='font-[500] text-[20px] font-[600]'>Permissions</h1>
        <div className="w-full mt-4 bg-white flex flex-wrap gap-4 items-center">
          {permissions.map((permission) => (
            <div
              key={permission.id}
              className="px-4 py-2 text-white bg-[#3B8F85] border border-gray-300 rounded-md  text-center"
            >
              {permission.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Permissions;
