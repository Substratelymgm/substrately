import { LuUsers } from "react-icons/lu";
import SafeGuard from '../../assets/safeguard.svg';
import GlobalMap from '../../assets/global-map.svg';
import Weather from '../../assets/weather.svg';
import Client from '../../assets/client.svg';
import { Link } from "react-router-dom";
import LineChart from "../LineChart/LineChart";
import BarChart from "../BarChart/BarChart";
import { useState, useEffect } from "react";
import { ChartData } from "chart.js";
import Rain from '../../assets/rain.svg'
import Fire from '../../assets/fire.svg'
import Cloud from '../../assets/cloud.svg'

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

const fakeChartData: ChartData = {
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

const Dashboard = () => {
    const options = [
        { id: '1', month: 'Daily' },
        { id: '2', month: 'Monthly' },
        { id: '3', month: 'Year;y' },
    ];

    const [selectedOption, setSelectedOption] = useState<string>('Daily');
    const [rainFallDropDownActive, setRainFallDropDownActive] = useState(false);
    const [chartData, setChartData] = useState<ChartData>(fakeChartData);

    const handleMonthChange = (month: string) => {
        setSelectedOption(month);
        updateChartData(month);
    };

    const updateChartData = (selectedOption: string) => {
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
                newData = fakeChartData.datasets[0].data;
        }

        setChartData({
            ...fakeChartData,
            datasets: [
                {
                    ...fakeChartData.datasets[0],
                    data: newData
                }
            ]
        });
    };

    return (
        <div className="flex w-full flex-col ">
             <div className="w-full p-[2rem] h-[188px] rounded-[32px] bg-[#1A3E39] flex justify-between items-center ">
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

        <div className="flex flex-col gap-[1rem] mt-[1rem] lg:flex-row">
                <div className="flex border items-center bg-white p-[1rem] rounded-[21px] overflow-hidden flex-1 justify-between">
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
                <div className="flex border  items-center bg-white p-[1rem] rounded-[21px] overflow-hidden flex-1 justify-between">
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
                <div className="flex items-center border  p-[1rem] bg-white rounded-[21px] overflow-hidden flex-1 justify-between">
                    <div className="flex items-center gap-[.5rem]">
                        <div className="w-[78px] bg-[#EF2B58] bg-[#FFA552] h-[78px] rounded-lg flex items-center justify-center">
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

            <div className="flex flex-col gap-[1rem] mt-[1rem] lg:flex-row">

                <div className="flex-1 border overflow-hidden rounded-[20px]">
                    <img src={GlobalMap} className="w-full h-full object-cover" alt="" />
                </div>

                <div className="bg-white border rounded-[20px] overflow-hidden">
                    <div className="flex-none max-w-[361px] h-[361px]">
                        <img src={Weather} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div className="w-[361px] mb-[2rem] mt-[2rem] flex flex-col  items-center">
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

            <div className="flex  mt-[1.5rem] gap-[2rem] flex-col lg:flex-row">
                <div className="w-full border flex-2 p-[1rem] rounded-[20px] bg-white ">
                    <div className="flex items-center justify-between">
                        <span className="font-[700] mb-4 text-[16px] text-[#1A1A1A]">Average Monthly Rainfall</span>
                        <div className="custom-dropdown">
                            <div className="relative">
                                <button
                                    className="bg-[#3B8F85] text-white text-[11px]  py-2 px-4 rounded inline-flex items-center"
                                    onClick={() => setRainFallDropDownActive(!rainFallDropDownActive)}
                                >
                                    <span >{selectedOption}</span>
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
                                                    handleMonthChange(option.month);
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

                    <div className="w-full">
                        <BarChart chartData={chartData} />
                    </div>
                </div>
                <div className="sm:flex-none bg-white border rounded-[20px] p-[1rem] flex gap-[1rem] flex-col sm:w-[25rem] ">
                    <div>
                        <div className="flex items-center justify-between">
                            <span className="font-[700] mb-4 text-[16px] text-[#1A1A1A]">Growth</span>
                            <div className="custom-dropdown">
                                <div className="relative">
                                    <button
                                        className="bg-[#3B8F85] text-white text-[11px]  py-2 px-4 rounded inline-flex items-center"
                                        onClick={() => setRainFallDropDownActive(!rainFallDropDownActive)}
                                    >
                                        <span >{selectedOption}</span>
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
                                                        handleMonthChange(option.month);
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

                        {/* <LineChart chartData={chartData} /> */}
                    </div>
                    <div className="flex items-start gap-[1rem]">
                        <div className="flex-1 flex flex-col items-start">
                            <div className="flex-1 flex mt-1 items-center justify-between">
                                <span className="font-[600] text-[14px] text-[#7D7D7D]">Most Sun</span>
                                <img src={Fire} alt="" />
                            </div>
                            <div className="flex text-[#3B8F85] text-[24px] font-[600] gap-[.5rem]">
                            <span>22<sup className="text-[10px]">nd</sup> Nov</span>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col ">
                            <div className="flex-1 flex items-center mt-1 justify-between">
                                <span className="font-[600] mt-1 text-[14px] text-[#7D7D7D]">Most Sun</span>
                                <img src={Cloud} alt="" />
                            </div>
                            <div className="flex flex-col text-[#3B8F85] gap-[.5rem]">
                                 <div className="flex">
                                 <span>96K</span>
                                 <span>sold so far</span>
                                 </div>
                                 <div className="text-[24px] font-[600]">
                                    2023
                                 </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white">
                            <div className="flex-1 flex items-center justify-between">
                                <span className="font-[600] text-[14px] text-[#7D7D7D]">Most Sun</span>
                                <img src={Rain} alt="" />
                            </div>
                            <div className="flex text-[#3B8F85] text-[24px] font-[600] gap-[.5rem]">
                              
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex  mt-[1.5rem] gap-[2rem] flex-col md:flex-row">
                <div className="w-full flex-2 p-[1rem] border rounded-[20px] bg-white ">
                    <LineChart chartData={chartData} />
                </div>

                <div className="sm:flex-none bg-white border rounded-[20px] p-[1rem] flex gap-[1rem] flex-col sm:w-[25rem] ">
                
                    <div>
                    <div className="flex items-center justify-between">
                            <span className="font-[700] mb-4 text-[16px] text-[#1A1A1A]">Messages</span>
                            <div className="custom-dropdown">
                                <div className="relative">
                                    <button
                                        className="bg-[#3B8F85] text-white text-[11px]  py-2 px-4 rounded inline-flex items-center"
                                        onClick={() => setRainFallDropDownActive(!rainFallDropDownActive)}
                                    >
                                        <span >{selectedOption}</span>
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
                                                        handleMonthChange(option.month);
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
                    </div>

                </div>

                

            </div>
        </div>
    );
}

export default Dashboard;
