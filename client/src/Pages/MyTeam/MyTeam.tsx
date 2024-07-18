import Client from '../../assets/client.svg'; 
import SafeGuard from '../../assets/safeguard.svg'
import Modal from '../../components/Modal/Modal';
import { Link } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';

import { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    businessServices: string;
}

const MyTeam = () => {
    const [addTeamMateModal,setAddTeamMateModal] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        businessServices: '',
    });
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreeTerms(e.target.checked);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        toggleModal()
        if (agreeTerms) {
            console.log('Form submitted:', formData);
        } else {
            alert('You must agree to the terms of service and privacy policy.');
        }
    }

    const toggleModal = () =>setAddTeamMateModal(!addTeamMateModal)

    const firstNames = [
        'John', 'Emma', 'Michael', 'Sophia', 'William', 'Olivia', 'James', 'Ava', 'Benjamin', 'Isabella',
        'Jacob', 'Mia', 'Alexander', 'Charlotte', 'Ethan', 'Amelia', 'Daniel', 'Evelyn', 'Matthew', 'Abigail',
        'Henry', 'Harper', 'David', 'Emily', 'Joseph', 'Elizabeth', 'Samuel', 'Ella', 'Gabriel', 'Scarlett',
        'Andrew', 'Grace', 'Logan', 'Chloe', 'Anthony', 'Victoria', 'Jackson', 'Madison', 'Luke', 'Lily',
        'Christopher', 'Avery', 'Joshua', 'Sofia', 'Dylan', 'Eleanor', 'Nathan', 'Hannah', 'Ryan', 'Addison',
        'Isaac', 'Natalie', 'Carter', 'Lillian', 'Caleb', 'Layla', 'Thomas', 'Brooklyn', 'Christian', 'Zoe',
        'Hunter', 'Penelope', 'Jonathan', 'Audrey', 'Liam', 'Leah', 'Owen', 'Claire', 'Elijah', 'Stella',
        'Julian', 'Hazel', 'Connor', 'Violet', 'Aaron', 'Lucy', 'Brayden', 'Anna', 'Nicholas', 'Samantha'
    ];

    const lastNames = [
        'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
        'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
        'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
        'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson', 'Carter',
        'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins',
        'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey',
        'Rivera', 'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez',
        'James', 'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross'
    ];

    // Generate an array of 80 clients with realistic first and last names
    const myClients = Array.from({ length: 80 }, (_, index) => ({
        id: `${index + 1}`,
        avatar: Client,
        firstName: firstNames[index % firstNames.length],
        lastName: lastNames[index % lastNames.length]
    }));

    const handleAddTeamMate = () => {
        toggleModal()
    }



    return (
        <div>
             <Modal isOpen={addTeamMateModal} onClose={toggleModal}>
                <div className='w-full z-[900]  text-black  items-center justify-center rounded-md overflow-hidden bg-white max-w-[30rem]'>
                <div className="w-full p-2 h-[4rem] border-b flex items-center justify-between">
                        <span className='text-[13px] font-[600]'>Add Teammate</span>
                        <LiaTimesSolid onClick={toggleModal} className='cursor-pointer' />
                    </div>
                    <form className='relative w-full grid gap-4 md:grid-cols-2 p-4' onSubmit={handleSubmit}>
                        <div className='col-span-2 md:col-span-1'>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='First Name'
                                type="text"
                                id='firstName'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2 md:col-span-1'>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Last Name'
                                type="text"
                                id='lastName'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2'>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Enter Business Email'
                                type="email"
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2 md:col-span-1'>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='First Name'
                                type="text"
                                id='firstName'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2 md:col-span-1'>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Last Name'
                                type="text"
                                id='lastName'
                                name='lastName'
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2 md:col-span-1'>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Number of Employees'
                                type="text"
                                id='contact'
                                name='contact'
                                value={formData.contact}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2 md:col-span-1'>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Business Services'
                                type="text"
                                id='businessServices'
                                name='businessServices'
                                value={formData.businessServices}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2 flex items-center justify-left'>
                            <button
                                className='w-full  p-2 bg-[#009F95] h-[45px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300'
                                type='submit'
                            >
                            
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
            
            <div className="flex p-[1rem] border bg-white h-[83px] rounded-[16px] items-center justify-between">
                <span className='text-[22px] font-[500]'>My Team</span>
                <span onClick={handleAddTeamMate} className='bg-[#3B8F85] flex items-center p-[.4rem] text-white gap-[1rem] duration-300 cursor-pointer  rounded-md hover:bg-[#59B6AC]'><img src={SafeGuard} alt="" /> Add Admin</span>
            </div>
            <div className=" mt-[2rem] flex flex-wrap gap-[1rem]">
                {myClients.map(client => (
                    <div key={client.id} className="flex border p-[1rem] cursor-pointer hover:bg-gray-50 hover:scale-[102%] duration-300 rounded-lg bg-white items-center gap-2">
                        <img
                            className="w-10 h-10 rounded-full"
                            src={client.avatar}
                            alt=""
                        />
                        <div>
                            <div className="font-semibold">{`${client.firstName} ${client.lastName}`}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyTeam;
