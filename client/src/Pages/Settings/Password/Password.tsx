import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import { ClipLoader } from 'react-spinners';
// import { changePassword } from '../../../app/store/auth/thunk';
// import { resetPasswordError } from '../../../app/store/auth/slice';
// import { ApiStatus } from '../../../utils/types';
// import { useAppDispatch, useAppSelector } from '../../../app/hooks';
// import { RootState } from '../../../app/store/store';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface PasswordFormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const Password: React.FC = () => {
  const [formData, setFormData] = useState<PasswordFormData>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // const navigate = useNavigate();
  // const { passwordError, getPasswordStatus } = useAppSelector((state: RootState) => state.auth);
  // const dispatch = useAppDispatch();

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    // dispatch(resetPasswordError());
    // dispatch(changePassword({
    //   ...formData,
    // }))
    //   .then((response) => {
    //     if (response.meta.requestStatus === 'fulfilled') {
    //       navigate('/');
    //     }
    //   });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // dispatch(resetPasswordError());
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const errorObject: Record<string, string> = true && ['hel']?.reduce((acc: any, error: any) => {
    acc[error.path] = error.msg;
    return acc;
  }, {});

  return (
    <div className="px-2">
      <div className="w-full">
         <h1 className='font-[500] text-[20px] font-[600]'>Password</h1>
        <form onSubmit={handlePasswordChange} className="w-full mt-4 bg-white rounded-lg">
          <div className="grid  sm:grid-cols-2 md:gid-cols-3 gap-[1rem]">
            <div className="relative">
              <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">
                Old Password
              </label>
              <div className='relative'>
              <input
                type={showOldPassword ? "text" : "password"}
                id="oldPassword"
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Enter your old password"
                className="w-full p-2 outline-none p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="absolute h-full inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleOldPasswordVisibility}>
                {showOldPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
              </div>
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.oldPassword && errorObject.oldPassword}</div>
            </div>

            <div className="relative">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <div className='relative'>
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Enter your new password"
                className="w-full p-2 outline-none p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
              <div className="absolute h-full inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleNewPasswordVisibility}>
                {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
              </div>
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.newPassword && errorObject.newPassword}</div>
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
                placeholder="Confirm your new password"
                className="w-full p-2 outline-none p-2 py-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
              />
                <div className="absolute h-full inset-y-0 right-0 pr-3 flex items-center cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
             </div>
              <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.confirmPassword && errorObject.confirmPassword}</div>
            </div>
          </div>

          <div className='mt-6 w-full flex items-center justify-start'>
            <button
              type="submit"
              className="w-full max-w-[10rem] p-2 bg-[#009F95] h-[40px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
            >
               Reset
              {/* {getPasswordStatus === ApiStatus.loading ? <ClipLoader size={15} /> : 'Save'} */}
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

export default Password;
