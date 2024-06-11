import { Link } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg';
import React from 'react';


const SuccessPage = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="h-20 flex items-center justify-between w-full">
        <Link to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
          <span>Subtrately</span>
          <img src={StarLogo} alt="Star Logo" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default SuccessPage;
