import Client from '../../assets/client.svg'; 
import { Users } from 'lucide-react';
import SafeGuard from '../../assets/safeguard.svg'

const MyTeam = () => {
    // Sample array of first and last names for demonstration
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

    return (
        <div>
            <div className="flex p-[1rem] border bg-white h-[83px] rounded-[16px] items-center justify-between">
                <span className='text-[22px] font-[500]'>My Team</span>
                <span className='bg-[#3B8F85] flex items-center p-[.4rem] text-white gap-[1rem] duration-300 cursor-pointer  rounded-md hover:bg-[#59B6AC]'><img src={SafeGuard} alt="" /> Add Admin</span>
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
