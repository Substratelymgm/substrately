import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { register } from '../../../app/store/auth/thunk';
import { resetRegisterError } from '../../../app/store/auth/slice';
import { ApiStatus } from '../../../utils/types';
import PhoneNumberInput from '../../../components/common/PhoneNumberInput/PhoneNumberInput';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store/store';


interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  country: string;
  city: string;
  role: string;
}

const Profile: React.FC = () => {
  const [detectedCountryCode, setDetectedCountryCode] = useState('Select country code');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phoneNumber: detectedCountryCode,
    country: '',
    city: '',
    role: '',
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
    <div className="px-2">
      <div className="w-full">
      <h1 className='font-[500] text-[20px] font-[600]'>Edit Profile</h1>
        <form onSubmit={handleRegister} className=" w-full mt-4 bg-white  rounded-lg">
          <div className="grid sm:grid-cols-2 gap-[1rem]">
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
                className="w-full outline-none   p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 duration-300 focus:ring-opacity-50"
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
                className="w-full p-2 outline-none   p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.lastName && errorObject.lastName}</div>
            </div>
            <div>
              <PhoneNumberInput value={formData.phoneNumber} handleChange={handlePhoneInputChange} />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.phoneNumber && errorObject.phoneNumber}</div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Enter your country"
                className="w-full p-2 outline-none  p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.country && errorObject.country}</div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="w-full p-2 outline-none   p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.city && errorObject.city}</div>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Enter your role"
                className="w-full p-2 outline-none   p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.role && errorObject.role}</div>
            </div>
          </div>

          <div className='mt-6 w-full flex items-center justify-center'>
            <button
              type="submit"
              className="w-full max-w-[10rem] p-2 bg-[#009F95] h-[40px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
            >
              {getRegisterStatus === ApiStatus.loading ? <ClipLoader size={15} /> : 'Save'}
            </button>
          </div>
        </form>
        <div className='h-[3rem] w-full flex items-center justify-center text-red-500'>
          {errorObject?.error && errorObject?.error}
        </div>
                
      </div>
    </div>
  );
};

export default Profile;
