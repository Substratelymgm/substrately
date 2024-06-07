import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store/store';
import { resetLoginError, resetResetPasswordError } from '../../app/store/auth/slice';
import { ApiStatus } from '../../utils/types';
import { ClipLoader } from 'react-spinners';
import { requestPasswordReset, verifyResetToken, resetPassword } from '../../app/store/auth/thunk';

const ForgotPassword: React.FC = () => {
  const [step, setStep] = useState<number>(() => {
    const savedStep = localStorage.getItem('resetPasswordStep');
    return savedStep ? parseInt(savedStep, 10) : 1;
  });
  const [formData, setFormData] = useState({
    email: '',
    token: ['', '', '', '', ''],
    newPassword: '',
    confirmPassword: ''
  });

  const [resetSuccess, setResetSuccess] = useState(false);
  const [timer, setTimer] = useState(60); // Timer for resend email
  const [isResendDisabled, setIsResendDisabled] = useState(false); // Disable resend button

  const tokenRefs = useRef<(HTMLInputElement | null)[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { requestPasswordResetError, getRequestPasswordResetStatus, verifyResetTokenError, getVerifyResetTokenStatus, resetPasswordError, getResetPasswordStatus } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    localStorage.setItem('resetPasswordStep', step.toString());
  }, [step]);

  useEffect(() => {
    const handleRouteChange = () => {
      if (location.pathname !== '/forgot-password') {
        setStep(1);
        localStorage.removeItem('resetPasswordStep');
      }
    };

    handleRouteChange();
    return () => {
      handleRouteChange();
    };
  }, [location]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);
            setIsResendDisabled(false);
            return 60;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isResendDisabled]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    dispatch(resetResetPasswordError());
    dispatch(resetLoginError());
  };

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^[0-9]*$/.test(value) && value.length <= 1) {
      const newToken = [...formData.token];
      newToken[index] = value;
      setFormData({
        ...formData,
        token: newToken
      });
      if (value.length === 1 && index < 5) {
        tokenRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleTokenKeyUp = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !formData.token[index] && index > 0) {
      tokenRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(resetResetPasswordError());
    if (step === 1) {
      const resultAction = await dispatch(requestPasswordReset(formData.email));
      if (requestPasswordReset.fulfilled.match(resultAction)) {
        setStep(2);
        setIsResendDisabled(true); // Start timer for resend email
      } else {
        return;
      }
    } else if (step === 2) {
      const token = formData.token.join('');
      const resultAction = await dispatch(verifyResetToken({ email: formData.email, token }));
      if (verifyResetToken.fulfilled.match(resultAction)) {
        setStep(3);
      } else {
        return;
      }
    } else if (step === 3) {
      const resultAction = await dispatch(resetPassword({ email: formData.email, token: formData.token.join(''), newPassword: formData.newPassword, confirmPassword: formData.confirmPassword }));
      if (resetPassword.fulfilled.match(resultAction)) {
        setResetSuccess(true);
      } else {
        return;
      }
    }
  };

  const errorObjects = [requestPasswordResetError, verifyResetTokenError, resetPasswordError];
  const combinedErrors: Record<string, string[]> = {};

  for (const errorObj of errorObjects) {
    if (errorObj) {
      for (const error of errorObj) {
        if (combinedErrors[error.path]) {
          combinedErrors[error.path].push(error.msg);
        } else {
          combinedErrors[error.path] = [error.msg];
        }
      }
    }
  }

  const handleProceedToLogin = () => {
    navigate('/login');
  };

  const handleResendEmail = () => {
    setIsResendDisabled(true); // Start timer again
    setTimer(60); // Reset timer to 60 seconds
    // Add logic to resend the email here
  };

  return (
    resetSuccess ? (
      <div className="m-full min-h-screen flex-col gap-[1rem] flex items-center justify-center">
        <span>Password reset success</span>
        <button
          className="w-full p-2 bg-[#009F95] h-[60px] max-w-[20rem] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
          onClick={handleProceedToLogin}
        >
          Proceed to Login
        </button>
      </div>
    ) : (
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
          ></NavLink>
        </div>

        <div className="max-w-md mt-[4rem] flex flex-col mx-auto items-center w-full">
          <div>
            <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">
              {step === 1 && 'Forgot Password'}
              {step === 2 && 'Verify Code'}
              {step === 3 && 'Reset Password'}
            </h2>
            <div className='text-center mt-[1rem]'>
              {step === 1 && 'Please enter your email to reset your password'}
              {step === 2 && 'Please enter the code sent to your email'}
              {step === 3 && 'Please enter your new password'}
            </div>
          </div>

          <form className="mt-6 w-full space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />

            {step === 1 && (
              <div className="rounded-md w-full flex flex-col gap-[1rem] -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="w-full bg-gray-100 p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="text-red-400 text-[.8rem] font-[600] w-full">
                    {combinedErrors.email && combinedErrors.email.map(error => <div key={error}>{error}</div>)}
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="rounded-md w-full flex flex-col gap-[1rem] -space-y-px">
                <div className="flex gap-2 justify-center">
                  {formData.token.map((char, index) => (
                    <input
                      key={index}
                      ref={el => tokenRefs.current[index] = el}
                      id={`token-${index}`}
                      name={`token-${index}`}
                      type="text"
                      maxLength={1}
                      className="w-10 h-10 bg-gray-100 p-2 border border-gray-300 rounded-md text-center focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                      value={char}
                      onChange={e => handleTokenChange(e, index)}
                      onKeyUp={e => handleTokenKeyUp(e, index)}
                    />
                  ))}
                </div>
                <div className="text-red-400 text-[.8rem] font-[600] w-full">
                  {combinedErrors.token && combinedErrors.token.map(error => <div key={error}>{error}</div>)}
                </div>
              </div>
            )}

            {step === 3 && (
              <>
                <div className="rounded-md w-full flex flex-col gap-[1rem] -space-y-px">
                  <div>
                    <label htmlFor="newPassword" className="sr-only">New Password</label>
                    <input
                      id="newPassword"
                      name="newPassword"
                      type="password"
                      autoComplete="new-password"
                      className="w-full bg-gray-100 p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                      placeholder="New Password"
                      value={formData.newPassword}
                      onChange={handleChange}
                    />
                    <div className="text-red-400 text-[.8rem] font-[600] w-full">
                      {combinedErrors.newPassword && combinedErrors.newPassword.map(error => <div key={error}>{error}</div>)}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="confirm-password"
                      className="w-full bg-gray-100 p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                    <div className="text-red-400 text-[.8rem] font-[600] w-full">
                      {combinedErrors.confirmPassword && combinedErrors.confirmPassword.map(error => <div key={error}>{error}</div>)}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="flex w-full text-center items-center justify-center">
              <div className="text-sm">
                <Link to="#" className="font-medium text-center text-[#384048] hover:text-indigo-500"></Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
              >
                {step === 1 && (getRequestPasswordResetStatus === ApiStatus.loading ? <ClipLoader size={15} /> : 'Send Code')}
                {step === 2 && (getVerifyResetTokenStatus === ApiStatus.loading ? <ClipLoader size={15} /> : 'Verify Code')}
                {step === 3 && (getResetPasswordStatus === ApiStatus.loading ? <ClipLoader size={15} /> : 'Reset Password')}
              </button>
            </div>

            {step === 2 && (
              <div className="text-center flex items-center justify-center gap-[.2rem] text-sm ">
                <p>Haven't gotten the email yet?</p>
                <div onClick={handleResendEmail} className={`font-medium cursor-pointer text-[#009F95] text-indigo-600 hover:text-indigo-500 ${isResendDisabled && 'cursor-not-allowed'}`}>
                  Resend email {isResendDisabled && `(${timer})`}
                </div>
              </div>
            )}
          </form>

          <div className='h-[3rem] w-full flex items-center justify-center text-red-500'>
            {combinedErrors.error && combinedErrors.error.map(error => <div key={error}>{error}</div>)}
          </div>

          <div className='flex w-full gap-[.3rem] items-center'>
            <div className="border flex-1"></div>
            <span className='font-[500]'>Or</span>
            <div className="border flex-1"></div>
          </div>

          <div className="text-center mt-3 text-sm ">
            <Link to="/login" className="font-medium text-[#009F95] text-indigo-600 hover:text-indigo-500">Login</Link>
          </div>
        </div>
      </div>
    )
  );
};

export default ForgotPassword;
