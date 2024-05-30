import { Link } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg';

const Footbar = () => {
    return (
        <div className='h-auto w-full py-[1rem]  bg-[#013737]'>
            <div className="w-full min-h-[221px] flex flex-col md:flex-row gap-[2rem] items-center justify-between p-[1rem] max-w-[1300px] mx-auto text-white">
                <Link to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
                    <span>Subtrately</span>
                    <img src={StarLogo} alt="Star Logo" />
                </Link>
                <nav className="flex flex-col md:flex-row items-center gap-[1rem]">
                    <Link to='about-us' className='text-gray-300 font-[400] cursor-pointer hover:underline hover:text-white duration-300'>About Us</Link>
                    <Link to='solutions' className='text-gray-300 font-[400] cursor-pointer hover:underline hover:text-white duration-300'>Solutions</Link>
                    <Link to='contact-us' className='text-gray-300 font-[400] cursor-pointer hover:underline hover:text-white duration-300'>Contact Us</Link>
                    <Link to='faqs' className='text-gray-300 font-[400] cursor-pointer hover:underline hover:text-white duration-300'>FAQS</Link>
                </nav>
                <div className='flex flex-col md:flex-row items-center gap-[1rem]'>
                    <Link to='signup' className='px-[1rem] py-[.3rem] duration-300 text-[#009F95] hover:text-white rounded-md hover:bg-[#007F75]'>Sign Up</Link>
                    <Link to='login' className='px-[1rem] py-[.3rem] duration-300 rounded-md bg-[#009F95] hover:bg-[#007F75] text-white'>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Footbar;
