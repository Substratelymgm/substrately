import Client from '../../assets/client.svg';
import { Users } from 'lucide-react';
import Modal from '../../components/Modal/Modal';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Clients = () => {
    const [isClientAddModalOpen, setClientAddModalOpen] = useState(false)
    const navigate = useNavigate()
    
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
            <div className="flex p-[1rem] bg-white border h-[83px] rounded-[16px] items-center justify-between">
                <span className='text-[22px] font-[500]'>Client</span>
                <span className='bg-[#3B8F85] flex items-center p-[.4rem] text-white gap-[1rem] duration-300 cursor-pointer w-full max-w-[135px] rounded-md hover:bg-[#59B6AC]'><Users /> Add Client</span>
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
