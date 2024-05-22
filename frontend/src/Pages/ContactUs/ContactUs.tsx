import Message from '../../assets/message.svg'
import { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import { FaTimes } from 'react-icons/fa';


interface FormData {
  name: string;
  companyName: string;
  email: string;
  contact: string;
  message: string;
}



const ContactUs = () => {
 
  const [formData, setFormData] = useState<FormData>({
    name: '',
    companyName: '',
    email: '',
    contact: '',
    message: '',
  });

  const [modalOpen,setModalOpen] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
      <>

<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
    <div className='w-full  p-[2rem] flex flex-col gap-[2rem] flex-col items-center justify-center rounded-md overflow-hidden bg-white max-w-[30rem]'>
       <div className="flex w-full items-center justify-between">
       <h1>Sign up for Emails</h1>
       <FaTimes onClick={()=>setModalOpen(false)}/>
       </div>

       <button onClick={()=>setModalOpen(false)} className='px-[1rem] w-full rounded-md py-[.5rem] bg-[#009F95] text-white hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300'>
            Subscribe Now
          </button>



    </div>
</Modal>
    <div className='flex h-full flex-col overflow-x-hidden gap-[4.5rem]'>


    <section className='w-full p-4 bg-center bg-cover relative'>
  <div className="w-full flex flex-col items-center justify-center h-[400px] bg-cover max-w-[1300px] mx-auto bg-center">
    <div className="relative z-10 p-8 text-center">
      <h1 className="text-4xl md:text-[64px]  font-bold mb-4">Contact Us</h1>
      <span className="block mb-8 text-gray-600 text-sm md:text-base lg:text-lg">
        Find out what climate risk can do for your financial institution
      </span>
      <div className="mt-8 text-black flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 lg:gap-4">
        <div className='rounded-full animate-pulse bg-[#009F95] w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center'>
          <img src={Message} alt="Message Icon" className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
        </div>
        <span className='font-medium text-lg md:text-xl lg:text-2xl'>info@substrately.com</span>
      </div>
    </div>
  </div>
</section>


      <section className='w-full p-4 bg-center bg-cover relative'>
        <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-93px)]  bg-cover max-w-[1211px] mx-auto bg-center " >
          <div className="relative w-full  z-10 text-center ">
            <h1 className="text-4xl md:text-[64px] font-bold mb-[1rem]">Let's hear from you</h1>
            <span className="block mb-[2rem]">
              Contact us to request further information on the substrately tool,
              <p>demonstrations and comparison</p>
            </span>
            <form className='relative w-full  grid gap-2 md:grid-cols-2 ' onSubmit={handleSubmit}>
              <div className='col-span-2 md:col-span-1'>
                <label className='block text-[24px] font-[500] mb-1 w-full text-left' htmlFor='name'>Name</label>
                <input
                  className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                  placeholder='Enter name'
                  type="text"
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className='col-span-2  md:col-span-1 w-full text-left'>
                <label className='block mb-1 text-[24px] font-[500]' htmlFor='companyName'>Company Name</label>
                <input
                  className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                  placeholder='Enter company name'
                  type="text"
                  id='companyName'
                  name='companyName'
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className='col-span-2 md:col-span-1 w-full text-left'>
                <label className='block mb-1 text-[24px] font-[500]' htmlFor='email'>Email</label>
                <input
                  className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                  placeholder='Enter email'
                  type="text"
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className='col-span-2 md:col-span-1 w-full text-left'>
                <label className='block mb-1 text-[24px] font-[500]' htmlFor='contact'>Company Contact</label>
                <input
                  className='w-full p-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                  placeholder='Enter company contact'
                  type="text"
                  id='contact'
                  name='contact'
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              <div className='col-span-2 '>
                <label className='block mb-1 w-full text-left text-[24px] font-[500]' htmlFor='message'>Message</label>
                <textarea
                  className='w-full p-2  border min-h-[294px] border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none hover:ring-2 hover:ring-blue-300'
                  placeholder="Message"
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className='col-span-1 flex items-center justify-left '>
                <button
                  className='w-full max-w-[200px] p-2 bg-[#009F95] h-[60px] text-white rounded-md hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300'
                  type='submit'
                >
                  Send Message
                </button>

              </div>
            </form>

          </div>
        </div>
      </section>




      <section className='flex flex-col p-4 items-center justify-center gap-[2rem] max-w-[1300px] mx-auto lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
        <div>
          <h1 className='font-[500] text-[1.5rem] sm:text-[36px]'>Address 1</h1>
          <div className='text-[15px] sm:text-[28px] text-[#3E3E3E]'>
            979 Saka Jojo, Victoria Island
            <p>10610, Lagos Nigeria</p>
          </div>
        </div>

        <div>
          <h1 className='font-[500] text-[1.5rem] sm:text-[36px]'>Address 1</h1>
          <div className='text-[15px] text-[28px] sm:text-[28px] text-[#3E3E3E]'>
            979 Saka Jojo, Victoria Island
            <p>10610, Lagos Nigeria</p>
          </div>
        </div>

      </section>


      <section className='w-full mb-[2rem] p-4'>
        <div className='flex flex-col items-center justify-center max-w-[400px] mx-auto mt-[5rem] gap-[2rem]'>
          <div className='w-full text-center'>
            <h1 className='font-[600]  text-[2rem] sm:text-[3rem]'>Sign up for emails</h1>
            <span className='text-sm md:text-base lg:text-lg'>Join our newsletter to hear more from us</span>
          </div>

          <div className='border-b group w-full border-[#878787]'>
            <input className='border-none transition hover:px-2 duration-300 transform h-[2rem] group-hover:bg-gray-100 w-full outline-none' placeholder='enter email address' type="text" />
          </div>

          <button onClick={()=>setModalOpen(true)} className='px-[1rem] py-[.5rem] bg-[#009F95] text-white hover:bg-[#007F75] hover:shadow-lg focus:ring-2 focus:ring-[#007F75] focus:outline-none transition-all duration-300'>
            Subscribe Now
          </button>
        </div>
      </section>


    </div>
      
      </>
  )
}

export default ContactUs
