import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import StarLogo from '../../assets/star-logo.svg';
import { useAppSelector } from '../../app/hooks';

const sidebarVariants = {
  open: { x: 0 },
  closed: { x: '-100%' },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const {user} = useAppSelector(state=>state.auth)

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
    <div className={`border-b navbar sticky top-0 z-[900] h-[93px] flex items-center transition-colors duration-300 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="w-full flex items-center justify-between md:justify-start gap-[2rem] p-[1rem] max-w-[1300px] mx-auto">
        <NavLink to='/' className='font-[700] flex gap-[.3rem] text-[28px] text-[#009F95]'>
          <span>Subtrately</span>
          <img src={StarLogo} alt="Star Logo" />
        </NavLink>
        <button onClick={toggleMenu} className="md:hidden text-[#009F95]">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className='hidden flex-1 md:flex items-center justify-end lg:gap-[2rem] '>
          <div className='flex items-center gap-[1rem]'>
            {navLinks.map(({ to, text }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `text-[#4B5162] font-[400] cursor-pointer hover:underline duration-300 ${isActive ? 'text-blue-500' : 'text-[#4B5162]'}`
                }
              >
                {text}
              </NavLink>
            ))}
          </div>
          <div className='flex gap-[.2rem] lg:gap-[.5rem] '>
            <NavLink to='signup' className='px-[1rem] border duration-300 text-[#009F95] hover:text-white rounded-md hover:bg-[#007F75] py-[.3rem]'>Sign Up</NavLink>
            <NavLink to='login' className='px-[1rem] border duration-300 text-[#009F95] hover:text-white rounded-md hover:bg-[#007F75] py-[.3rem]'>Login</NavLink>
            
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
          user.accesstoken ?  <NavLink to='dasboard' className='px-[1rem] rounded-md hover:bg-[#003F95] py-[.3rem] bg-[#009F95] text-white mb-2'>Dashboard</NavLink>
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

export default Navbar;
