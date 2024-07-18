import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import Logo from '../../assets/dash-logo.svg';
import User from '../../assets/client.svg';
import { useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: '-100%' },
};

const DashNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate()

  const { user } = useAppSelector(state => state.auth);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: '/', text: 'Home' },
    { to: '/about-us', text: 'About Us' },
    { to: '/solutions', text: 'Solutions' },
    { to: '/contact-us', text: 'Contact Us' },
    { to: '/faqs', text: 'FAQS' },
  ];

  return (
    <div className={`border-b dash-nav sticky top-0 z-[900] h-[5rem] flex items-center transition-colors duration-300 ${scrolled ? 'bg-[#327971]' : 'bg-[#3B8F85]'}`}>
      <div className="w-full flex items-center justify-between md:justify-start gap-[2rem] p-[1rem] max-w-[1300px] mx-auto">
        <div onClick={()=>navigate("/")} className='flex cursor-pointer items-center gap-[.5rem]'>
          <img src={Logo} alt="Logo" />
          <span className='text-white font-[500] text-[1.4rem]'>Substrately</span>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden flex-1 md:flex items-center justify-end gap-[2rem]">
          <div className="w-full h-[3rem] rounded-md overflow-hidden p-[.5rem] bg-[#327971] flex items-center gap-[.5rem] max-w-[639px]">
            <FaSearch className='text-white' />
            <input className='w-full text-white h-full outline-none bg-[#327971]' type="text" />
          </div>
          <div className="flex items-center gap-[1rem]">
            <HiOutlineEnvelope onClick={()=>navigate('/message')} className='text-white text-lg hover:text-gray-300 cursor-pointer' />
            <div className='w-[2rem] h-[2rem] rounded-full cursor-pointer bg-white flex items-center justify-center duration-300 hover:bg-gray-100'>
              <IoIosNotificationsOutline />
            </div>
            <img className='w-[2.3rem] h-[2.3rem] cursor-pointer rounded-full' src={User} alt="User" />
          </div>
        </div>
      </div>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-20 md:hidden"
      >
        <div className="flex flex-col p-[1rem]">
          <button onClick={toggleMenu} className="self-end mb-4 text-[#009F95]">
            <X size={24} />
          </button>
          <div className="flex items-center gap-[.5rem] mb-4">
            <img src={Logo} alt="Logo" />
            <span className='text-[#3B8F85] font-[500] text-[1.4rem]'>Substrately</span>
          </div>
          <div className="w-full h-[3rem] rounded-md overflow-hidden p-[.5rem] bg-[#327971] flex items-center gap-[.5rem] mb-4">
            <FaSearch className='text-white' />
            <input className='w-full text-white h-full outline-none bg-[#327971]' type="text" />
          </div>
          {navLinks.map(({ to, text }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300 mb-2 ${isActive ? 'text-blue-500' : 'text-[#4B5162]'}`
              }
            >
              {text}
            </NavLink>
          ))}
          {
            user.accesstoken ? <NavLink to='dashboard' className='px-[1rem] rounded-md hover:bg-[#003F95] py-[.3rem] bg-[#009F95] text-white mb-2'>Dashboard</NavLink>
              : <>
                <NavLink to='signup' className='px-[1rem] text-[#009F95] hover:text-white rounded-md hover:bg-[#003F95] py-[.3rem] mb-2'>Sign Up</NavLink>
                <NavLink to='login' className='px-[1rem] rounded-md hover:bg-[#003F95] py-[.3rem] bg-[#009F95] text-white mb-2'>Login</NavLink>
              </>
          }
        </div>
      </motion.div>
    </div>
  );
};

export default DashNav;
