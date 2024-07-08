import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { PublicRoute } from './routes/PublicRoute/PublicRoute';
import { PrivateRoute } from './routes/PrivateRoute/PrivateRoute';

// Import components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/Navigation/NavigationBar';
import SideBar from './components/SideBar/SideBar';

// Import pages
import Dashboard from './components/Dashboard/Dashboard';
import HomePage from './Pages/HomePage/HomePage';
import ContactUs from './Pages/ContactUs/ContactUs';
import Solutions from './Pages/Solutions/Solutions';
import Faqs from './Pages/Faqs/Faqs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { AiOutlinePlus } from 'react-icons/ai';
import ChatBox from './components/ChatBox/ChatBox';
import { useRef } from 'react';
import Modal from './components/Modal/Modal';
import { useAppDispatch } from './app/hooks';
import { refresh } from './app/store/auth/thunk';
import Payment from './Pages/Payment/Payment';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import DashNav from './components/DashNav/DashNav'
import Reports from './Pages/Reports/Reports';
import Clients from './Pages/Clients/Clients';
import DashFooter from './components/DashFooter/DashFooter';
import MyTeam from './Pages/MyTeam/MyTeam';
import Message from './Pages/Message/Message';
import Settings from './Pages/Settings/Settings';
import Profile from './Pages/Settings/Profile/Profile';
import Password from './Pages/Settings/Password/Password';
import Permissions from './Pages/Settings/Permissions/Permissions';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import UserProfile from './Pages/Profile/Profile';

const LandingPageLayout: React.FC = () => {
  const [chatBoxActive, setChatBoxActive] = useState<boolean>(false);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);


  const toggleChatBox = (event: React.MouseEvent) => {
    event.stopPropagation();
    setChatBoxActive((prev) => !prev);
  };

  // const handleClickOutside = (event: MouseEvent) => {
  //   if (chatBoxRef.current && !chatBoxRef.current.contains(event.target as Node)) {
  //     setChatBoxActive(false);
  //   }
  // };



  return (

    <>
      <Modal isOpen={chatBoxActive} onClose={() => setChatBoxActive(!chatBoxActive)}>
        {chatBoxActive && (
          <div
            ref={chatBoxRef}
            onClick={(event) => event.stopPropagation()}
            className='w-full p-[2rem]'
          >
            <ChatBox />
          </div>
        )}
      </Modal>


      <div className='w-full h-screen overflow-y-auto relative'>


        <div
          className='rounded-full w-[4rem] h-[4rem] flex text-white items-center justify-center z-[9999900] fixed cursor-pointer bottom-[2rem] right-[2rem] bg-blue-500'
          onClick={toggleChatBox}
        >
          <AiOutlinePlus />
        </div>
        <Navbar />
        <div className="w-full">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};



// Dashboard layout component
const MainLayout = ({ toggleSidebar, isSidebarVisible }: { toggleSidebar: () => void, isSidebarVisible: boolean }) => {

  return (
    true ?
      <div className='w-full relative bg-[#F8FAFC]  custom-scrollbar h-screen overflow-y-auto'>
        <DashNav />
        <div className="flex gap-[1.5rem]  sm:p-[2rem]">
          <NavigationBar />
          {/* <SideBar isVisible={isSidebarVisible} /> */}
          <main className='flex-grow'>
            {/* <div className='w-full sm:hidden flex items-center p-2 border-b h-[4rem]'>
              <Menu onClick={toggleSidebar} className="cursor-pointer" />
            </div> */}
            <Outlet />
          </main>
        </div>
        <DashFooter />
      </div> : <Navigate to="/payment" replace />
  );
};

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);


  const dispatch = useAppDispatch()


  useEffect(() => {
    dispatch(refresh())
  }, [])


  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <Routes>
        {/* Main site routes */}
        {
          <Route element={<PublicRoute element={<LandingPageLayout />} />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/faqs" element={<Faqs />} />
          </Route>
        }

        <Route path="/signup" element={<PublicRoute element={<SignUp />} />} />
        <Route path="/login" element={<PublicRoute element={<Login />} />} />
        <Route path="/forgot-password" element={<PublicRoute element={<ForgotPassword />} />} />
        <Route path="/forgot-password/reset-password/:token" element={<PublicRoute element={<ResetPassword />} />} />


        <Route path='/payment' element={<PrivateRoute element={<Payment />} />} />

        {/* Dashboard routes */}
        <Route element={<PrivateRoute element={<MainLayout toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/message" element={<Message />} />
          <Route path="/client/profile" element={<UserProfile />} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<Profile />} />
            <Route path='profile' element={<Profile />} />
            <Route path='permissions' element={<Permissions />} />
            <Route path='password' element={<Password />} />
          </Route>
        </Route>
          <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
