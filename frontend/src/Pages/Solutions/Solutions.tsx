import Frame1 from '../../assets/Frame 2512.svg'
import Satellite from '../../assets/satellite.svg'
import Ellipse from '../../assets/Ellipse2.svg'
import Analysis from '../../assets/analysis.svg'
import Machine from '../../assets/Machine.svg'
import BookFrame from '../../assets/book-frame.svg'
import RequestDemoButton from '../../components/common/RequestDemoButton/RequestDemoButton'

const Solutions = () => {
  return (
    <div className='flex h-full flex-col overflow-x-hidden gap-[4.5rem]'>

      <section style={{ backgroundImage: `url(${Frame1})` }} className='w-full p-4 bg-center bg-cover relative'>
        <div className="absolute inset-0 bg-black opacity-[.7]"></div>
        <div className="w-full min-h-[calc(100vh-93px)] flex items-center justify-center bg-cover max-w-[1300px] mx-auto bg-center " >
          <div className="relative flex flex-col items-center justify-center z-10 p-[2rem] text-center text-white">
            <h1 className="text-[28px] font-bold font-[700] text-[64px] mb-[1rem]">Our Solutions</h1>
            <span className="block text-[2rem] mb-[2rem]">
              We are your trusted partner in climate risk forcasting for financial
              <p>institutions in Africa</p>
            </span>
          </div>
        </div>
      </section>

      <section className='flex flex-col max-w-[1300px] mx-auto p-4 mt-[7rem] gap-[1rem] text-center'>
        <h1 className=' text-[3rem]  font-[600] text-[#007A3D]'>We Help You Mange  Your Risk</h1>
      </section>


      <section className='flex flex-col max-w-[1300px] mx-auto lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
        <div className='flex flex-col gap-[1rem]'>
          <h1 className='font-[700] text-center sm:text-start text-[3rem] text-[#191919]'>Geospatial risking mapping</h1>
          <span className='font-[400] text-[28px] text-[#4B5162] font-[400]'>
            Identify areas at risk from climate-related hazards such as floods, storms, and wildfires. Our geospatial risk mapping tool provides detailed insights into the potential impact on infrastructure and assets,
            allowing you to prioritize risk mitigation efforts effectively.
          </span>
          <span className='text-[#009F95]  mt-[2rem] mx-[1rem] text-[20px] font-[500]'>
            Get In Touch
          </span>
        </div>
        <img className='w-full max-w-[699px]' src={Satellite} alt="" />
      </section>


      <section className='w-full p-4'>
        <div className='flex max-w-[1300px] mx-auto  flex-col lg:flex-row max-w-[1300px] mx-auto mt-[5rem] items-center justify-center gap-[3rem]'>
          <div>
            <h1 className='font-[700] text-center sm:text-start text-[3rem] text-[#191919]'>Scenario Analysis</h1>
            <span className='font-[400] text-[28px] text-[#4B5162] font-[400]'>
              Predict how climate change may impact your operations, investments, and portfolios. Our scenario analysis tool helps you anticipate future trends and develop strategic plans that align with evolving climate conditions,
              ensuring resilience and long-term sustainability
            </span>
            <div className='text-[#009F95]  mt-[2rem] mx-[1rem] text-[20px] font-[500]'>
              Get In Touch
            </div>
          </div>
          <img className='w-full max-w-[699px]' src={Analysis} alt="" />
        </div>
      </section>

      <section className='w-full p-4'>
        <div className='flex  max-w-[1300px] mx-auto p-[1rem] flex-col lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
          <div className='text-[#4B5162]'>
            <h1 className='font-[700] text-center sm:text-start text-[3rem] '>Stress Testing and Resilience Assessment</h1>
            <span className='font-[400] text-center sm:text-start text-[28px]  font-[400]'>
              Evaluate your institution's ability to withstand major climate-related events and disruptions. Our stress testing and resilience assessment tool measures your preparedness and identifies areas for improvement,
              enabling you to build resilience and mitigate potential losses.
            </span>
            <div className='text-[#009F95] mt-[2rem] mx-[1rem] text-[20px] font-[500]'>
              Get In Touch
            </div>
          </div>
          <img className='w-full max-w-[699px]' src={Ellipse} alt="" />
        </div>
      </section>

      <section className='flex p-4 flex-col max-w-[1300px] mx-auto lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
        <div>
          <h1 className='font-[700] text-center sm:text-start text-[3rem] text-[#191919]'>Machine Learning Exposure Assessment</h1>
          <span className='font-[400] text-center sm:text-start text-[28px] text-[#4B5162] font-[400]'>
            Determine which assets are most vulnerable to climate-related risks. Our machine learning asset exposure assessment tool utilizes advanced algorithms to analyze data and prioritize efforts to protect critical infrastructure,
            minimizing potential losses and maximizing asset resilience.
          </span>
          <div className='#009F95 mt-[2rem] mx-[1rem] text-[20px] font-[500]'>
            Get In Touch
          </div>
        </div>
        <img className='w-full max-w-[699px]' src={Machine} alt="" />
      </section>

    
      <section className='text-center max-w-[1300px] mx-auto text-[4rem] p-4 max-w-[1300px] mx-auto font-[400]'>
      “banks and insurance in Africa face big financial  losses from
      <p>
      climate disruptions, with up to <span className='font-[500]'>40%</span>
      </p>
      <p>
      of their portfolio at risk, totaling over <span className='font-[500]'>$100</span> billion by 2030”
      </p>
      </section>


  
      <section className=' w-full flex flex-col items-center sm:items-start text-center sm:text-start max-w-[1300px] p-4 mx-auto mt-[7rem] gap-[1rem] text-left'>
        <h1 className=' text-[3rem]  font-[600] '>why people use substrately for
        <p>
        climate risk forecasting
        </p>
          </h1>
        <span className=' text-[2rem] text-[#4B5162]'>
        We're your trusted partner in Africa
        </span>
      </section>


      <section className='flex grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 p-4 gap-[1rem] max-w-[1300px] mx-auto '>

        <div className='flex flex-col justify-center text-center sm:text-start sm:justify-start gap-[1rem]'>
          <img className='w-[28px] h-[28px]' src={BookFrame} alt="" />
          <h1 className='font-[700] text-center sm:text-start text-[1.5rem] text-[#191919]'>Tailored Solutions</h1>
          <span className='font-[400] text-[18px] text-[#4B5162] font-[400]'>
          our tools are specifically designed for the unique challenge and need of financial institution in africa
          </span>
          
        </div>
        <div className='flex flex-col justify-center text-center sm:text-start sm:justify-start gap-[1rem]'>
          <img className='w-[28px] h-[28px]' src={BookFrame} alt="" />
          <h1 className='font-[700] text-center sm:text-start text-[1.5rem] text-[#191919]'>Cutting Edge Technology</h1>
          <span className='font-[400] text-[18px] text-[#4B5162] font-[400]'>
          our team of climate scientists, data analysis and financial experts are dedicated to helping you succeed
          </span>
          
        </div>
        <div className='flex flex-col justify-center text-center sm:text-start sm:justify-start gap-[1rem]'>
          <img className='w-[28px] h-[28px]' src={BookFrame} alt="" />
          <h1 className='font-[700] text-center sm:text-start text-[1.5rem] text-[#191919]'>Expert Support</h1>
          <span className='font-[400] text-[18px] text-[#4B5162] font-[400]'>
            Identify areas at risk from climate-related hazards such as floods, storms, and wildfires. Our geospatial risk mapping tool provides detailed insights into the potential impact on infrastructure and assets,
            allowing you to prioritize risk mitigation efforts effectively.
          </span>
          
        </div>
        <div className='flex flex-col justify-center text-center sm:text-start sm:justify-start gap-[1rem]'>
          <img className='w-[28px] h-[28px]' src={BookFrame} alt="" />
          <h1 className='font-[700] text-center sm:text-start text-[1.5rem] text-[#191919]'>Real Time Insight</h1>
          <span className='font-[400] text-[18px] text-[#4B5162] font-[400]'>
          gain access to real time data and analytics to make informed decisions and stay ahead of the curve.
          </span>
        </div>
        
        
        
      </section>







      <section className='w-full  p-4  '>
        <div className="w-full min-h-[calc(100vh-93px)] rounded-xl flex items-center bg-[#002624] justify-center bg-cover max-w-[1300px] mx-auto bg-center " >
          <div className="relative z-10 p-[2rem] text-center text-white">
            <h1 className="text-[28px] font-bold text-[3rem] mb-[1rem]">Unlock the power of climate risk forecasting with substrately</h1>
            <span className="block mb-[2rem] text-[2rem] text-[#C3C3C3]">
            Contact us today to learn more and schedule a demo
            </span>
            <RequestDemoButton/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions
