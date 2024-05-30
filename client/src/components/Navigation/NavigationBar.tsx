import { useState } from 'react';
import { LayoutDashboard, MapPin, DollarSign, Calendar, ClipboardList, BarChart } from 'lucide-react';
import RightArrow from '../../assets/icons/rightArrow.svg';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    {
        name: "Farm Data Collection",
        icon: LayoutDashboard,
        path: "/farm-data-collection",
        subLinks: [
            { name: "Registration", path: "/farm-data-collection/registration" },
            { name: "Data Upload", path: "/farm-data-collection/data-upload" },
            { name: "Farmer Clusterization", path: "/farm-data-collection/farmer-clusterization" },
            { name: "Data Collection Tools", path: "/farm-data-collection/data-collection-tools" }
        ]
    },
    {
        name: "Satellite Data & Pricing",
        icon: MapPin,
        path: "/satellite-data-access",
        subLinks: [
            { name: "Pricing Engine", path: "/satellite-data-access/pricing-engine" },
            { name: "Forecast Widget", path: "/satellite-data-access/forecast-widget" }
        ]
    },
    {
        name: "Contract Monitoring",
        icon: Calendar,
        path: "/contract-monitoring",
        subLinks: [
            { name: "WII Review Reports", path: "/contract-monitoring/wii-review-reports" },
            { name: "Crop Loss Assessment", path: "/contract-monitoring/crop-loss-assessment" }
        ]
    },
    {
        name: "Claims Management",
        icon: ClipboardList,
        path: "/claims-management",
        subLinks: [
            { name: "Crop Inspection Reports", path: "/claims-management/crop-inspection-reports" },
            { name: "Claims Processing Tracker", path: "/claims-management/claims-processing-tracker" }
        ]
    },
    {
        name: "Business Analytics & Data Security",
        icon: BarChart,
        path: "/business-analytics",
        subLinks: [
            { name: "Data Visualization Tools", path: "/business-analytics/data-visualization-tools" },
            { name: "Data Storage Module", path: "/business-analytics/data-storage-module" }
        ]
    },
    {
        name: "Royal Exchange Pricing Engine",
        icon: DollarSign,
        path: "/pricing-engine",
        subLinks: [
            { name: "GPS Coordinates Upload", path: "/pricing-engine/gps-coordinates-upload" },
            { name: "Cluster Association", path: "/pricing-engine/cluster-association" },
            { name: "Cluster Selection", path: "/pricing-engine/cluster-selection" },
            { name: "Parameter Adjustment", path: "/pricing-engine/parameter-adjustment" },
            { name: "Parameter Saving", path: "/pricing-engine/parameter-saving" }
        ]
    }
];

const variants = {
    expanded: { width: "20%" },
    nonExpanded: { width: "5%" }
};

const subLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
};


const NavigationBar = () => {
    const [activeNavIndex, setActiveNavIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(true);

    return <div 
    className={`py-12 hidden sm:flex items flex-none hover:overflow-y-auto border-r custom-scrollbar relative sticky  top-0  flex-col border-r-1 h-screen transition-all duration-300 ${isExpanded ? "w-[20rem] px-2" : "w-[5rem] px-2"}`}>
              <motion.div className={isExpanded ? 'min-w-[17rem]' : 'min-w-[4rem]'}
              key={`first-div-${1}`}
              animate={isExpanded ? 'expanded' : 'nonExpanded'}
              variants={variants}
           
        >
             <div className='flex items-center justify-center w-full bg-red-500'>
             <div onClick={() => setIsExpanded(!isExpanded)} className={` w-5 hidden sm:flex cursor-pointer h-5 bg-[#FF8CBC] absolute flex items-center justify-center  rounded-full`}>
                <img src={RightArrow} alt="Toggle" className={`w-[7px] transform transition-transform  ${isExpanded ? '' : 'rotate-180'}`} />
            </div>
             </div>

            <div className="logo-div flex items-center mt-[2rem] justify-center space-x-3">
                <span className='text-4xl font-[700]'>S</span>
                <span className={isExpanded ? "block" : 'hidden'}>Subtrately</span>
            </div>
            <div className="mt-9 flex flex-col gap-[1rem]">
                {navLinks.map((item, index) => (
                    <div key={index}>
                        <NavLink
                            to={item.path}
                            onClick={() => setActiveNavIndex(index)}
                            className={`flex items-center space-x-3 p-2 rounded-md cursor-pointer transition-colors hover:text-white duration-300 ${activeNavIndex === index ? 'bg-pink-600 text-white' : 'hover:bg-gray-600 '} ${isExpanded ? 'justify-start' : 'justify-center'}`}
                        >
                            <item.icon />
                            <span className={isExpanded ? "block" : 'hidden'}>{item.name}</span>
                        </NavLink>
                        {activeNavIndex === index && isExpanded && item.subLinks && (
                            <AnimatePresence>
                                <motion.div
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={subLinkVariants}
                                    className="ml-6 mt-2 flex  flex-col gap-[0.5rem]"
                                >
                                    {item.subLinks.map((subItem, subIndex) => (
                                        <NavLink
                                            key={subIndex}
                                            to={subItem.path}
                                            className="flex items-center hover:text-white space-x-3 p-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-600"
                                        >
                                            <span>{subItem.name}</span>
                                        </NavLink>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        )}
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
};

export default NavigationBar;

