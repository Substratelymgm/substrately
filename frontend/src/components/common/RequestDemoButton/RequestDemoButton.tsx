import { useState } from "react";
import Modal from "../../Modal/Modal";
import { Link } from "react-router-dom";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    businessServices: string;
}

const RequestDemoButton = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        businessServices: '',
    });

    const [modalOpen, setModalOpen] = useState<boolean>(false);
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
        setModalOpen(false)
        if (agreeTerms) {
            console.log('Form submitted:', formData);
        } else {
            alert('You must agree to the terms of service and privacy policy.');
        }
    };

    return (
        <>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <div className='w-full z-[900] p-[2rem] text-black flex flex-col gap-[2rem] flex-col items-center justify-center rounded-md overflow-hidden bg-white max-w-[30rem]'>
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
                        <div className='col-span-2 flex items-start'>
                            <input
                                type="checkbox"
                                id="agreeTerms"
                                checked={agreeTerms}
                                onChange={handleCheckboxChange}
                                className="mr-2"
                            />
                            <label className="text-black" htmlFor="agreeTerms">I agree to Substrately’s <Link to='/terms-of-service' className="font-[700] cursor-pointer hover:underline text-black">terms of service and privacy policy</Link></label>
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
            <button onClick={() => setModalOpen(true)} className="px-[2rem] py-[0.5rem] bg-[#009F95] hover:bg-[#007F75] text-white rounded-md">
                Request Demo
            </button>
        </>
    );
};

export default RequestDemoButton;
