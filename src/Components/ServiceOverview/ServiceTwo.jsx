import React , { useEffect }from 'react';
import Frame from "../../assets/Frame 111.png";
import Frame2 from "../../assets/Frame 114.png";
import Frame3 from "../../assets/Frame 115.png";
import { useNavigate } from 'react-router-dom';
import Framem1 from "../../assets/masstortmobile.png";
import Framem2 from "../../assets/personalmobile.png";
import Framem3 from "../../assets/classmobile.png";

function ServiceTwo() {
    const navigate = useNavigate();
    useEffect(() => {
            window.scrollTo(0, 0); 
        }, []);
    return (
        <div >
            {/* Desktop View */}
            <div className="hidden md:block overflow-hidden ">
         <div className="p-6 md:p-10 lg:p-12 w-full">
  <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-0">
    
    {/* Left: "Our" and "Expertise" stacked */}
    <div className="flex flex-col leading-none">
      <h1 className="text-[#C09F53] font-['Playfair_Display'] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[128px] leading-tight">
        Our
      </h1>
      <h1 className="text-[#023437] font-['Playfair_Display'] font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[128px] leading-tight">
        Expertise
      </h1>
    </div>

    {/* Right: Subtext aligned with "Expertise" (not floating) */}
    <div className="mt-2 lg:mt-[90px] max-w-md w-full lg:w-auto">
      <p className="text-[#C09F53] font-open-sans font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-right">
        Get trusted legal solutions tailored to your needs.
      </p>
    </div>

  </div>
</div>

                <div>
                    <img
                        src={Frame}
                        alt="Service 1"
                        className="h-full w-[91%] object-cover mt-3 ml-12 mb-[5%]"
                    />
                    <button className="mt-[-17%] ml-20 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[#023437] text-[#023437] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("/Service/MassTort")}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Frame2}
                        alt="Service 2"
                        className="h-full w-[91%] object-cover mt-3 ml-12 mb-[5%]"
                    />
                    <button className="mt-[-17%] ml-20 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[#ffffff] text-[#ffffff] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("/Service/PersonalInjury")}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Frame3}
                        alt="Service 3"
                        className="h-full w-[91%] object-cover mt-3 ml-12 mb-[5%]"
                    />
                    <button className="mt-[-17%] ml-20 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[#023437] text-[#023437] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("/Service/ClassAction")}>
                        Learn more
                    </button>
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden p-2 overflow-hidden">
                <div className='pt-8 pb-4'>
                    <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px]">
                       <span className='text-[#C09F53]'>Our</span> Expertise
                    </h1>
                    {/* <h1 className="text-[#023437] font-['Playfair_Display'] text-[48px] font-extrabold leading-[50px]">
                        Services
                    </h1> */}
                   

                    <p className="text-[#C09F53] font-['Open Sans'] text-[14px] font-[600] leading-none mt-4 w-[273px]">
                        Get trusted legal solutions <br></br>
tailored to your needs.
                    </p>

                </div>
                <div className="mt-4">
                    <img
                        src={Framem1}
                        alt="Service 1"
                        className=" w-[100%]  object-cover mb-6"
                    />
                    <button className="mt-[-25%] ml-5 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold" onClick={() => navigate('/Service/MassTort')}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Framem2}
                        alt="Service 2"
                        className=" w-[100%] object-cover mb-6"
                    />
                    <button className="mt-[-25%] ml-5 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold"  onClick={() => navigate("Service/PersonalInjury")}>
                        Learn more
                    </button>
                </div>
                <div>
                    <img
                        src={Framem3}
                        alt="Service 3"
                        className=" w-[100%]  object-cover mb-6"
                    />
                    <button className="mt-[-25%] ml-5 absolute z-10 inline-flex px-6 py-2.5 justify-center items-center rounded-[40px] border border-[rgba(255,251,243,0.80)] text-[#FFFBF3] font-['Open Sans'] text-sm font-bold" onClick={() => navigate("Service/ClassAction")}>
                        Learn more
                    </button>
                </div>

            </div>
        </div>
    );
}

export default ServiceTwo;