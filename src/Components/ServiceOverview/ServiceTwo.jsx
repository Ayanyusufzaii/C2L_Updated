import React , { useEffect }from 'react';
import Frame from "../../assets/Frame 111.png";
import Frame2 from "../../assets/Frame 114.png";
import Frame3 from "../../assets/Frame 115.png";
import { useNavigate } from 'react-router-dom';
import Framem1 from "../../assets/Frame 170.png";
import Framem2 from "../../assets/Frame 1711.png";
import Framem3 from "../../assets/Frame 1701.png";

function ServiceTwo() {
    const navigate = useNavigate();
    useEffect(() => {
            window.scrollTo(0, 0); 
        }, []);
    return (
        <div >
            {/* Desktop View */}
            <div className="hidden md:block overflow-hidden ml-5">
                <div className='p-16 sticky'>
                    <h1 className="w-[508px] text-[rgba(2,52,55,0.56)] font-['Playfair_Display'] text-[128px] font-extrabold leading-[130px]">
                        Our
                    </h1>
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-[128px] font-extrabold leading-[130px]">
                        Expertise
                    </h1>
                    {/* <p className="text-[#023437] text-right font-open-sans text-[20px] font-[600] leading-[normal] mt-[-5%] w-[276px] float-end mr-[3%]">
                        Feedback from clients we've had the privilege to serve.
                    </p> */}

                    <div className="w-[1370px] h-[2px] bg-[rgba(2,52,55,0.54)]"></div>
                </div>
                <div>
                    <img
                        src={Frame}
                        alt="Service 1"
                        className="h-full w-[91%] object-cover mt-3 ml-16 mb-[5%]"
                    />
                    <button className="mt-[-19%] ml-32 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("/MassTort")}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Frame2}
                        alt="Service 2"
                        className="h-full w-[91%] object-cover mt-3 ml-16 mb-[5%]"
                    />
                     <button className="mt-[-17%] ml-32 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("/PersonalInjury")}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Frame3}
                        alt="Service 3"
                        className="h-full w-[91%] object-cover mt-3 ml-16 mb-[5%]"
                    />
                     <button className="mt-[-19%] ml-32 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("/ClassAction")}>
                        Learn more
                    </button>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden p-2 overflow-hidden">
                <div className='pt-8 pb-4'>
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px]">
                       Our Expertise
                    </h1>
                    {/* <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px]">
                        Services
                    </h1> */}
                    <div className="w-[398px] h-[1px] bg-[rgba(2,52,55,0.54)] mt-4"></div>

                    {/* <p className="text-[#023437] font-['Open Sans'] text-[16px] font-[600] leading-normal mt-4 w-[273px]">
                        Feedback from clients we've had the privilege to serve.
                    </p> */}

                </div>
                <div className="mt-4">
                    <img
                        src={Framem1}
                        alt="Service 1"
                        className=" w-[100%]  object-cover mb-6"
                    />
                    <button className="mt-[-25%] ml-5 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold" onClick={() => navigate('/MassTort')}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Framem2}
                        alt="Service 2"
                        className=" w-[100%] object-cover mb-6"
                    />
                    <button className="mt-[-25%] ml-5 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold"  onClick={() => navigate("/PersonalInjury")}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Framem3}
                        alt="Service 3"
                        className=" w-[100%]  object-cover mb-6"
                    />
                    <button className="mt-[-30%] ml-5 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("/ClassAction")}>
                        Learn more
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ServiceTwo;