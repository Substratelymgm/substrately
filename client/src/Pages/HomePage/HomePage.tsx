import React from 'react';
import Ai from '../../assets/AI.svg';
import Star from '../../assets/star.svg';
import Frame1 from '../../assets/Frame 2512.svg';
import Frame2 from '../../assets/Radar.svg';
import Frame3 from '../../assets/Line Styling.svg';
import Frame4 from '../../assets/Chart.svg';
import Flag1 from '../../assets/Frame 1321319640.svg';
import Flag2 from '../../assets/Frame 1321319641.svg';
import Macbook from '../../assets/MacBook Pro 16-inch Space Black Front.svg';
import Satellite from '../../assets/satellite.svg';
import Message from '../../assets/message.svg';
import Ellipse from '../../assets/Ellipse2.svg';
import Analysis from '../../assets/analysis.svg';
import Machine from '../../assets/Machine.svg';
import RequestDemoButton from '../../components/common/RequestDemoButton/RequestDemoButton';

const HomePage: React.FC = () => {
    return (
        <div className='flex flex-col overflow-x-hidden gap-[4.5rem]'>
            <section className='flex max-w-[1300px] p-4  mx-auto flex-col overflow-x-hidden gap-[4.5rem]'>
                <div className="flex flex-col lg:flex-row justify-center items-center text-center sm:text-left gap-[2rem] mt-[3rem] ">
                    <div>
                        <span className='rounded-full mx-auto sm:mx-0 flex gap-[1rem] border w-[max-content] px-[1rem] py-[.2rem] border-[#B6BCCD]'>
                            <img src={Ai} alt="icon" />
                            Top Climate Risk Tool
                        </span>
                        <div>
                            <p className='flex font-[700] text-[2.5rem] md:text-[3rem] lg:text-[4rem] flex-col'>
                                <span className='lg:whitespace-nowrap'><span className='text-[#009F95]'>Climate</span> Forecasting</span>
                                <span>tool for Financial</span>
                                <span>institutions in Africa</span>
                            </p>
                            <p className='max-w-[400px] mx-auto sm:mx-0 text-center sm:text-start w-full flex items-center justify-center'>
                                Welcome to Substrately's suite of climate risk forecasting tailored for
                                financial institutions in Africa driven by AI.
                            </p>
                            <div className='mt-[1rem]'>
                            <RequestDemoButton/>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center flex-grow w-full">
                        <div className="flex flex-wrap justify-center gap-[1rem] w-full">
                            <img className="f" src={Star} alt="Star" />
                            <img className="flex-grow max-w-[calc(33%-1rem)]" src={Frame1} alt="Frame1" />
                            <img className="flex-grow max-w-[calc(33%-1rem)]" src={Frame2} alt="Frame2" />
                        </div>
                        <div className='flex flex-wrap justify-center gap-[1rem] w-full'>
                            <img className="flex-grow max-w-[calc(50%-0.5rem)]" src={Frame3} alt="Frame3" />
                            <img className="flex-grow max-w-[calc(50%-0.5rem)]" src={Frame4} alt="Frame4" />
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex mt-[2rem] max-w-[1300px] mx-auto flex-col items-center justify-center'>
                <span>Serving customers in over 2 countries</span>
                <div className='flex mt-[2rem] gap-[1rem] '>
                    <img src={Flag1} alt="" />
                    <img src={Flag2} alt="" />
                </div>
            </section>

            <section className='flex flex-col max-w-[1300px] p-4 mx-auto md:flex-row items-center gap-[2rem]'>
                <img className='w-full object-cover flex-grow max-w-[calc(50%-0.5rem)]' src={Macbook} alt="" />
                <span className='text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center sm:text-start font-[700]'>Advanced tools to safeguard against losses</span>
            </section>

            <section className='flex flex-col max-w-[1300px] mx-auto mt-[7rem] items-center w-full justify-center'>
                <h1 className='font-[600] text-[2rem] md:text-[3rem] lg:text-[48px] w-full text-center max-w-[894px]'>All in one climate risk solution you need to empower your business</h1>
                <span className='text-[1.5rem] md:text-[2rem] lg:text-[32px] max-w-[1300px] text-center sm:text-start'>We're your trusted partner in climate risk forecasting for banks and insurance in Africa.</span>
            </section>

            <section className='flex flex-col max-w-[1300px] p-4 mx-auto lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
                <img className='w-full max-w-[699px]' src={Satellite} alt="" />
                <div className='flex flex-col gap-[1rem]'>
                    <h1 className='font-[700] text-center sm:text-start text-[2.5rem] md:text-[3rem] text-[#191919]'>Geospatial risk mapping</h1>
                    <span className='font-[400] text-[1.5rem] md:text-[2rem] lg:text-[28px] text-[#4B5162]'>
                        Identify areas at risk from climate-related hazards such as floods, storms, and wildfires. Our geospatial risk mapping tool provides detailed insights into the potential impact on infrastructure and assets,
                        allowing you to prioritize risk mitigation efforts effectively.
                    </span>
                    <span className='text-[#009F95] mt-[2rem] mx-[1rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>
                        Get In Touch
                    </span>
                </div>
            </section>

            <section className='w-full p-4 text-center sm:text-start'>
                <div className='flex max-w-[1300px] mx-auto flex-col lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
                    <div>
                        <h1 className='font-[700] text-[2.5rem] md:text-[3rem] lg:text-[3rem] text-[#191919]'>Scenario Analysis</h1>
                        <span className='font-[400] text-[1.5rem] md:text-[2rem] lg:text-[28px] text-[#4B5162]'>
                            Predict how climate change may impact your operations, investments, and portfolios. Our scenario analysis tool helps you anticipate future trends and develop strategic plans that align with evolving climate conditions,
                            ensuring resilience and long-term sustainability.
                        </span>
                        <div className='text-[#009F95] mt-[2rem] mx-[1rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>
                            Get In Touch
                        </div>
                    </div>
                    <img className='w-full object-cover max-w-[699px]' src={Analysis} alt="" />
                </div>
            </section>

            <section className='w-full text-center sm:text-start bg-[#002624]'>
                <div className='flex max-w-[1300px] mx-auto p-[1rem] flex-col lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
                    <img className='w-full max-w-[699px]' src={Ellipse} alt="" />
                    <div>
                        <h1 className='font-[700] text-white text-[2.5rem] md:text-[3rem] lg:text-[3rem]'>Stress Testing and Resilience Assessment</h1>
                        <span className='font-[400] text-[1.5rem] md:text-[2rem] lg:text-[28px] text-[#C3C3C3]'>
                            Evaluate your institution's ability to withstand major climate-related events and disruptions. Our stress testing and resilience assessment tool measures your preparedness and identifies areas for improvement,
                            enabling you to build resilience and mitigate potential losses.
                        </span>
                        <div className='text-[#009F95] mt-[2rem] mx-[1rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>
                            Get In Touch
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex p-4 text-center sm:text-start flex-col max-w-[1300px] mx-auto lg:flex-row mt-[5rem] items-center justify-center gap-[3rem]'>
                <div>
                    <h1 className='font-[700] text-[2.5rem] md:text-[3rem] lg:text-[3rem] text-[#191919]'>Machine Learning Exposure Assessment</h1>
                    <span className='font-[400] text-[1.5rem] md:text-[2rem] lg:text-[28px] text-[#4B5162]'>
                        Determine which assets are most vulnerable to climate-related risks. Our machine learning asset exposure assessment tool utilizes advanced algorithms to analyze data and prioritize efforts to protect critical infrastructure,
                        minimizing potential losses and maximizing asset resilience.
                    </span>
                    <div className='text-[#009F95] mt-[2rem] mx-[1rem] text-[1.2rem] md:text-[1.5rem] font-[500]'>
                        Get In Touch
                    </div>
                </div>
                <img className='w-full max-w-[699px]' src={Machine} alt="" />
            </section>

            <section className='flex flex-col max-w-[1300px] mx-auto mt-[7rem] gap-[1rem] text-center'>
                <h1 className='text-[2.5rem] md:text-[3rem] lg:text-[3rem] font-[600]'>Substrately User Experience</h1>
                <span className='text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-[#4B5162]'>We're your trusted partner in climate risk forecasting for banks and insurance in Africa</span>
            </section>

            <section className='w-full flex max-w-[1300px] mx-auto flex-col gap-[2rem] items-start p-[1rem] justify-center bg-[#F6F6F6]'>
                <h1 className='font-[600] text-[1.5rem] md:text-[2rem]'>Christia Partners</h1>
                <div className='text-[1rem] md:text-[1.5rem] lg:text-[28px] font-[400]'>
                    As a financial institution operating in Africa, substrately has been a game changer for our risk management strategy. It’s accurate climate risk forecasting empowers us to make informed decisions, safeguarding our investments against unpredictable weather patterns.
                    Highly recommended for its precision and reliability.
                </div>

                <div>
                    <h1 className='text-[1.5rem] md:text-[2rem] font-[700]'>Michael Adeyemi</h1>
                    <span>Head of Risk Management, Christia Partners</span>
                </div>
            </section>

            <section className='flex items-center max-w-[1300px] mx-auto text-center mt-[5rem] justify-center font-[600] text-[1.5rem] md:text-[2rem]'>
                What customers say about Substrately
            </section>

            <section className="flex flex-col max-w-[1300px] mx-auto sm:flex-row gap-[1rem]">
                <div className='flex flex-1 flex-col items-center'>
                    <span className='text-[3rem] md:text-[4rem] lg:text-[5rem]'>93%</span>
                    <span className="text-center">of financial institutions are set to have a reduction in portfolio losses</span>
                </div>
                <div className='flex flex-1 flex-col items-center'>
                    <span className='text-[3rem] md:text-[4rem] lg:text-[5rem]'>89%</span>
                    <span className="text-center">
                        increase in the number of financial institution clients (banks and insurance companies)
                    </span>
                </div>
                <div className='flex flex-1 flex-col items-center'>
                    <span className='text-[3rem] md:text-[4rem] lg:text-[5rem]'>95%</span>
                    <span className="text-center">
                        in our predictive accuracy models
                    </span>
                </div>
            </section>

            <section style={{ backgroundImage: `url(${Frame1})` }} className='w-full bg-center bg-cover relative'>
                <div className="absolute inset-0 bg-black opacity-[.7]"></div>
                <div className="w-full bg-cover max-w-[1300px] mx-auto bg-center">
                    <div className="relative z-10 p-[2rem] text-center text-white">
                        <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[28px] font-bold mb-[1rem]">Join Us Today!</h1>
                        <span className="block mb-[2rem]">
                            Let us unlock new opportunities, protect assets, and drive long
                            <p>term success in a rapidly changing climate</p>
                        </span>
                        <RequestDemoButton />
                        <div className="mt-[2rem] gap-[.3rem] flex items-center justify-center">
                            <img src={Message} alt="Message Icon" />
                            <span className='text-white'>info@substrately.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
