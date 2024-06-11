import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store/store';
import { resetResetPasswordError } from '../../app/store/auth/slice';
import { ApiStatus } from '../../utils/types';
import { ClipLoader } from 'react-spinners';
import { requestPasswordReset } from '../../app/store/auth/thunk';
import { NavLink, Link } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg';
import SuccessPage from '../SuccessPage/SuccessPage';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>(() => {
    const savedEmail = localStorage.getItem('substrately:forgotPasswordEmail');
    return savedEmail ? JSON.parse(savedEmail) : '';
  });
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { requestPasswordResetError, getRequestPasswordResetStatus } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    localStorage.setItem('substrately:forgotPasswordEmail', JSON.stringify(email));
  }, [email]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetResetPasswordError());
    const result = await dispatch(requestPasswordReset(email));
    if (result.meta.requestStatus === 'fulfilled') {
      setEmailSent(true);
    }
  };

  const errorObject: Record<string, string> = requestPasswordResetError && [...requestPasswordResetError]?.reduce((acc: any, error: any) => {
    acc[error.path] = error.msg;
    return acc;
  }, {});

  if (emailSent) {
    return (
      <SuccessPage>
        <div className="max-w-md mt-[4rem] flex flex-col mx-auto items-center w-full">
          <div>
            <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">Email Sent!</h2>
            <p className="text-center mt-[1rem]">
              Please check your inbox for the password reset instructions.
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
        />
      </div>

      <div className="max-w-md mt-[4rem] flex flex-col mx-auto items-center w-full">
        <div>
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">Reset Password</h2>
          <div className='text-center mt-[1rem]'>
            Please enter your email to proceed
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 w-full ">
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 outline-none bg-gray-100 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              placeholder="Email address"
            />
            <div className="text-red-400 min-h-[1.5rem] text-[.8rem] font-[600] w-full">{errorObject?.email && errorObject.email}</div>
          </div>
          <button
            type="submit"
            className="w-full mt-3 p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
            disabled={getRequestPasswordResetStatus === ApiStatus.loading}
          >
            {getRequestPasswordResetStatus === ApiStatus.loading ? (
              <ClipLoader size={15} color="#ffffff" />
            ) : (
              'Reset Password'
            )}
          </button>
          <div className="w-full mt-2 min-h-[2rem] flex items-center justify-center">
            <p className="mt-2 text-sm text-red-600">{errorObject?.error && errorObject.error}</p>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm flex flex-col gap-[.7rem] text-gray-600">
              <div className='flex items-center gap-[.5rem]'>
                <span className='border-b w-full'></span>
                <span> Or</span>
                <span className='border-b w-full'></span>
              </div>
              <Link to="/login" className="font-medium text-[#384048] hover:text-indigo-500">login here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
