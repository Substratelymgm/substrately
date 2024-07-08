import React, { useState, useRef } from 'react';
import Client from '../../assets/client.svg';
import { Edit2 } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { IoBulbOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { MdLockOutline } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const navLinks = [
    {
        name: "Profile",
        icon: LuUser2,
        path: "profile"
    },
    {
        name: "Permissions",
        icon: IoBulbOutline,
        path: "permissions"
    },
    {
        name: "Password",
        icon: MdLockOutline,
        path: "password"
    }
];

const Settings: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string>(Client);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <div className="flex border p-[1rem] bg-white h-[83px] rounded-[16px] items-center justify-between">
                <span className='text-[22px] font-[500]'>Settings</span>
                <div></div>
            </div>

            <div className='w-full bg-white mt-[1.5rem] rounded-[20px] p-[1rem]'>
                <div className="w-full h-[160px] relative bg-[#3B8F85] rounded-t-lg">
                    <div className="w-[180px] absolute top-[5rem] left-[4rem] transform">
                        <img className='w-full h-full object-cover rounded-full' src={selectedImage} alt="" />
                        <div
                            className="absolute bg-[#3B8F85] text-white hover:bg-[#3B7F85] duration-300 rounded-full w-[2.3rem] h-[2.3rem] flex items-center justify-center bottom-0 right-[1rem] cursor-pointer p-2"
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <Edit2 size={24} />
                        </div>
                        <input 
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                        />
                    </div>
                </div>
                <div className='flex flex-col ml-[16rem] gap-[.5rem] mt-[2rem]'>
                    <span className='font-[600] text-[24px] text-[#2F2F2F]'>MK Abadoo</span>
                    <span>mkabadoo@gmail.com</span>
                </div>
                <div className='flex mt-[3rem] flex-col sm:flex-row'>
                    <div className='flex flex-col border-r px-[1rem] gap-[1rem] w-full max-w-[20rem]'>
                        {navLinks.map((item) => {
                            return (
                                <NavLink
                                    key={item.name}
                                    to={item.path}
                                    className={`flex w-full max-w-[14rem] font-[500] text-[14px] items-center space-x-3 p-2 rounded-md cursor-pointer max-w-[10rem] hover:border-r-4 hover:border-r-[#3B8F85] transition-colors  duration-300 hover:bg-gray-200 hover:text-black`}
                                >
                                    <item.icon />
                                    <span>{item.name}</span>
                                </NavLink>
                            )
                        })}
                    </div>
                    <div className='flex-1 pl-2'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
