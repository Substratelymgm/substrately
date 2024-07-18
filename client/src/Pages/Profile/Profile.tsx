import Client from '../../assets/client.svg';
import { Users } from 'lucide-react';
import Modal from '../../components/Modal/Modal';
import { LiaTimesSolid } from 'react-icons/lia';
import { useState } from 'react';
import Mobile from '../../assets/mobile.svg'
import Location from '../../assets/Location.svg'
import Message from '../../assets/message-icon.svg'
import { LiaEditSolid } from "react-icons/lia";
import ClientLocation from '../../assets/client-location.svg'
import ClientReports from '../../components/ClientReport/ClientReport';

const Profile = () => {
    const [isClientAddModalOpen, setClientAddModalOpen] = useState(false)
    const [deleteClientModal,setDeleteClientModal] = useState(false)

    const toggleDeleteModal = () => setDeleteClientModal(!deleteClientModal)


    const closeClientAddModal = () => {
        setClientAddModalOpen(false);
    }


    return (
        <div>

            <Modal isOpen={deleteClientModal} onClose={toggleDeleteModal}>
                <div className='bg-white p-4 flex gap-4 flex-col items-center justify-center w-full max-w-[556px] rounded-lg min-h-[290px]'>
                    <h1>Are you sure you want to Delete this client</h1>
                    <div className="flex gap-[1rem] w-full">
                        <button onClick={toggleDeleteModal} className='flex-1 p-2 py-3 hover:bg-[#326F6A] duration-300 rounded-md text-white font-[500] bg-[#3B8F85]'>No</button>
                        <button onClick={toggleDeleteModal} className='flex-1 p-2 py-3 hover:bg-[#326F6A] duration-300 rounded-md text-white font-[500] bg-[#3B8F85]'>Yes</button>
                    </div>
                    
                </div>
            </Modal>

            <Modal isOpen={isClientAddModalOpen} onClose={closeClientAddModal}>
                <div className='bg-white w-full max-w-[556px] rounded-lg min-h-[290px]'>
                    <div className="w-full p-2 h-[4rem] border-b flex items-center justify-between">
                        <span className='text-[13px] font-[600]'>Download</span>
                        <LiaTimesSolid onClick={closeClientAddModal} className='cursor-pointer' />
                    </div>

                </div>
            </Modal>


            <div className="flex p-[1rem] flex-wrap  bg-white border min-h-[83px] sm:rounded-[16px] items-center justify-between">
                <span className='text-[22px] font-[500]'>Client</span>
                <span className='bg-[#3B8F85] flex items-center p-[.4rem] text-white gap-[1rem] duration-300 cursor-pointer  w-[max-content] sm:w-full max-w-[135px] text-[14px] rounded-md hover:bg-[#59B6AC]'><Users className='text-[10px]' /> <span className='hidden sm:flex'>Add Client</span></span>
            </div>


            <div className='p-[1rem] sm:p-0'>
                <h1 className='font-[600] mb-[2rem] sm:p-0 mt-[2rem] text-[24px]'>User Profile</h1>
                <div className="flex flex-col gap-[1.5rem] lg:flex-row">
                    <div className="flex w-full lg:max-w-[13rem] lg:flex-none flex-col  items-center">
                        <div className="w-full sm:border rounded-[6px] max-w-[15rem] mx-auto">
                            <div className="p-[.5rem] mx-auto w-[max-content] rounded-full bg-[#EFF6FF]">
                                <img className="w-[105px] h-[105px] rounded-full overflow-hidden object-cover" src={Client} alt="" />
                            </div>
                            <div className="flex mt-[1rem] flex-col items-center">
                                <span className="text-[16px] text-[#1A1A1A] font-[700]">
                                    Alexandra Michu
                                </span>
                                <span className="text-[12px] mt-[1rem] font-[500] text-[#64748B]">
                                    UX Researcher
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col  items-start mt-[3rem]">
                            <span className='flex items-center gap-[.3rem]'>
                                <div className="w-[2rem] h-[2rem] flex items-center justify-center">
                                    <img src={Location} alt="" />
                                </div>
                                <span className='font-[400] text-[11px] text-[#1A1A1A]'>Boston, United state</span>
                            </span>
                            <span className='flex items-center gap-[.3rem]'>
                                <div className="w-[2rem] h-[2rem] flex items-center justify-center">
                                    <img src={Message} alt="" />
                                </div>
                                <span className='font-[400] text-[11px] text-[#1A1A1A]'>example@gmail.com</span>
                            </span>
                            <span className='flex items-center gap-[.3rem]'>
                                <div className="w-[2rem] h-[2rem] flex items-center justify-center">
                                    <img src={Mobile} alt="" />
                                </div>
                                <span className='font-[400] text-[11px] text-[#1A1A1A]'>+1(070)1234567</span>
                            </span>
                        </div>

                        <div className="flex w-full mt-[3rem] max-w-[338px] flex-col gap-[1rem]">
                            <button className='outline-none w-full p-[1rem] text-white border-none bg-[#3B8F85] text-[13px] rounded-[6px] hover:bg-[#32776c] transition duration-300'>
                                Get Forecast
                            </button>
                            <button className='outline-none w-full p-[1rem] text-white border-none bg-[#D4AF37] text-[13px] rounded-[6px] hover:bg-[#b99730] transition duration-300'>
                                Meteorological Records
                            </button>
                            <button onClick={toggleDeleteModal} className='outline-none w-full mt-[1rem] border p-[1rem] border-[#FF4159] bg-white text-[13px] rounded-[6px] hover:bg-[#ffebed] hover:border-[#ff2941] transition duration-300'>
                                Delete Client
                            </button>
                        </div>
                    </div>


                    <div>
                    <div className="grid mt-[2rem] gap-[1rem] flex-auto sm:mt-0 lg:grid-cols-2 xl:grid-cols-3">
                        <div className='flex w-full  flex-col border rounded-[6px] p-[1rem] h-[max-content] gap-[2rem]'>
                            <div className='flex items-center justify-between'>
                                <span>Personal Details</span>
                                <LiaEditSolid />
                            </div>
                            <div className='flex w-full flex-col gap-[1rem]'>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>First Name</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Last Name</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Email</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Date of Birth</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Gender</span>
                                    <span className='text-[12px] font-[400]'>Male</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full  flex-col border rounded-[6px] p-[1rem] h-[max-content] gap-[2rem]'>
                            <div className='flex items-center justify-between'>
                                <span>Personal Details</span>
                                <LiaEditSolid />
                            </div>
                            <div className='flex w-full flex-col gap-[1rem]'>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>First Name</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Last Name</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Email</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Date of Birth</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Gender</span>
                                    <span className='text-[12px] font-[400]'>Male</span>
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full  flex-col border rounded-[6px] p-[1rem] h-[max-content] gap-[2rem]'>
                            <div className='flex items-center justify-between'>
                                <span className='font-[500]'>Personal Details</span>
                                <LiaEditSolid />
                            </div>
                            <div className='flex w-full flex-col gap-[1rem]'>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>First Name</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Last Name</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Email</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Date of Birth</span>
                                    <span className='text-[12px] font-[400]'>Jephery</span>
                                </div>
                                <div className='flex items-center justify-between w-full'>
                                    <span className='text-[12px] font-[400]'>Gender</span>
                                    <span className='text-[12px] font-[400]'>Male</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <img className='w-full h-full object-cover' src={ClientLocation} alt="" />
                    </div>

                    <ClientReports/>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Profile;
