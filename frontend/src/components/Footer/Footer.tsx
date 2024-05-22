import { Link } from 'react-router-dom';
import StarLogo from '../../assets/star-logo.svg'

const Footbar = () => {
    return (
        <div className='h-auto  w-full py-[1rem] border-t'>
            <div className="w-full min-h-[221px] flex h-full  flex-col md:flex-row gap-[2rem] h-full items-center justify-between p-[1rem] max-w-[1300px] mx-auto">
            <Link to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
                    <span>Subtrately</span>
                    <img src={StarLogo} alt="" />
                </Link>
                <nav className="flex flex-col md:flex-row items-center gap-[1rem]">
                    <Link to='about-us' className='text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300'>About Us</Link>
                    <Link to='solutions' className='text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300'>Solutions</Link>
                    <Link to='contact-us' className='text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300'>Contact Us</Link>
                    <Link to='faqs' className='text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300'>FAQS</Link>
                </nav>
                <div className='flex flex-col md:flex-row items-center gap-[1rem]'>
                    <Link to='signup' className='px-[1rem] duration-300 text-[#009F95] hover:text-white rounded-md hover:bg-[#007F75]'>Sign Up</Link>
                    <Link to='login' className='px-[1rem] duration-300 rounded-md hover:bg-[#007F75] py-[.3rem] bg-[#009F95] text-white'>Login</Link>
                </div>
            </div>
        </div>
    );
}

export default Footbar;
