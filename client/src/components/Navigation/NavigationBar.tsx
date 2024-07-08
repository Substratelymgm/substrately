import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BiTachometer } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { BiMessageRounded } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import Team from '../../assets/team.svg'
import { logout } from '../../app/store/auth/thunk';
import { useAppDispatch } from '../../app/hooks';

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
        icon: Team,
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


const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" }
};

const NavigationBar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const dispath = useAppDispatch()

    const handlelogout = () => {
        dispath(logout())
    }

    return (
        <div className={`hidden border border-gray-200  rounded-[20px] bg-white  sm:flex  bg-white items flex-none hover:overflow-y-auto  custom-scrollbar relative  flex-col transition-all duration-300`}>
            <motion.div
                className={isExpanded ? 'min-h-[calc(100vh-7rem)] p-2 min-w-[max-content] lg:min-w-[217px]' : 'min-h-[calc(100vh-7rem)] p-2 min-w-[17rem]'}
                key={`first-div-${1}`}
                animate={isExpanded ? 'expanded' : 'nonExpanded'}
                variants={variants}
            >
                <div className="w-full flex  flex-col h-full">
                    <div className="mt-9 flex flex-1 flex-col gap-[1rem]">
                        {navLinks.map((item, index) => (
                            <NavLink
                                key={index}
                                to={item.path}
                                className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors hover:text-white duration-300 hover:bg-gray-600 ${isExpanded ? 'justify-start' : 'justify-center'}`}
                            >
                                {
                                    item.name === 'My Team' ?
                                        <img src={item.icon} alt="" /> :
                                        <item.icon />
                                }
                                <span className="hidden lg:block">{item.name}</span>
                            </NavLink>
                        ))}
                    </div>

                    <div onClick={handlelogout} className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors hover:text-white duration-300 hover:bg-gray-600 ${isExpanded ? 'justify-start' : 'justify-center'}`}>
                        <MdLogout /><span className="hidden lg:block">Logout</span>
                    </div>

                </div>

            </motion.div>
        </div>
    );
};

export default NavigationBar;
