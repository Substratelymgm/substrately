import { HiPlusSmall } from "react-icons/hi2";
import { useState } from "react";
import Client from '../../assets/client.svg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsLayoutSidebarReverse } from "react-icons/bs";
import { HiOutlineLink } from "react-icons/hi";
import { GoSmiley } from "react-icons/go";
import File1 from '../../assets/message-file-1.svg'
import File2 from '../../assets/message-flle-2.svg'
import File3 from '../../assets/message-file-3.svg'
import { SyncLoader } from "react-spinners";
import { LiaTimesSolid } from "react-icons/lia";
import { IoChevronDown } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import { TbTrash } from "react-icons/tb";
import { HiLink } from "react-icons/hi2";



const Message = () => {
  const [category, setCategory] = useState('All')
  const [dateFilterActive, setDateFilterActive] = useState(false)
  // bg-[#F8FAFC] 

  const [dateFilter, setDateFilter] = useState('');
  const [customDateRange, setCustomDateRange] = useState(false);

  const handleDateFilterChange = (filter: string) => {
    if (filter === 'custom') {
      setCustomDateRange(true);
    } else {
      setDateFilter(filter);
      setCustomDateRange(false);
    }
  };

  const files = [
    { id: '1', filename: 'project-report.zip', size: '10 KB' },
    { id: '2', filename: 'presentation-slides.txt', size: '15 KB' },
    { id: '3', filename: 'meeting-notes.docx', size: '8 KB' },
    { id: '4', filename: 'shared-documents.pdf', size: '12 KB' },
    { id: '5', filename: 'training-materials.pdf', size: '18 KB' },
    { id: '6', filename: 'company-policies.docx', size: '7 KB' },
    { id: '7', filename: 'marketing-strategy.pdf', size: '9 KB' }
  ];



  const sharedLinks = [
    { id:'1', title: 'Project Report', link: 'https://example.com/project-report' },
    { id:'2', title: 'Presentation Slides', link: 'https://example.com/presentation-slides' },
    { id:'3', title: 'Meeting Notes', link: 'https://example.com/meeting-notes' },
    { id:'4', title: 'Shared Documents', link: 'https://example.com/shared-documents' },
    { id:'5', title: 'Training Materials', link: 'https://example.com/training-materials' },
    { id:'6', title: 'Company Policies', link: 'https://example.com/company-policies' },
    { id:'7', title: 'Marketing Strategy', link: 'https://example.com/marketing-strategy' }
  ];



  return (
    <div>
      <div className="hidden md:flex p-[1rem] border bg-white h-[83px] rounded-[16px] items-center justify-between">
        <span className='text-[22px] font-[700]'>Message</span>
        <div className="relative z-[300]">
          <button onClick={() => setDateFilterActive(!dateFilterActive)} className='bg-[#3B8F85] text-[13px] flex items-center p-[.4rem] text-white gap-[1rem] duration-300 cursor-pointer rounded-md hover:bg-[#59B6AC]'>
            Filter by Date
          </button>
          {
            dateFilterActive &&
            <div className="absolute top-[2rem] right-0 mt-2 w-[200px] bg-white border rounded-md shadow-lg">
              <button onClick={() => handleDateFilterChange('24hr')} className="block w-full text-left text-[13px] p-[.4rem] hover:bg-gray-100">24 Hours</button>
              <button onClick={() => handleDateFilterChange('7days')} className="block w-full text-left text-[13px] p-[.4rem] hover:bg-gray-100">7 Days</button>
              <button onClick={() => handleDateFilterChange('30days')} className="block w-full text-left text-[13px] p-[.4rem] hover:bg-gray-100">30 Days</button>
              <button onClick={() => handleDateFilterChange('custom')} className="block w-full text-left text-[13px] p-[.4rem] hover:bg-gray-100">Custom</button>
            </div>
          }
          {dateFilterActive && customDateRange && (
            <div className="absolute top-0 right-[2rem] mt-2 w-[250px] bg-white border border-gray-300 rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium text-sm">Filter by Date</span>
                <button className="text-sm text-red-500 hover:underline" onClick={() => setCustomDateRange(false)}>Cancel</button>
              </div>
              <label className="block mb-4">
                <span className="block text-gray-700 font-medium mb-1 text-sm">Start Date:</span>
                <input type="date" className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B8F85] focus:border-transparent" />
              </label>
              <label className="block mb-4">
                <span className="block text-gray-700 font-medium mb-1 text-sm">End Date:</span>
                <input type="date" className="block w-full mt-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#3B8F85] focus:border-transparent" />
              </label>
              <button className="w-full bg-[#3B8F85] text-white rounded-lg py-2 text-sm hover:bg-[#59B6AC] transition duration-300">Apply</button>
            </div>


          )}
        </div>
      </div>

      <div className='flex flex-col mt-[1.5rem] lg:flex-row  gap-[1rem] w-full'>
        <div className="flex w-full flex-col  gap-[1rem] md:flex-row">
          <div className="overflow-hidden hidden md:block">
            <div className="flex-none border relative h-[calc(100vh-13.5rem)] custom-scrollbar overflow-y-auto bg-white px-2 pb-2 rounded-[12px] sm:rounded-b-[0rem] w-full lg:w-[13rem]">
              <div className="sticky bg-white py-4 top-0">
                <div className="flex  items-center justify-between">
                  <span className="text-[22px] font-[700]">Chat</span>
                  <span className="w-[1.5rem] cursor-pointer mb-2 rounded-sm bg-[#3B8F85] hover:bg-[#2E7B73] duration-300 text-[1rem] h-[1.5rem] flex text-white items-center justify-center">
                    <HiPlusSmall />
                  </span>
                </div>
                <div className="flex  p-[.2rem] mt-2 rounded-[12px] gap-[.4rem] bg-gray-100 w-full h-[40px]">
                  <button onClick={() => setCategory('All')} className={`${category === 'All' ? "font-[400] border  text-[#64748B]" : "bg-white"} flex flex-1 rounded-[12px]  font-[700] text-[12px] items-center hover:text-white hover:bg-[#3B8F85] duration-300 justify-center `} >All</button >
                  <button onClick={() => setCategory('Archived')} className={`${category === 'Archived' ? "font-[400] text-[#64748B]" : "bg-white"} flex-1 rounded-[12px]  flex font-[700] text-[12px] hover:text-white hover:bg-[#3B8F85] duration-300 items-center justify-center `}>Archived</button >
                </div>
              </div>
              <div className="flex mt-1 gap-[1rem] flex-col">
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="items-center flex gap-[.5rem]">
                    <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                    <div className="flex flex-col">
                      <span className="font-[700] text-[14px]">Andreana Viola</span>
                      <span className="font-[700] text-[10px] text-[#575757]">Hi, how are you today?</span>
                    </div>
                  </div>
                  <div className="flex items-end flex-col">
                    <span className="text-[#1A1A1A] font-[700] mb-[.3rem] text-[12px]">1m ago</span>
                    <span className="rounded-full  text-white text-[12px] w-[20px] h-[20px] flex items-center justify-center bg-[#ED4F9D]">2</span>
                  </div>
                </div>



              </div>
            </div>
          </div>
          <div className="flex-1  flex flex-col relative h-[calc(100vh-13.5rem)] overflow-hidden  border bg-white  sm:rounded-[12px] sm:rounded-b-[0rem]">
            <div className=" flex p-4 border-b w-full item-center justify-between h-[70px]">
              <div className="items-center flex items-center gap-[.4rem] gap-[.5rem]">
                <img className="w-[40px] h-[40px] rounded-full object-cover" src={Client} alt="" />
                <span className="font-[700] text-[14px]">Andreana Viola</span>
              </div>
              <div className="flex items-center gap-[.5rem]">
                <BsLayoutSidebarReverse />
                <BsThreeDotsVertical />
              </div>
            </div>
            <div className="flex-auto flex flex-col gap-[1.5rem] bg-[#F8FAFC] custom-scrollbar p-2 overflow-y-auto">
              <div className="flex items-center gap-[.3rem]">
                <div className="h-[1px] bg-gray-200 flex-1"></div>
                <div className="text-[#94A3B8] text-[12px] font-[500]">Today</div>
                <div className="h-[1px] bg-gray-200 flex-1"></div>
              </div>

              {/* the person user chats with */}
              <div className="w-full  flex justify-start">
                <div className="flex bg-white rounded-r-[16px] border  rounded-bl-[16px] p-[.2rem] w-[max-content] gap-[.4rem] relative items-center">
                  <img className="w-[40px] h-[40px] rounded-full overflow-hidden" src={Client} alt="" />
                  <span className="font-[500] text-[12px]">Hi, How are you today?</span>
                  <span className="text-[#94A3B8] absolute top-[2rem]  bottom-0 right-[-3.5rem] font-[500] text-[12px]">9:00 AM</span>
                </div>
              </div>

              {/* the users message */}
              <div className="w-full mt-2 flex justify-end">
                <div className="flex bg-[#3B8F85] text-white rounded-l-[16px] rounded-br-[16px] p-[.2rem] w-[max-content] gap-[.4rem] relative items-center">
                  <span className="font-[500] text-[12px]">Hello Michu, I’m fine. How about you?</span>
                  <img className="w-[40px] h-[40px] rounded-full overflow-hidden" src={Client} alt="" />
                  <span className="text-[#94A3B8] absolute top-[2rem]  bottom-0 left-[-3.5rem] font-[500] text-[12px]">9:10 AM</span>
                </div>
              </div>

              {/* the person user chats with */}
              <div className="w-full flex justify-start">
                <div className="flex bg-white rounded-r-[16px] border rounded-bl-[16px] p-[.2rem] w-[max-content] gap-[.4rem] relative items-center">
                  <img className="w-[40px] h-[40px] rounded-full overflow-hidden" src={Client} alt="" />
                  <span className="font-[500] text-[12px]">Can you send a sample from a reference?</span>
                  <span className="text-[#94A3B8] absolute top-[2rem]  bottom-0 right-[-3.5rem] font-[500] text-[12px]">9:11 AM</span>
                </div>
              </div>

              {/* the users message */}
              <div className="w-full mt-2 flex justify-end">
                <div className="flex bg-[#3B8F85] text-white rounded-l-[16px] rounded-br-[16px] p-[.2rem] w-[max-content] gap-[.4rem] relative items-center">
                  <div>
                    {/* message with files */}
                    <span className="font-[500] text-[12px]">This is the reference we will use</span>
                    <div className="flex items-center gap-[.5rem]">
                      <img src={File1} alt="" />
                      <img src={File2} alt="" />
                      <img src={File3} alt="" />
                    </div>
                    <div>
                    </div>
                  </div>
                  <img className="w-[40px] h-[40px] rounded-full overflow-hidden" src={Client} alt="" />

                  <span className="text-[#94A3B8] absolute top-[2rem]  bottom-0 left-[-3.5rem] font-[500] text-[12px]">10:10 AM</span>
                </div>
              </div>

              {/* the person user chats with typing indicator */}
              <div className="w-full flex justify-start">
                <div className="flex bg-white rounded-r-[16px] border rounded-bl-[16px] p-[.2rem] w-[max-content] gap-[.4rem] relative items-center">
                  <img className="w-[40px] h-[40px] rounded-full overflow-hidden" src={Client} alt="" />
                  <span ><SyncLoader color="#94A3B8" size={10} /></span>
                  <span className="text-[#94A3B8] absolute top-[2rem]  bottom-0 right-[-3.5rem] font-[500] text-[12px]">10:04 AM</span>
                </div>
              </div>



            </div>
            <div className="flex-none p-2 flex items-center border-t w-full h-[4rem]">
              <input placeholder="Write message" className="w-full outline-none" type="text" />
              <span className="flex gap-[.3rem]">
                <div className="flex items-center justify-center p-[.4rem] rounded-full hover:bg-gray-200 cursor-pointer">
                  <GoSmiley className="text-[#94A3B8]" />
                </div>
                <div className="flex items-center justify-center p-[.4rem] rounded-full hover:bg-gray-200 cursor-pointer">
                  <HiOutlineLink className="text-[#94A3B8]" />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="flex-none flex flex-col lg:h-[calc(100vh-13.5rem)] custom-scrollbar lg:overflow-y-auto  border gap-[1rem] p-[1rem] bg-white rounded-[12px] lg:w-[12rem]">
          {/* user info */}
          <div className="w-full max-w-[15rem] mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-[700] text-[#1A1A1A]">User Info</span>
              <LiaTimesSolid className="cursor-pointer" />
            </div>
            <div className="p-[.5rem] mx-auto w-[max-content] rounded-full bg-[#EFF6FF]">
              <img className="w-[74px] h-[74px] rounded-full overflow-hidden object-cover" src={Client} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[16px] text-[#1A1A1A] font-[700]">
                Alexandra Michu
              </span>
              <span className="text-[12px] font-[500] text-[#64748B]">
                UX Researcher
              </span>
            </div>
            <div className="flex  justify-between bg-[#F8FAFC] border rounded-md mt-4 p-[.4rem] w-full xl:max-w-[231px] items-center gap-[.3rem]">
              <span className="flex items-center gap-[.3rem]">
                <span className="w-[8px] bg-[#4ADE80] h-[8px] rounded-full"></span>
                <span className="text-[.7rem]">Hiphonic Team</span>
              </span>
              <IoChevronDown />
            </div>
          </div>

          {/* shared files */}
          <div className="mt-[2rem]" >
            <span className="font-[700] overflow-hidden whitespace-nowrap overflow-ellipsis  text-[16px]">
              Shared files
            </span>
            <div className="flex flex-col">
              {files.map((file) => (
                <div key={file.id} className="flex justify-between bg-[#F8FAFC] rounded-md mt-2 p-[.4rem] w-full max-w-[1] items-center gap-[.3rem]">
                  <div className="flex items-center gap-[.9rem]">
                    <FiFileText className="text-[#3B8F85]" /> 
                    <div className="flex flex-col items-start gap-[.3rem]">
                      <span className="font-[700] overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[11rem] text-[14px]">{file.filename}</span>
                      <span className="text-sm font-[400] overflow-hidden whitespace-nowrap overflow-ellipsis text-[12px] text-[#64748B]">{file.size.toUpperCase()}</span>
                    </div>
                  </div>
                  <TbTrash className="text-[#3B8F85]" />
                </div>
              ))}
            </div>
          </div>

          {/* shared links */}
          <div className="mt-[2rem]">
  <span className="font-[700] overflow-hidden whitespace-nowrap overflow-ellipsis text-[16px]">
    Shared files
  </span>
  <div className="flex flex-col">
    {sharedLinks.map((link) => (
      <div key={link.id} className="flex justify-between bg-[#F8FAFC] rounded-md mt-2 p-[.4rem] w-full max-w-[11rem] items-center gap-[.3rem]">
        <div className="flex items-center gap-[.9rem]">
          <FiFileText className="text-[#3B8F85]" />
          <div className="flex flex-col items-start gap-[.3rem]">
            <span className="font-[700] text-[14px] overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[11rem]">{link.title}</span>
            <span className="text-sm font-[400] text-[12px] text-[#64748B] overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[150px]">
              {link.link}
            </span>
          </div>
        </div>
        <HiLink className="text-[#3B8F85]" />
      </div>
    ))}
  </div>
</div>

        </div>

      </div>
    </div>
  );
};

export default Message;
