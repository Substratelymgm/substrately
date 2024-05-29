import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store/store';
import { login } from '../../app/store/auth/thunk';
import { resetLoginError } from '../../app/store/auth/slice';
import { ApiStatus } from '../../utils/types';
import { ClipLoader } from 'react-spinners';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { loginError, getLoginStatus } = useAppSelector((state: RootState) => state.auth);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(resetLoginError());
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(resetLoginError());
        dispatch(login(formData))
            .then((response) => {
                if (response.meta.requestStatus === 'fulfilled') {
                    navigate('/');
                }
            });
    };

    const errorObject: Record<string, string> = loginError && [...loginError]?.reduce((acc: any, error: any) => {
        acc[error.path] = error.msg;
        return acc;
    }, {});

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

            <div className="max-w-md mt-[4rem] flex flex-col mx-auto items-center w-full ">
                <div>
                    <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900 text-center">Sign in to your account</h2>
                    <div className='text-center mt-[1rem]'>
                        Welcome, enter your details
                    </div>
                </div>
                <form className="mt-6 w-full space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md w-full flex flex-col gap-[1rem] shadow-sm -space-y-px">
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
                            <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.email && errorObject.email}</div>
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                className="w-full bg-gray-100 p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div className="text-red-400 text-[.8rem] font-[600] w-full">{errorObject?.password && errorObject.password}</div>
                        </div>
                    </div>

                    <div className="flex w-full text-center items-center justify-center">
                        <div className="text-sm">
                            <Link to="/forgot-password" className="font-medium text-center text-[#384048] hover:text-indigo-500">Forgot your password?</Link>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
                        >
                            {getLoginStatus === ApiStatus.loading ? <ClipLoader size={15} /> : 'Login'}
                        </button>
                    </div>
                </form>
                    <div className='h-[3rem] w-full flex items-center justify-center text-red-500'>
                        {errorObject?.error && errorObject?.error}
                    </div>
                
                <div className="text-center text-sm ">
                    <p>Don't have an account? <Link to="/signup" className="font-medium text-[#009F95] text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                </div>

            </div>
        </div>
    );
};

export default Login;
