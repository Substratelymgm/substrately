import Client from '../../assets/client.svg';
import { Users } from 'lucide-react';
import Modal from '../../components/Modal/Modal';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


interface FormData {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email:string;
    country: string;
}

const Clients = () => {
    const [isClientAddModalOpen, setClientAddModalOpen] = useState(false)
    const navigate = useNavigate()

    const [addTeamMateModal,setAddTeamMateModal] = useState(false)

    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        country: '',
    });
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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

    const closeClientAddModal = () => {
        setClientAddModalOpen(false);
    }


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
            <Modal isOpen={isClientAddModalOpen} onClose={closeClientAddModal}>
                <div className='bg-white w-full max-w-[556px] rounded-lg min-h-[290px]'>
                    <div className="w-full p-2 h-[4rem] border-b flex items-center justify-between">
                        <span className='text-[13px] font-[600]'>Download</span>
                        <LiaTimesSolid onClick={closeClientAddModal} className='cursor-pointer' />
                    </div>
                    
                </div>
            </Modal>

            <Modal isOpen={addTeamMateModal} onClose={toggleModal}>
                <div className='w-full z-[900] text-black flex-col items-center justify-center rounded-md overflow-hidden bg-white max-w-[30rem]'>
                    <div className="w-full flex px-4 mt-3 items-center justify-between h-[2.5rem]">
                      <span>Add new client</span>
                      <FaTimes onClick={toggleModal} className='cursor-pointer'/>
                    </div>
                    <form className='relative w-full mt-2 flex flex-col gap-4 p-4' onSubmit={handleSubmit}>
                        <div>
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
                        <div >
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
                        <div>
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Email'
                                type="email"
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div >
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Phone Number'
                                type="tel"
                                id='phoneNumber'
                                name='phoneNumber'
                                value={formData.phoneNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div >
                            <input
                                className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                                placeholder='Country'
                                type="text"
                                id='country'
                                name='country'
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='col-span-2 flex items-center justify-left'>
                            <button
                                className='w-full  p-2 bg-[#009F95] h-[45px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300'
                                type='submit'
                            >
                            
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>

            <div className="flex p-[1rem] bg-white border h-[83px] rounded-[16px] items-center justify-between">
                <span className='text-[22px] font-[500]'>Client</span>
                <button onClick={handleAddTeamMate} className='bg-[#3B8F85] flex items-center p-[.4rem] text-white gap-[1rem] duration-300 cursor-pointer w-full max-w-[135px] rounded-md hover:bg-[#59B6AC] outline-none border-none'><Users /> Add Client</button>
            </div>
            <div className=" mt-[2rem] grid sm:grid-cols-3 md:grid-cols-4 lg:grid-col-4 xl:grid-cols-4 gap-[1rem]">
                {myClients.map(client => (
                    <div onClick={()=>navigate('/client/profile')} key={client.id} className="flex border p-[1rem] cursor-pointer hover:bg-gray-50 hover:scale-[102%] duration-300 rounded-lg bg-white items-center gap-2">
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

export default Clients;
