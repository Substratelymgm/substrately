import React, { useState } from 'react';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import WindSpeed from '../../assets/wind-speed.svg';
import Humidity from '../../assets/Humidity.svg';
import DewPoint from '../../assets/dew-point.svg';
import Precipitation from '../../assets/precipitation.svg';
import CloudCover from '../../assets/cloud-server.svg';
import WindDirection from '../../assets/wind-direction.svg';
import { HiDotsHorizontal } from 'react-icons/hi';
import ChartImpression from '../../assets/chart-impressions-2.svg';
import Weather from '../../assets/weather-2.svg';
import Modal from '../../components/Modal/Modal';
import Pdf from '../../assets/pdf.svg';
import Csv from '../../assets/csv.svg';
import { LiaTimesSolid } from "react-icons/lia";
import { FaSearch } from 'react-icons/fa';
import LineChart from '../../components/LineChart/LineChart';
import CircleApostrophe from '../../assets/circle-apostrophe.svg'
import { ChartData } from 'chart.js';
import WeatherMap from '../../components/WeatherMap/WeatherMap';
import ReportList from '../../components/ReportList/ReportList';

const libraries: any = ['places'];

const mapContainerStyle: React.CSSProperties = {
  width: '100%',
  height: '400px',
};

const center: google.maps.LatLngLiteral = {
  lat: -3.745,
  lng: -38.523,
};

interface ReportItem {
  id: string;
  title: string;
  image: string;
}

const fakeGrowthChartData: ChartData = {
  labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
  datasets: [
      {
          label: 'Growth',
          data: [65, 59, 80, 81, 56, 55, 40, 10],
          fill: false,
          backgroundColor: '#25CD2566',
          borderColor: '#3B8F85',
          tension:0.4,
      },
  ],
};

const options = [
  { id: '1', month: 'Daily' },
  { id: '2', month: 'Monthly' },
  { id: '3', month: 'Yearly' },
];

const Reports: React.FC = () => {
  const [isLocationModalOpen, setLocationModalOpen] = useState(false);
  const [isExportModalOpen, setExportModalOpen] = useState(false);
  const [isReportItemsModalOpen, setReportItemsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<ReportItem>({ id: '', title: '', image: '' })
  const [location, setLocation] = useState<google.maps.LatLngLiteral>(center);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
    libraries,
  });

  const [selectedOptionGrowthChart, setSelectedOptionGrowthChart] = useState<string>('Daily');
  const [growthChartData, setGrowthChartData] = useState<ChartData>(fakeGrowthChartData);
  const [growthDropDownActive, setGrowthDropDownActive] = useState(false);

  const reportItems: ReportItem[] = [
    { id: '1', title: 'Wind Speed', image: WindSpeed },
    { id: '2', title: 'Humidity', image: Humidity },
    { id: '3', title: 'Dew Point', image: DewPoint },
    { id: '4', title: 'Precipitation', image: Precipitation },
    { id: '5', title: 'Cloud Cover', image: CloudCover },
    { id: '6', title: 'Wind Direction', image: WindDirection }
  ];

  const openLocationModal = () => {
    setLocationModalOpen(true);
  }
  const closeLocationModal = () => {
    setLocationModalOpen(false);
  }
  const closeReportItemsModal = () => {
    setReportItemsModalOpen(false);
  }

  const openExportModal = () => setExportModalOpen(true);
  const closeExportModal = () => setExportModalOpen(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: e.target.value }, (results, status) => {
      if (status === 'OK' && results) { // Check if results is not null
        setLocation({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        });
      } else {
        // Handle case where no results are found or there's an error
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  const handleViewReport = (item: ReportItem) => {
    setSelectedReport(item)
    setReportItemsModalOpen(true)
  }
  

  const handleMonthChange = (month: string, type: string) => {
    if (type === 'rainfall') {
        setSelectedOptionGrowthChart(month);
        updateGrowthChartData(month);
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
              ...fakeGrowthChartData.datasets[0],
              data: newData,
              backgroundColor: '#25CD2566',
              borderColor: '#3B8F85',
              tension:0.4,
          }
      ]
  });
};






  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <>
      <Modal isOpen={isLocationModalOpen} onClose={closeLocationModal}>
        <div className='bg-white w-full max-w-[556px] rounded-lg min-h-[290px]'>
          <div className="w-full p-2 h-[4rem] border-b flex items-center justify-between">
            <span className='text-[16px] font-[600]'>Set location</span>
            <LiaTimesSolid onClick={closeLocationModal} className='cursor-pointer' />
          </div>
          <div className='p-2 px-4'>
            <div className='w-full mt-2 flex gap-2 border h-10 px-2 rounded-md items-center bg-gray-100'>
              <FaSearch />
              <input
                className='outline-none flex-1 bg-gray-100'
                type="text"
                onChange={handleLocationChange}
              />
            </div>
            <div className="mt-4">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={location}
              >
                <Marker position={location} />
              </GoogleMap>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-[2rem]">
            <button className='p-2 bg-[#161616] mb-4 w-full max-w-[223px] mx-auto text-white p-2 rounded-md' onClick={closeLocationModal}>Ok</button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isExportModalOpen} onClose={closeExportModal}>
        <div className='bg-white w-full max-w-[556px] rounded-lg min-h-[290px]'>
          <div className="w-full p-2 h-[4rem] border-b flex items-center justify-between">
            <span className='text-[13px] font-[600]'>Download</span>
            <LiaTimesSolid onClick={closeExportModal} className='cursor-pointer' />
          </div>
          <div className="flex items-center justify-center mt-[2rem] w-full  gap-[4rem]">
            <div className='flex items-center justify-center flex-col'>
              <img src={Pdf} alt="" />
              <span>Download as PDF</span>
            </div>
            <div className='flex items-center justify-center flex-col'>
              <img src={Csv} alt="" />
              <span>Download as CSV</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-center mt-[2rem]">
            <button className='p-2 bg-[#3B8F85] w-full max-w-[223px] mx-auto text-white p-2 rounded-md' onClick={closeExportModal}>Download</button>
          </div>
        </div>
      </Modal>


      <Modal isOpen={isReportItemsModalOpen} onClose={closeReportItemsModal}>
        <div className='bg-white w-full max-w-[556px] rounded-lg min-h-[290px]'>
          <div className="w-full p-2 h-[4rem] border-b flex items-center justify-between">
            <span className='text-[13px] font-[600]'>{selectedReport.title}</span>
            <LiaTimesSolid onClick={closeReportItemsModal} className='cursor-pointer' />
          </div>
          <div className='p-2 mt-[1rem]'>
            <img className='w-full' src={selectedReport.image} alt="" />
          </div>
          <div className="w-full flex items-center justify-center mb-[2rem] mt-[1rem]">
            <button className='p-2 bg-[#3B8F85] w-full max-w-[223px] mx-auto text-white p-2 rounded-md' onClick={closeExportModal}>Close</button>
          </div>
        </div>
      </Modal>

      <div className="min-h-full">
        <div className="flex p-[1rem] border bg-white h-[83px] rounded-[16px] items-center justify-between">
          <span className="text-[22px] text-[#1A1A1A] font-[600]">General Report</span>
          <span className="flex items-center p-[.4rem] text-white gap-[1rem] duration-300 cursor-pointer rounded-md ">
            <button className='bg-[#3B8F85] text-[14px] p-2 rounded-md hover:bg-[#59B6AC]' onClick={openLocationModal}>Set Location</button>
            <button className='bg-[#417CD7] text-[14px] p-2 rounded-md hover:bg-[#5A92E0]' onClick={openExportModal}>Export Report</button>
          </span>
        </div>
        
       <ReportList reportItems={reportItems}/>

        <div className='bg-white p-[1rem] px-[2rem] mt-[2rem]'>
          <div className="flex items-center justify-between">
            <span className="font-[700] flex text-[#1A1A1A] text-[16px] gap-[.3rem] mb-4 text-[16px] text-[#1A1A1A]">Rain<img src={CircleApostrophe} alt="" /></span>
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
                          setGrowthDropDownActive(false);
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
          <LineChart chartData={growthChartData} />
          </div>
        </div>
        {/* <img className="mt-[1rem]" src={ChartImpression} alt="" /> */}
        {/* <img src={Weather} className="mt-[1rem]" alt="" /> */}
        <WeatherMap/>
      </div>
    </>
  );
};

export default Reports;
