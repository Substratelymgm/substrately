import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Menu } from 'lucide-react';

// Import components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/Navigation/NavigationBar';
import SideBar from './components/SideBar/SideBar';

// Import pages
import Dashboard from './components/Dashboard/Dashboard';
import Registration from './Pages/Registration/Registration';
import DataUpload from './Pages/DataUpload/DataUpload';
import PricingEngine from './Pages/PricingEngine/PricingEngine';
import FarmDataCollection from './Pages/FarmDataCollection/FarmDataCollection';
import FarmerClusterization from './Pages/FarmerClusterization/FarmerClusterization';
import DataCollectionTools from './Pages/DataCollectionTools/DataCollectionTools';
import ForecastWidget from './Pages/ForcastWidget/ForcastWidget';
import WIIReviewReports from './Pages/WillReviewReport/WillReviewReport';
import CropLossAssessment from './Pages/CropLossAccessment/CropLossAccessment';
import ContractMonitoringCalendar from './Pages/ContractMonitoringCalender/ContractMonitoringCalendar';
import ClaimsNotification from './Pages/ClaimsNotification/ClaimsNotification';
import CropInspectionReports from './Pages/CropInspectionReports/CropInspectionReports';
import SatelliteDataAccess from './Pages/SatelliteDataAccess/SatelliteDataAccess';
import ClaimsProcessingTracker from './Pages/ClaimsProcessor/ClaimsProcessor';
import PortfolioReportsGenerator from './Pages/PortfolioGenerator/PortfolioGenerator';
import DataVisualizationTools from './Pages/DatsVisualization/DataVisualization';
import DataStorageModule from './Pages/DataStorageModule/DataStorageModule';
import GPSCoordinatesUpload from './Pages/GspCoordinatesUpload/GspCoordinatesUpload';
import ClusterAssociation from './Pages/ClusterAssociation/ClusterAssociation';
import ClusterSelection from './Pages/ClusterSelection/ClusterSelection';
import ParameterAdjustment from './Pages/ParameterAdjustment/ParameterAdjustment';
import ParameterSaving from './Pages/ParameterSaving/ParameterSaving';
import HomePage from './Pages/HomePage/HomePage';
import ContactUs from './Pages/ContactUs/ContactUs';
import Solutions from './Pages/Solutions/Solutions';
import Faqs from './Pages/Faqs/Faqs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';


// Main layout component
const MainLayout = () => {
  return (
    <div className='w-full h-screen overflow-y-auto relative'>
      <Navbar />
      <div className="w-full ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};


// Dashboard layout component
const DashboardLayout = ({ toggleSidebar, isSidebarVisible }: { toggleSidebar: () => void, isSidebarVisible: boolean }) => {
  return (
    <div className='w-full custom-scrollbar h-screen overflow-hidden flex'>
      <NavigationBar />
      {isSidebarVisible && (
        <div onClick={toggleSidebar} className="absolute opacity-[.3] w-full h-full bg-red-500"></div>
      )}
      <SideBar isVisible={isSidebarVisible} />
      <main className='flex-grow p-2'>
        <div className='w-full sm:hidden flex items-center p-2 border-b h-[4rem]'>
          <Menu onClick={toggleSidebar} className="cursor-pointer" />
        </div>
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <Routes>
        {/* Main site routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/faqs" element={<Faqs />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* Dashboard routes */}
        <Route element={<DashboardLayout toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Farm Data Collection */}
          <Route path="/dashboard/farm-data-collection" element={<FarmDataCollection />} />
          <Route path="/dashboard/farm-data-collection/registration" element={<Registration />} />
          <Route path="/dashboard/farm-data-collection/data-upload" element={<DataUpload />} />
          <Route path="/dashboard/farm-data-collection/farmer-clusterization" element={<FarmerClusterization />} />
          <Route path="/dashboard/farm-data-collection/data-collection-tools" element={<DataCollectionTools />} />
          {/* Satellite Data Access & Pricing Engine */}
          <Route path="/dashboard/satellite-data-access" element={<SatelliteDataAccess />} />
          <Route path="/dashboard/satellite-data-access/pricing-engine" element={<PricingEngine />} />
          <Route path="/dashboard/satellite-data-access/forecast-widget" element={<ForecastWidget />} />
          {/* Contract Monitoring */}
          <Route path="/dashboard/contract-monitoring" element={<ContractMonitoringCalendar />} />
          <Route path="/dashboard/contract-monitoring/wii-review-reports" element={<WIIReviewReports />} />
          <Route path="/dashboard/contract-monitoring/crop-loss-assessment" element={<CropLossAssessment />} />
          {/* Claims Management */}
          <Route path="/dashboard/claims-management" element={<ClaimsNotification />} />
          <Route path="/dashboard/claims-management/crop-inspection-reports" element={<CropInspectionReports />} />
          <Route path="/dashboard/claims-management/claims-processing-tracker" element={<ClaimsProcessingTracker />} />
          {/* Business Analytics & Data Security */}
          <Route path="/dashboard/business-analytics" element={<PortfolioReportsGenerator />} />
          <Route path="/dashboard/business-analytics/data-visualization-tools" element={<DataVisualizationTools />} />
          <Route path="/dashboard/business-analytics/data-storage-module" element={<DataStorageModule />} />
          {/* Royal Exchange General Insurance Company – Pricing Engine */}
          <Route path="/dashboard/pricing-engine/gps-coordinates-upload" element={<GPSCoordinatesUpload />} />
          <Route path="/dashboard/pricing-engine/cluster-association" element={<ClusterAssociation />} />
          <Route path="/dashboard/pricing-engine/cluster-selection" element={<ClusterSelection />} />
          <Route path="/dashboard/pricing-engine/parameter-adjustment" element={<ParameterAdjustment />} />
          <Route path="/dashboard/pricing-engine/parameter-saving" element={<ParameterSaving />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
