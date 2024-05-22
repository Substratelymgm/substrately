import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
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
        <div className="min-h-screen  bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="h-20 flex items-center w-full">
                <Link to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
                    <span>Subtrately</span>
                    <img src={StarLogo} alt="" />
                </Link>
            </div>

            <div className="max-w-md mt-[4rem] flex flex-col mx-auto items-center w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-3xl font-bold text-gray-900 text-center">Sign in to your account</h2>
                    <div className='text-center mt-[1rem]'>
                        Welcome,enter your details
                    </div>
                </div>
                <form className="mt-6 w-full space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md w-full  flex flex-col gap-[1rem] shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none h-[60px] bg-gray-200 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div >
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none h-[60px] bg-gray-200 rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="flex w-full text-center items-center justify-center">
                        <div className="text-sm">
                            <Link to="#" className="font-medium text-center text-[#384048]  hover:text-indigo-500">Forgot your password?</Link>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full  p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className="text-center text-sm mt-4">
                    <p>Don't have an account? <Link to="/signup" className="font-medium text-[#009F95] text-indigo-600 hover:text-indigo-500">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
