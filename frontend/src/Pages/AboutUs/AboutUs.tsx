import Frame1 from '../../assets/Frame 2512.svg'
import landDisplay from '../../assets/Frame 1321318865.svg'
import TeamImage from '../../assets/The team.svg'
import RequestDemoButton from '../../components/common/RequestDemoButton/RequestDemoButton'

const AboutUs = () => {
  return (
    <div className='flex h-full flex-col overflow-x-hidden gap-[4.5rem]'>

      <section style={{ backgroundImage: `url(${Frame1})` }} className='w-full p-4 bg-center bg-cover relative'>
        <div className="absolute inset-0 bg-black opacity-[.7]"></div>
        <div className="w-full min-h-[calc(100vh-93px)] flex items-center justify-center bg-cover max-w-[1300px] mx-auto bg-center " >
          <div className="relative flex flex-col items-center justify-center z-10 p-[2rem] text-center text-white">
            <h1 className="text-[28px] font-bold font-[700] text-[64px] mb-[1rem]">About Us</h1>
            <span className="block text-[2rem] mb-[2rem]">
              Africa's leading provider of climate risk forecasting tools, combining ai
              <p> and industry expertise to drive informed decision-making</p>
            </span>
          </div>
        </div>
      </section>

      <section className='flex flex-col max-w-[1300px] mx-auto p-4 mt-[7rem] gap-[1rem] text-center'>
        <h1 className=' text-[3rem]  font-[600] text-[#007A3D]'>Our Mission</h1>
        <span className=' text-[2rem] text-[#4B5162]'>
          building resilience and sustainability in Africa's financial
          <p>
            sector to thrive in a changing world
          </p>
        </span>
      </section>

      <div className="p-4">
      <div className='bg-cover w-full h-[574px] sm:h-auto rounded-lg overflow-hidden max-w-[859px] mx-auto '>
      <img className='w-full object-cover h-full ' src={landDisplay} alt="" />
      </div>
      </div>


      <section className='flex flex-col max-w-[1300px] mx-auto mt-[7rem] gap-[1rem] text-center'>
        <h1 className=' text-[3rem]  font-[600] text-[#007A3D]'>Data Driven Solutions</h1>
        <span className=' text-[2rem] text-[#4B5162]'>
          our platform offers real time data insights and comprehensive
          <p>
            features including:
          </p>
        </span>
      </section>


      <section className='flex grid sm:grid-cols-2 p-4 gap-[1rem] max-w-[1300px] mx-auto '>

        <div className='flex flex-col justify-center text-center sm:text-start sm:justify-start gap-[1rem]'>
          <h1 className='font-[700] text-center sm:text-start text-[3rem] text-[#191919]'>Geospatial risking mapping</h1>
          <span className='font-[400] text-[28px] text-[#4B5162] font-[400]'>
            Identify areas at risk from climate-related hazards such as floods, storms, and wildfires. Our geospatial risk mapping tool provides detailed insights into the potential impact on infrastructure and assets,
            allowing you to prioritize risk mitigation efforts effectively.
          </span>
          <span className='text-[#009F95]  mt-[2rem] mx-[1rem] text-[20px] font-[500]'>
            Read More
          </span>
        </div>
        <div className='flex flex-col justify-center text-center sm:text-start sm:justify-start gap-[1rem]'>
          <h1 className='font-[700] text-center sm:text-start text-[3rem] text-[#191919]'>Scenario Analysis</h1>
          <span className='font-[400] text-[28px] text-[#4B5162] font-[400]'>
            Predict how climate change may impact your operations, investments, and portfolios. Our scenario analysis tool helps you anticipate future trends and develop strategic plans that align with evolving climate conditions,
            ensuring resilience and long-term sustainability
          </span>
          <div className='text-[#009F95]  mt-[2rem] mx-[1rem] text-[20px] font-[500]'>
            Read More
          </div>
        </div>
        <div className='flex flex-col justify-center sm:justify-start gap-[1rem]'>
          <h1 className='font-[700] text-center sm:text-start text-[3rem] text-[#191919]'>Stress Stressing</h1>
          <span className='font-[400] text-[28px] text-center sm:text-start text-[#4B5162] font-[400]'>
            Evaluate your institution’s ability to withstand major climate related events and disruptions. Our stress testing and resilience assessment tool measures your preparedness and identifies areas for improvement
          </span>

        </div>
        <div className='flex flex-col justify-center text-center sm:text-start sm:justify-start  gap-[1rem]'>
          <h1 className='font-[700] text-center sm:text-start text-[3rem] text-[#191919]'>Machine Learning Asset Exposure Assessment</h1>
          <span className='font-[400] text-[28px] text-[#4B5162] font-[400]'>
            Determine which assets are most vulnerable to climate-related risks. Our machine learning asset exposure assessment tool utilizes advanced algorithms to analyze data
          </span>

        </div>
      </section>

      <section className='flex flex-col max-w-[1300px] mx-auto mt-[7rem] gap-[1rem] text-center'>
        <h1 className=' text-[3rem]  font-[600] text-[#007A3D]'>Building Resilience</h1>
        <span className=' text-[2rem] text-[#4B5162]'>
          Committed to building resilience and sustainability in Africa's financial sector,
          we're here to help you stay ahead of the curve
        </span>
      </section>

      <div className="p-4">
      <div className='bg-cover w-full h-[574px] sm:h-auto rounded-lg overflow-hidden max-w-[859px] mx-auto '>
      <img className='w-full object-cover h-full ' src={landDisplay} alt="" />
      </div>
      </div>



      <section className="flex  flex-col items-center p-4 justify-center max-w-[1300px] mx-auto sm:flex-row gap-[1rem]">
        <div className='flex flex-col items-center'>
          <span className='flex gap-[1rem] items-center'>
            <span className='text-[20px] font-[400]'>
              Over
            </span>
            <span className='text-[40px] font-[700] text-[#1C1F25]'>
              90%
            </span>
          </span>
          <span className="text-center" >
            of African's banks and insurance selection
            <p> climate changes as a business risk</p>
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='flex gap-[1rem] items-center'>
            <span className='text-[20px] font-[400]'>
              Over
            </span>
            <span className='text-[40px] font-[700] text-[#1C1F25]'>
              20%
            </span>
          </span>
          <span className="text-center" >
          Of African’s financial institutions have 
          <p>comprehensive climate risk management</p>
          </span>
        </div>
        <div className='flex flex-col items-center'>
          <span className='flex gap-[1rem] items-center'>
            <span className='text-[20px] font-[400]'>
              Over
            </span>
            <span className='text-[40px] font-[700] text-[#1C1F25]'>
              80%
            </span>
          </span>
          <span className="text-center" >
          Of banking and insurance executives
          <p>
          prioritize climate management
          </p>
          </span>
        </div>

      
       
      </section>


      <section className='flex flex-col max-w-[1300px] p-w mx-auto mt-[7rem] gap-[1rem] text-center'>
        <h1 className=' text-[3rem]  font-[600] text-[#007A3D]'>Meet the Team</h1>
        <span className=' text-[2rem] text-[#4B5162]'>
          expert in climate science, data analytics and financial services delivering innovative
          solutions tailored to your needs
        </span>
      </section>


      <div className="p-4">
      <div className='bg-cover w-full h-[574px] sm:h-auto rounded-lg overflow-hidden max-w-[859px] mx-auto '>
      <img className='w-full object-cover h-full ' src={TeamImage} alt="" />
      </div>
      </div>




      <section className='w-full  p-4  bg-[#002624]'>
        <div className="w-full min-h-[calc(100vh-93px)] flex  items-center justify-center bg-cover max-w-[1300px] mx-auto bg-center " >
          <div className="relative z-10 p-[2rem] text-center text-white">
            <h1 className="text-[28px] font-bold mb-[1rem]">Contact Us Today!</h1>
            <span className="block mb-[2rem]">
              Together, Lets unlock new opportunities, protect assets and drive
              <p>
                long term success in a rapid changing climate
              </p>
            </span>
            <RequestDemoButton/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs
