import React, { useState } from 'react';
import StarLogo from '../../assets/star-logo.svg'
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    emailAddress: '',
    companySize: '',
    fullName: '',
    lastName: '',
    phoneNumber: '',
    createPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50  px-4 sm:px-6 lg:px-8">
      <div className='h-[4rem] flex items-center w-full '>
        <Link to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
          <span>Subtrately</span>
          <img src={StarLogo} alt="" />
        </Link>
      </div>
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 font-[600] text-center text-2xl sm:text-3xl font-extrabold text-gray-900">Sign up to Substrately</h2>
          <h3 className='text-center mt-[1rem] text-[#5D6B78]'>
            Let us know you better
          </h3>
        </div>
        <form className="mt-8 flex flex-col gap-[1rem]" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />

          <div className=" flex flex-col gap-[1rem] shadow-sm ">
            <div>
              <label htmlFor="companyName" className="sr-only">Company Name</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                autoComplete="companyName"
                required
                className="w-full bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="emailAddress" className="sr-only">Email address</label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                required
                className="w-full bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                placeholder="Email address"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="companySize" className="sr-only">Company Size</label>
              <input
                id="companySize"
                name="companySize"
                type="text"
                autoComplete="companySize"
                required
                className="w-full bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                placeholder="Company Size"
                value={formData.companySize}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="fullName" className="sr-only">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="fullName"
                required
                className="w-full bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="sr-only">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="lastName"
                required
                className="w-full bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="sr-only">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                autoComplete="tel"
                required
                className="w-full bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                placeholder="Phone Number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="createPassword" className="sr-only">Password</label>
              <input
                id="createPassword"
                name="createPassword"
                type="password"
                autoComplete="current-password"
                required
                className="w-full bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                placeholder="Password"
                value={formData.createPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full  p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
            >
              Sign Up
            </button>
          </div>

          <div className="text-center mt-[1rem] mb-[4rem] text-sm ">
            <p>Already have a account? <Link to="/login" className="font-medium text-[#009F95] text-indigo-600 hover:text-indigo-500">Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
