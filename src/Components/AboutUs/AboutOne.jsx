import React,{useState} from 'react';
import home_main from "../../assets/homeMain.png";
import aboutMobile from "../../assets/Frame 175 (3).png"; // You'll need a mobile-optimized image
import Frame from "../../assets/Frame 19.png";
import Searchbar from "../../assets/Search bar.png";
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import HomeGroup from "../../assets/HomeGroup.png"; // Import your overlay image here
function AboutOne() {
        const navigate = useNavigate();
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
        const menuItems = [
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/Service' },
            { name: 'Sub Services', path: '/SubService' },
            { name: 'About Us', path: '/About' },
            { name: 'Contact', path: '/ContactUs' },
        ];
    
    return (
        <div>
           {/* Desktop and Tablet View */}
<div className='hidden md:block'>
    <div className='min-h-screen object-cover relative overflow-hidden'>
        {/* Hero Text Section */}
        <div className='absolute z-10 inset-0 flex flex-col justify-start items-end pt-[8vh] md:pt-[12vh] lg:pt-[14vh] xl:pt-[16vh] 2xl:pt-[18vh] pr-[5%] md:pr-[8%] lg:pr-[12%] xl:pr-[16%] 2xl:pr-[20%]'>
            <div className='text-right w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[697px] xl:max-w-[900px] 2xl:max-w-[1100px]'>
                <p className="text-[#FFFBF3] font-open-sans text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] font-bold normal-case mb-2 md:mb-4">
                    Who We Are
                </p>
                <h1 className="text-[#ffffff] font-['Playfair_Display'] text-[36px] md:text-[64px] lg:text-[80px] xl:text-[96px] 2xl:text-[120px] font-extrabold leading-[1.1] md:leading-[1.1] lg:leading-[100px] xl:leading-[110px] 2xl:leading-[120px] text-left">
                    Empowering Your Legal Journey Across Australia
                </h1>
            </div>
        </div>

        <img
            src={HomeGroup} // import and provide your overlay image
            alt="Overlay Decorative"
            className="absolute left-1/2 -translate-x-1/2 bottom-30 md:bottom-32 lg:bottom-72 4k:bottom-[30rem] w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[1200px] 2xl:w-[1600px] h-auto object-contain opacity-95 z-20"
            style={{ pointerEvents: 'none' }}
        />

        {/* Background Image */}
        <img
            src={home_main}
            alt="About Us"
            className="w-full min-h-screen object-cover"
        />
    </div>
</div>


            {/* Mobile View */}
            <div className='block md:hidden relative'>
                <div className='relative min-h-screen overflow-hidden'>
                    {/* Hero Text Section - Mobile */}
                    <div className='absolute z-10 top-[15%] sm:top-[18%] left-[5%] right-[5%]'>
                        <p className="text-[#FFFBF3] font-open-sans text-[14px] sm:text-[16px] font-bold normal-case mb-2">
                            Who We Are
                        </p>
                        <h1 className="text-[#ffffff] font-['Playfair_Display'] text-[28px] sm:text-[32px] font-extrabold leading-[1.2] sm:leading-[1.1]">
                            Empowering Your Legal Journey Across Australia
                        </h1>
                    </div>

                    {/* Commitment Section - Mobile */}
                    <div className='absolute z-10 top-[45%] sm:top-[50%] left-1/2 transform -translate-x-1/2 w-full px-4'>
                        <div className='max-w-[350px] sm:max-w-[400px] mx-auto text-center'>
                            <h1 className="text-[32px] sm:text-[36px] text-[#023437] font-['Playfair_Display'] font-bold leading-tight mb-4 sm:mb-6">
                                Our Commitment
                            </h1>
                            <div className="space-y-4 sm:space-y-6 text-left">
                                <div className="text-[#023437] font-open-sans text-[12px] sm:text-[14px] font-semibold leading-[1.4] sm:leading-[1.3]">
                                    <p className="mb-3 sm:mb-4">
                                        Personalized Matching: Utilizing advanced algorithms to connect you with lawyers who specialize in your specific legal matter.
                                    </p>
                                    <p>
                                        Comprehensive Services: Offering assistance in areas such as personal injury, medical malpractice, mass tort litigation, and more.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Background Image - Mobile */}
                    <img
                        src={aboutMobile}
                        alt="About Us"
                        className="w-full min-h-screen object-cover"
                    />

                    {/* Navigation Component */}
                    <div className="absolute top-0 left-0 w-full z-[1000]">
                        <NavBar />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutOne;