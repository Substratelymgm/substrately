import React, { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store/store';
import { resetResetPasswordError } from '../../app/store/auth/slice';
import { ApiStatus } from '../../utils/types';
import { ClipLoader } from 'react-spinners';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { resetPassword } from '../../app/store/auth/thunk';
import SuccessPage from '../SuccessPage/SuccessPage';

interface FormData {
  newPassword: string;
  confirmPassword: string;
}

const ResetPassword: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(() => {
    const savedFormData = localStorage.getItem('substrately:resetPasswordFormData');
    return savedFormData ? JSON.parse(savedFormData) : {
      newPassword: '',
      confirmPassword: ''
    };
  });

  const savedEmail = localStorage.getItem('substrately:forgotPasswordEmail');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordReset, setPasswordReset] = useState<boolean>(false);

  const { token } = useParams();
  const dispatch = useAppDispatch();
  const { resetPasswordError, getResetPasswordStatus } = useAppSelector((state: RootState) => state.auth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(resetResetPasswordError());
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData)
    dispatch(resetResetPasswordError());
    if (token && savedEmail) {
      const result = await dispatch(resetPassword({ email: JSON.parse(savedEmail), token, newPassword: formData.newPassword, confirmPassword: formData.confirmPassword }));
      if (result.meta.requestStatus === 'fulfilled') {
        setPasswordReset(true);
      }
    }
  };


  const errorObject: Record<string, string> = resetPasswordError && [...resetPasswordError]?.reduce((acc: any, error: any) => {
    acc[error.path] = error.msg;
    return acc;
  }, {});

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    const { newPassword, confirmPassword } = formData;
    localStorage.setItem('substrately:resetPasswordFormData', JSON.stringify({ newPassword, confirmPassword }));
  }, [formData]);

  if (passwordReset) {
    return (
      <SuccessPage>
        <div className="max-w-md mt-[4rem] flex flex-col mx-auto items-center w-full">
          <div>
            <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">Password Reset!</h2>
            <p className="text-center mt-[1rem]">
              Your password has been successfully reset.
            </p>
          </div>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-[#009F95] hover:text-indigo-500 font-medium transition-all duration-300">
              Back to Login
            </Link>
          </div>
        </div>
      </SuccessPage>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="h-20 flex items-center justify-between w-full">
        <Link to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
          <span>Subtrately</span>
          <img src={StarLogo} alt="Star Logo" />
        </Link>
        <NavLink
          to='/'
          className={({ isActive }) =>
            `text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300 ${isActive ? 'text-blue-500' : 'text-[#4B5162]'}`
          }
        >
        </NavLink>
      </div>

      <div className="max-w-md mt-[4rem] flex flex-col mx-auto items-center w-full">
        <div>
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">Reset Password</h2>
          <div className='text-center mt-[1rem]'>
            Please enter your new password.
          </div>
        </div>
        <form className="mt-6 w-full pb-[4rem] " onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="relative">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                id="new-password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter new password"
                className="w-full p-2 outline-none bg-gray-100 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="absolute h-full inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={togglePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="text-red-400 min-h-[1.5rem] text-[.8rem] font-[600] w-full">{errorObject?.newPassword && errorObject.newPassword}</div>
          </div>
          <div className="relative">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full p-2 outline-none bg-gray-100 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="absolute h-full inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            <div className="text-red-400 min-h-[1.5rem] text-[.8rem] font-[600] w-full">{errorObject?.confirmPassword && errorObject.confirmPassword}</div>
          </div>
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
          >
            {getResetPasswordStatus === ApiStatus.loading ? <ClipLoader size={15} color="#ffffff" /> : 'Reset Password'}
          </button>
          <div className="w-full  mt-2 min-h-[2rem] flex items-center justify-center">

            <p className="mt-2 text-sm text-red-600">{errorObject?.error && errorObject.error}</p>

          </div>
          <div className="mt-2 text-center">
            <p className="text-sm flex flex-col gap-[.7rem] text-gray-600">
              <div className='flex items-center gap-[.5rem]'>
                <span className='border-b w-full'></span>
                <span> Or</span>
                <span className='border-b w-full'></span>
              </div>
              <Link to="/login" className="font-medium  text-[#384048] hover:text-indigo-500">login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
