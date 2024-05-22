import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import RequestDemoButton from '../../components/common/RequestDemoButton/RequestDemoButton';

const questions: string[] = [
  "What is Substrately?",
  "What service do we offer?",
  "What pricing options are available to me?",
  "Why should I worry about climate risk?",
  "Why should I use Substrately?",
  "What are extreme weather events?",
  "Am I required to report on climate risk at my institution?",
  "Why should I worry about climate risk now? Can't I wait?"
];

const answers: { [key: string]: string } = {
  "What is Substrately?": "Substrately is a company focused on providing climate risk solutions.",
  "What service do we offer?": "We offer climate risk assessment and management services.",
  "What pricing options are available to me?": "We have flexible pricing options depending on your needs.",
  "Why should I worry about climate risk?": "Climate risk can have significant financial and operational impacts.",
  "Why should I use Substrately?": "We provide expert solutions tailored to mitigate climate risk effectively.",
  "What are extreme weather events?": "Extreme weather events include hurricanes, floods, and heatwaves.",
  "Am I required to report on climate risk at my institution?": "Reporting requirements depend on your location and industry regulations.",
  "Why should I worry about climate risk now? Can't I wait?": "Immediate action can mitigate long-term risks and costs."
};

const Faqs: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className='flex h-full flex-col overflow-x-hidden gap-[4.5rem]'>
      <section className='w-full p-4 bg-center bg-cover relative'>
        <div className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-93px)] bg-cover max-w-[1211px] mx-auto bg-center">
          <div className="relative w-full z-10 p-[2rem] text-center">
            <h1 className="text-[48px] font-bold mb-[1rem]">Frequently asked questions</h1>
            <span className="block mb-[2rem]">
              Discover all the common questions we encounter at Substrately relating
              <p>to who we are and the climate solutions we provide.</p>
            </span>

            <div className='relative w-full mt-[6rem] flex flex-col gap-[1rem]'>
              {questions.map((question, index) => (
                <div key={index} className=' pb-2'>
                  <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleExpand(index)}>
                    <h2 className='text-[32px] font-[600]'>{question}</h2>
                    {expanded === index ? <AiOutlineMinus size={12} /> : <AiOutlinePlus size={12} />}
                  </div>
                  {expanded === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className='overflow-hidden mt-2'
                    >
                      <p>{answers[question]}</p>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='w-full  p-4  '>
        <div className="w-full min-h-[calc(100vh-93px)] rounded-xl flex items-center bg-[#002624] justify-center bg-cover max-w-[1300px] mx-auto bg-center " >
          <div className="relative z-10 p-[2rem] text-center text-white">
            <h1 className="text-[28px] font-bold text-[3rem] mb-[1rem]">Unlock the power of climate risk forecasting with substrately</h1>
            <span className="block mb-[2rem] text-[2rem] text-[#C3C3C3]">
            Contact us today to learn more and schedule a demo
            </span>
            <RequestDemoButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
