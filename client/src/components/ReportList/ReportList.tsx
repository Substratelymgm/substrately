import React from 'react'
import { ReportItem } from '../../utils/types'
import Modal from '../Modal/Modal'
import { useState } from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { HiDotsHorizontal } from 'react-icons/hi'

export interface ReportListProps {
     reportItems:ReportItem[]
}

const ReportList:React.FC<ReportListProps> = ({reportItems}) => {
    const [isReportItemsModalOpen, setReportItemsModalOpen] = useState(false);
    const [selectedReport,setSelectedReport] = useState<ReportItem>({id:'',title:'',image:''})

    const closeReportItemsModal = () => {
        setReportItemsModalOpen(false);
      }

      const handleViewReport = (item:ReportItem) => {
        setSelectedReport(item)
        setReportItemsModalOpen(true)
      }
  return (
   <>
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
    <div className="grid grid-cols-1 mt-[1.5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    {reportItems.map((item:ReportItem, index) => (
      <div onClick={()=>handleViewReport(item)} key={index} className="p-4 hover:scale-[105%] duration-300 border bg-white rounded-md gap-[1rem] flex flex-col items-center">
        <div className="flex w-full justify-between items-center">
          <div className="text-center flex items-center gap-[.5rem] font-semibold">
            <span className='text-[10px] text-[#1A1A1A]'>{item.title}</span>
            <img src={Exclamation} alt="icon" />
          </div>
          <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer duration-300">
            <HiDotsHorizontal className="text-gray-500" />
          </div>
        </div>
        <img src={item.image} alt={item.title} className="w-full object-cover mb-2" />
      </div>
    ))}
  </div>
   </>
  )
}

export default ReportList