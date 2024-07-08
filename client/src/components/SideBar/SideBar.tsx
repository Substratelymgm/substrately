// SideBar.js
import { useState } from 'react';
import Logo from '../../assets/Logo.png'
import RightArrow from '../../assets/icons/rightArrow.svg'
import { BiTachometer } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";


const navLinks = [
    {
        name: "Dashboard",
        icon: GoHome,
        path: "/dashboard"
    },
    {
        name: "Report",
        icon: BiTachometer,
        path: "/reports"
    },
    {
        name: "Clients",
        icon: LuUsers,
        path: "/clients"
    },
    {
        name: "My Team",
        icon: ClipboardList,
        path: "/my-team"
    },
    {
        name: "Message",
        icon: BiMessageRounded,
        path: "/message"
    },
    {
        name: "Settings",
        icon: IoSettingsOutline,
        path: "/settings"
    }
];


const SideBar = ({ isVisible }:{isVisible:boolean}) => {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className={`fixed top-0 z-[99999]  sm:hidden left-0 h-full bg-gray-700 text-white transition-transform duration-300 ${isVisible ? 'translate-x-0' : '-translate-x-full'} ${isExpanded ? 'w-64' : 'w-20'} flex flex-col items-center py-6`}>
            <div className="flex items-center justify-center space-x-3 mb-8">
                <img src={Logo} alt="Logo" className="h-8 w-8" />
                {isExpanded && <span className="text-lg font-semibold">Money Wind</span>}
            </div>
            <div
                className="w-8 h-8 bg-pink-400 flex items-center justify-center absolute right-0 top-16 transform translate-x-1/2 rounded-full cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <img src={RightArrow} alt="Toggle" className={`w-[7px] transform transition-transform ${isExpanded ? '' : 'rotate-180'}`} />
            </div>
            <div className="mt-4 flex flex-col space-y-4 w-full">
                {navLinks.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveNavIndex(index)}
                        className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors duration-300 ${activeNavIndex === index ? 'bg-pink-600' : 'hover:bg-gray-600'} ${isExpanded ? 'justify-start' : 'justify-center'}`}
                    >
                        <item.icon className="h-6 w-6" />
                        {isExpanded && <span>{item.name}</span>}
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default SideBar;
