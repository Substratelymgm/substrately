import { LuUsers } from "react-icons/lu";
import SafeGuard from '../../assets/safeguard.svg';
import GlobalMap from '../../assets/global-map.svg';
import Weather from '../../assets/weather.svg';
import Client from '../../assets/client.svg';
import { Link } from "react-router-dom";
import LineChart from "../LineChart/LineChart";
import BarChart from "../BarChart/BarChart";
import { useState } from "react";
import { ChartData } from "chart.js";
import Rain from '../../assets/rain.svg'
import Fire from '../../assets/fire.svg'
import Cloud from '../../assets/cloud.svg'
import { IoReturnDownBackSharp } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import WeatherCheckUserImage from '../../assets/user-image.svg'

const myClients = [
    { id: '1', avatar: Client, name: 'Coddy' },
    { id: '2', avatar: Client, name: 'Alice' },
    { id: '3', avatar: Client, name: 'Bob' },
    { id: '4', avatar: Client, name: 'Charlie' },
    { id: '5', avatar: Client, name: 'David' },
    { id: '6', avatar: Client, name: 'Emma' },
    { id: '7', avatar: Client, name: 'Frank' },
    { id: '8', avatar: Client, name: 'Grace' },
    { id: '9', avatar: Client, name: 'Hannah' },
    { id: '10', avatar: Client, name: 'Ian' },
    { id: '11', avatar: Client, name: 'Julia' },
    { id: '12', avatar: Client, name: 'Kevin' }
];

const fakeTemperatureChartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Temperature',
            data: [65, 59, 80, 81, 56, 55, 40, 10, 40, 80, 50, 20],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',

        },
    ],
};

const fakeGrowthChartData: ChartData = {
    labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
        {
            label: 'Growth',
            data: [65, 59, 80, 81, 56, 55, 40, 10],
            fill: false,
            backgroundColor: '#25CD2566',
            fill: "origin",
            borderColor: '#25CD25',
        },
    ],
};

const fakeRainFallChartData: ChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Rainfall',
            data: [65, 59, 80, 81, 56, 55, 40, 10, 40, 80, 50, 20],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
        },
    ],
};


const messages = [
    {
        id: 1,
        user: {
            firstName: 'John',
            lastName: 'Doe',
            avatar: 'https://via.placeholder.com/40'
        },
        message: 'Hello, how are you?'
    },
    {
        id: 2,
        user: {
            firstName: 'Jane',
            lastName: 'Smith',
            avatar: 'https://via.placeholder.com/40'
        },
        message: 'I am fine, thank you!'
    },
    {
        id: 3,
        user: {
            firstName: 'Emily',
            lastName: 'Jones',
            avatar: 'https://via.placeholder.com/40'
        },
        message: 'What are you up to today?'
    },
    {
        id: 4,
        user: {
            firstName: 'Michael',
            lastName: 'Brown',
            avatar: 'https://via.placeholder.com/40'
        },
        message: 'I am working on a new project.'
    },
    {
        id: 5,
        user: {
            firstName: 'Sarah',
            lastName: 'Davis',
            avatar: 'https://via.placeholder.com/40'
        },
        message: 'That sounds interesting!'
    }
];


const Dashboard = () => {
    const options = [
        { id: '1', month: 'Daily' },
        { id: '2', month: 'Monthly' },
        { id: '3', month: 'Yearly' },
    ];

    const messageSortOptions = [
        { id: '1', value: 'Newest' },
        { id: '2', value: 'Date' },
    ];

    //selected options
    const [selectedOptionMessage, setSelectedOptionMessage] = useState<string>('Newest');
    const [selectedOptionRainfallChart, setSelectedOptionRainFallChart] = useState<string>('Daily');
    const [selectedOptionGrowthChart, setSelectedOptionGrowthChart] = useState<string>('Daily');

    //drop down active
    const [messageDropDownActive, setMessageDropDownActive] = useState(false);
    const [rainFallDropDownActive, setRainFallDropDownActive] = useState(false);
    const [growthDropDownActive, setGrowthDropDownActive] = useState(false);

    // chart data
    const [temperatureChartData, setTemperatureChartData] = useState<ChartData>(fakeTemperatureChartData);
    const [growthChartData, setGrowthChartData] = useState<ChartData>(fakeGrowthChartData);
    const [rainFallChartData, setRainFallChartData] = useState<ChartData>(fakeRainFallChartData);




    const handleMonthChange = (month: string, type: string) => {
        if (type === 'rainfall') {
            setSelectedOptionRainFallChart(month);
            updateRainFallChartData(month);
            return
        }
        if (type === 'growth') {
            setSelectedOptionGrowthChart(month);
            updateGrowthChartData(month);
            return
        }

    };

    


    const updateGrowthChartData = (selectedOption: string) => {
        let newData;
        switch (selectedOption) {
            case 'Daily':
                newData = [12, 19, 3, 5, 2, 3, 7, 8, 6, 7, 12, 16];
                break;
            case 'Yearly':
                newData = [65, 59, 80, 81, 56, 55, 40, 10, 40, 80, 50, 20];
                break;
            case 'Monthly':
                newData = [750, 600, 450, 500, 600, 700, 800, 650, 500, 450, 300, 200];
                break;
            default:
                newData = fakeGrowthChartData.datasets[0].data;
        }

        setGrowthChartData({
            ...fakeGrowthChartData,
            datasets: [
                {
                    ...fakeRainFallChartData.datasets[0],
                    data: newData,
                    backgroundColor: '#25CD2566',
                    fill: "origin",
                    borderColor: '#25CD25'
                }
            ]
        });
    };


    const updateRainFallChartData = (selectedOption: string) => {
        let newData;
        switch (selectedOption) {
            case 'Daily':
                newData = [12, 19, 3, 5, 2, 3, 7, 8, 6, 7, 12, 16];
                break;
            case 'Yearly':
                newData = [65, 59, 80, 81, 56, 55, 40, 10, 40, 80, 50, 20];
                break;
            case 'Monthly':
                newData = [750, 600, 450, 500, 600, 700, 800, 650, 500, 450, 300, 200];
                break;
            default:
                newData = fakeRainFallChartData.datasets[0].data;
        }

        setRainFallChartData({
            ...fakeRainFallChartData,
            datasets: [
                {
                    ...fakeRainFallChartData.datasets[0],
                    data: newData,

                }
            ]
        });
    };


    const userMessages = [
        {
            name: "Isaac Anasonye",
            contact: "Everton Junah",
            avatar: "path/to/isaac-avatar.png",
            message: "Hey, are we still on for the meeting tomorrow?"
        },
        {
            name: "Sophia Turner",
            contact: "Michael Ross",
            avatar: "path/to/sophia-avatar.png",
            message: "I've reviewed the document, and it looks great!"
        },
        {
            name: "Liam Smith",
            contact: "Charlotte Brown",
            avatar: "path/to/liam-avatar.png",
            message: "Can you send me the latest report by end of day?"
        },
        {
            name: "Emily Johnson",
            contact: "Olivia Wilson",
            avatar: "path/to/emily-avatar.png",
            message: "Let's catch up over coffee sometime next week."
        }
    ];


    return (
        <div className="flex w-full flex-col ">
            <div className="w-full p-[2rem] h-[188px] sm:rounded-[32px] bg-[#1A3E39] flex justify-between items-center ">
                <div className="text-white">
                    <p className="font-[200] text-[1rem]">Welcome back</p>
                    <p className="font-[500] text-[2rem]">Pablo Bins</p>
                </div>

                <div className="h-[91px] gap-[1rem] p-[1rem] flex items-center justify-center rounded-lg bg-[#FFFFFF0D]">
                    <div className="flex flex-col text-white">
                        <span className="font-[500] text-[12px]">Dec</span>
                        <span className="font-[500] text-[2rem] text-white">13</span>
                    </div>
                    <div className="w-[2px] h-full bg-white">
                    </div>
                    <div className="font-[500] text-white flex flex-col">
                        <span className="text-[10px]">Weather Report</span>
                        <span className="text-[1rem]">Lagos,Nigeria</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[1rem] mt-[2rem] lg:flex-row">
                <div className="flex border items-center bg-white p-[1rem] sm:rounded-[21px] overflow-hidden flex-1 justify-between">
                    <div className="flex items-center gap-[.5rem]">
                        <div className="w-[78px] bg-[#5B68FF] h-[78px] rounded-lg flex items-center justify-center">
                            <LuUsers className="w-[27px] h-[27px] text-white" />
                        </div>
                        <span className="text-[16px] font-[700]">
                            Clients
                        </span>
                    </div>
                    <div>
                        1220
                    </div>
                </div>
                <div className="flex border  items-center bg-white p-[1rem] sm:rounded-[21px] overflow-hidden flex-1 justify-between">
                    <div className="flex items-center gap-[.5rem]">
                        <div className="w-[78px] bg-[#FFA552]  h-[78px] rounded-lg flex items-center justify-center">
                            <img className="w-[27px] h-[27px]" src={SafeGuard} alt="" />
                        </div>
                        <span className="text-[16px] font-[700]">
                            Clients
                        </span>
                    </div>
                    <div>
                        1220
                    </div>
                </div>
                <div className="flex items-center border  p-[1rem] bg-white sm:rounded-[21px] overflow-hidden flex-1 justify-between">
                    <div className="flex items-center gap-[.5rem]">
                        <div className="w-[78px] bg-[#EF2B58] bg-[#EF2B58] h-[78px] rounded-lg flex items-center justify-center">
                            <img className="w-[27px] h-[27px]" src={SafeGuard} alt="" />
                        </div>
                        <span className="text-[16px] font-[700]">
                            Clients
                        </span>
                    </div>
                    <div>
                        1220
                    </div>
                </div>

            </div>

            <div className="flex flex-col gap-[1rem] mt-[2rem] lg:flex-row">

                <div className="flex-1 border overflow-hidden sm:rounded-[20px]">
                    <img src={GlobalMap} className="w-full h-full object-cover" alt="" />
                </div>

                <div className="bg-white border sm:rounded-[20px] overflow-hidden">
                    <div className="flex-none md:max-w-[361px] h-[361px]">
                        <img src={Weather} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="md:w-[361px] mb-[2rem] mt-[2rem] flex flex-col  items-center">
                        <div className="flex w-full px-[1rem] items-center justify-between">
                            <span className="font-[500] text-[16px] text-[1rem]">My Clients</span>
                            <Link to="/clients" className="text-[14px] hover:underline duration-300 cursor-pointer font-[400]">See all</Link>
                        </div>
                        <div className="grid grid-cols-4  gap-[2rem] mt-[2rem]">
                            {
                                myClients.map((client: any) => {
                                    return <div>
                                        <div className="w-[38px] h-[38px] rounded-md">
                                            <img src={client.avatar} alt="" />
                                        </div>
                                        <span className="text-[12px]">{client.name}</span>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row">
                <div className="flex-1">
                    <img src="" alt="" />
                </div>
                <div className="flex-1 sm:flex-none max-w-[540px]">

                </div>

            </div>

            <div className="flex  mt-[1.5rem]  gap-[2rem] flex-col lg:flex-row">
                <div className="w-full border h-[max-content] flex-2 p-[1rem] sm:rounded-[20px] bg-white ">
                    <div className="flex items-center justify-between">
                        <span className="font-[700] mb-4 text-[16px] text-[#1A1A1A]">Average Monthly Rainfall</span>
                        <div className="custom-dropdown">
                            <div className="relative">
                                <button
                                    className="bg-[#3B8F85] text-white text-[11px]  py-2 px-4 rounded inline-flex items-center"
                                    onClick={() => setRainFallDropDownActive(!rainFallDropDownActive)}
                                >
                                    <span >{selectedOptionRainfallChart}</span>
                                    <svg
                                        className="fill-current h-4 w-4 ml-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M9.293 13.293a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L10 10.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {rainFallDropDownActive && (
                                    <div className="absolute right-0 mt-2 w-48 max-h-[10rem] overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        {options.map((option) => (
                                            <button
                                                key={option.id}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                onClick={() => {
                                                    handleMonthChange(option.month, 'rainfall');
                                                    setRainFallDropDownActive(false);
                                                }}
                                            >
                                                {option.month}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="w-full h-[20rem]">
                        <BarChart chartData={rainFallChartData} />
                    </div>
                </div>
                <div className="md:flex-none bg-white border sm:rounded-[20px] p-[1rem] flex gap-[1rem] flex-col md:w-[25rem] ">
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="font-[700] mb-4 text-[16px] text-[#1A1A1A]">Growth</span>
                            <div className="custom-dropdown">
                                <div className="relative">
                                    <button
                                        className="border text-gray-600 text-[11px]  py-2 px-4 rounded inline-flex items-center"
                                        onClick={() => setGrowthDropDownActive(!growthDropDownActive)}
                                    >
                                        <span >{selectedOptionGrowthChart}</span>
                                        <svg
                                            className="fill-current h-4 w-4 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M9.293 13.293a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L10 10.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {growthDropDownActive && (
                                        <div className="absolute right-0 mt-2 w-48 max-h-[10rem] overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            {options.map((option) => (
                                                <button
                                                    key={option.id}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                    onClick={() => {
                                                        handleMonthChange(option.month, 'growth');
                                                        setRainFallDropDownActive(false);
                                                    }}
                                                >
                                                    {option.month}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                        <div className="w-full h-[13rem]">
                        <LineChart chartData={growthChartData} />
                        </div>
                    </div>
                    <div className="flex items-start mt-[1rem] h-[10rem] gap-[1rem]">
                        <div className="flex flex-col justify-between h-full gap-[2.3rem]">
                            <div className=" flex mt-1  gap-[1rem] items-center justify-between">
                                <span className="font-[600] text-[14px] text-[#7D7D7D]">Most Sun</span>
                                <img src={Fire} alt="" />
                            </div>
                            <div className="flex   text-[#3B8F85] text-[24px] font-[600] gap-[.5rem]">
                                <span>22<sup className="text-[10px]">nd</sup> Nov</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between h-full gap-[2.3rem]">
                            <div className="flex items-center mt-1 justify-between">
                                <span className="font-[600] gap-[1rem] mt-1 text-[14px] text-[#7D7D7D]">Most Sun</span>
                                <img src={Cloud} alt="" />
                            </div>
                            <div className="flex flex-col text-[#3B8F85] gap-[.5rem]">
                                <div className="flex text-[#454545]">
                                    <span>96K</span>
                                    <span>sold so far</span>
                                </div>
                                <div className="text-[24px] text-[#734A00] font-[600]">
                                    2023
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between h-full gap-[2.3rem] bg-white">
                            <div className="flex items-center justify-between">
                                <span className="font-[600] gap-[1rem] text-[14px] text-[#7D7D7D]">Most Sun</span>
                                <img src={Rain} alt="" />
                            </div>
                            <div className="flex flex-col text-[#3B8F85] text-[24px] font-[600] gap-[.5rem]">
                                <img className="w-[24px] h-[24px] rounded-full" src={WeatherCheckUserImage} alt="" />
                                <div className="flex flex-col">
                                    <span className="text-[14px] text-[#131313] font-[500]">Maggie Johnson</span>
                                    <span className="font-[400] text-[#454545] text-[10px]">Oasis Organic Inc</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex  mt-[1.5rem] gap-[2rem] flex-col md:flex-row">
                <div className="w-full flex-2 p-[1rem] border h-[max-content] sm:rounded-[20px] bg-white ">
                    <div className="w-full flex items-center justify-center">
                        <span className="font-[500] mb-2 text-center text-[1.2rem]">
                            Average Monthly Temprature
                        </span>
                    </div>
                    <div className="w-full h-[20rem]">
                    <LineChart chartData={temperatureChartData} options={{
                        scales: {
                            x: {
                                display: true,
                                grid: {
                                    display: true
                                }
                            },
                            y: {
                                display: true,
                                grid: {
                                    display: true
                                },
                                ticks: {
                                    color: '#626E99',
                                    callback: (value) => `${value}°C`,
                                },
                            }
                        },
                    }} />
                    </div>
                </div>

                <div className="md:flex-none bg-white border sm:rounded-[20px] p-[1rem] flex gap-[1rem] flex-col md:w-[25rem] ">

                    <div>
                        <div className="flex items-center justify-between">
                            <span className="font-[700] mb-4 text-[16px] text-[#1A1A1A]">Messages</span>
                            <div className="custom-dropdown">
                                <div className="relative">
                                    <button
                                        className="border text-gray-600 text-[11px]  py-2 px-4 rounded inline-flex items-center"
                                        onClick={() => setMessageDropDownActive(!messageDropDownActive)}
                                    >
                                        <span >{selectedOptionMessage}</span>
                                        <svg
                                            className="fill-current h-4 w-4 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M9.293 13.293a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L10 10.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    {messageDropDownActive && (
                                        <div className="absolute right-0 mt-2 w-48 max-h-[10rem] overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            {messageSortOptions.map((option) => (
                                                <button
                                                    key={option.id}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                                    onClick={() => {
                                                        setSelectedOptionMessage(option.value)
                                                        setRainFallDropDownActive(false);
                                                    }}
                                                >
                                                    {option.value}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="flex mt-[1rem] mb-[2rem] gap-[.5rem] flex-col">
                            {userMessages.map((user, index) => (
                                <div key={index} className="w-full hover:text-white py-[1rem] rounded-md px-[.6rem] hover:bg-[#3B8F85] duration-300 flex items-center justify-between">
                                    <div className="flex gap-[1rem] items-center justify-center">
                                        <img className="w-[32px] h-[32px] rounded-[8px]" src={Client} alt={`${user.name}'s avatar`} />
                                        <div className="flex flex-col">
                                            <span className="font-[500] text-[14px]">{user.name}</span>
                                            <span className="text-[10px] font-[400]">{user.contact}</span>
                                        </div>
                                    </div>
                                    <LuMessageCircle className="cursor-pointer text-white hover:text-gray-300 duration-300" />
                                </div>
                            ))}

                        </div>

                        <Link to='/clients' className="text-[#3B8F85] text-[14px] font-400 cursor-pointer">{`All customers ${'->'}`}</Link>
                    </div>

                </div>



            </div>
        </div>
    );
}

export default Dashboard;
