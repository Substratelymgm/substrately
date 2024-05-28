import React, { useState, useEffect } from 'react';
import StarLogo from '../../assets/star-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { register } from '../../app/store/auth/thunk';
import { resetRegisterError } from '../../app/store/auth/slice';
import { ApiStatus } from '../../utils/types';
import { RegisterForm } from '../../utils/types';
import PhoneNumberInput from '../../components/common/PhoneNumberInput/PhoneNumberInput';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store/store';

const SignUp: React.FC = () => {
  const [detectedCountryCode, setDetectedCountryCode] = useState('Select country code');
  const [formData, setFormData] = useState<RegisterForm>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: detectedCountryCode,
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const { registerError, getRegisterStatus } = useAppSelector((state: RootState) => state.auth);
  const dispatch = useAppDispatch();

  const fetchCountryCode = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const countryCode = data.country_calling_code;
      setDetectedCountryCode(`+${countryCode}`);
    } catch (error) {
      console.error('Error fetching country code:', error);
    }
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);

  useEffect(() => {
    setFormData(prevState => ({
      ...prevState,
      phoneNumber: detectedCountryCode
    }));
  }, [detectedCountryCode]);



  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(resetRegisterError());
    dispatch(register({
      ...formData,
    }))
      .then((response) => {
        if (response.meta.requestStatus === 'fulfilled') {
          navigate('/');
        }
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(resetRegisterError());
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhoneInputChange = (value: string) => {
    setFormData({
      ...formData,
      phoneNumber: value
    });
  }

  const errorObject: Record<string, string> = registerError && [...registerError]?.reduce((acc: any, error: any) => {
    acc[error.path] = error.msg;
    return acc;
  }, {});

  return (
    <div className="min-h-screen flex flex-col pb-[2rem] items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className='h-[4rem] flex items-center w-full '>
        <Link to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
          <span>Subtrately</span>
          <img src={StarLogo} alt="" />
        </Link>
      </div>
      <div className="max-w-md w-full ">
        <div>
          <h2 className="mt-6 font-[600] text-center text-2xl sm:text-3xl font-extrabold text-gray-900">Sign up to Substrately</h2>
          <h3 className='text-center mt-[1rem] text-[#5D6B78]'>
            Let us know you better
          </h3>
        </div>
        <form onSubmit={handleRegister} className="max-w-md w-full mx-auto mt-4  bg-white  rounded-lg">
          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block  text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full outline-none bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 duration-300 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.firstName && errorObject.firstName}</div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full p-2 outline-none bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.lastName && errorObject.lastName}</div>
            </div>
            <div>
              <PhoneNumberInput value={formData.phoneNumber} handleChange={handlePhoneInputChange} />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.phoneNumber && errorObject.phoneNumber}</div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-2 outline-none bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.email && errorObject.email}</div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-2 outline-none bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.password && errorObject.password}</div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full p-2 outline-none bg-gray-100  p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.confirmPassword && errorObject.confirmPassword}</div>
            </div>
          </div>

          <div className='mt-6 w-full flex items-center justify-center'>
            <button
              type="submit"
              className="w-full  p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
            >
              {getRegisterStatus === ApiStatus.loading ? <ClipLoader size={15} /> : 'Sign up'}
            </button>
          </div>
        </form>
        <div className='h-[3rem] w-full flex items-center justify-center text-red-500'>
                        {errorObject?.error && errorObject?.error}
                    </div>
                
                <div className="text-center text-sm ">
                    <p>Don't have an account? <Link to="/login" className="font-medium text-[#009F95] text-indigo-600 hover:text-indigo-500">login</Link></p>
                </div>
      </div>
    </div>
  );
};

export default SignUp;
