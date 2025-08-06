import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import phone from "../assets/Group 40.png";
import mail from "../assets/Frame 173.png";
import twitter from "../assets/twitter.png"; // Note: 'twitter' is imported but 'Frame7' is used for the Twitter icon
import Frame7 from "../assets/Frame 7.png";
import logoo from "../assets/logoo.png";
import FooterGroup from "../assets/FooterGroup.png"; // Note: 'FooterGroup' is imported but not used in the component


function Footer() {
  return (
    <div className="bg-[#023437] text-white w-full">
      <div className="max-w-7xl mx-auto pt-8 md:pt-16 px-4 sm:px-6 lg:px-8"> {/* Added responsive padding for all screen sizes */}

        {/* Desktop and Tablet Layout - hidden on screens smaller than md */}
        <div className="hidden md:block lg:ml-[-3%]"> {/* Adjusted margin for larger screens, ensures content aligns well */}
          <div className="flex flex-col lg:flex-row justify-between items-center border-b border-teal-800 pb-4 px-4">
            {/* Contact Information */}
            <div className="flex flex-col space-y-2 mb-4 lg:mb-0"> {/* Added margin-bottom for tablet layout before flex-row kicks in */}
              <div className="flex items-center">
                <img className="mr-2 w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]" src={phone} alt="Phone Icon" /> {/* Responsive image size */}
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-normal"> {/* Responsive font size for phone number */}
                  +61 470 695 167
                </span>
              </div>
              <div className="flex items-center">
                <img className="mr-2 w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]" src={mail} alt="Mail Icon" /> {/* Responsive image size */}
                <span className="text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold"> {/* Responsive font size for email */}
                  info@connect2lawyer.com.au
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
<div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 lg:mt-0">
  {/* First row */}
  <div className="rounded-full border border-white p-2 flex items-center justify-center">
    <a
      href="https://www.linkedin.com/company/connect2lawyer/"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white"
    >
      <Linkedin size={18} /> {/* Consistent icon size */}
    </a>
  </div>
  <div className="rounded-full border border-white p-2 flex items-center justify-center">
    <a
      href="https://x.com/Connect2Lawyer"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white"
    >
      <img src={Frame7} alt="Twitter Icon" className="w-4 h-4" /> {/* Consistent icon size */}
    </a>
  </div>
  <div className="rounded-full border border-white p-2 flex items-center justify-center">
    <a
      href="https://www.facebook.com/profile.php?id=61570446132760"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white"
    >
      <Facebook size={18} /> {/* Consistent icon size */}
    </a>
  </div>
  
  {/* Second row */}
  <div className="rounded-full border border-white p-2 flex items-center justify-center">
    <a
      href="https://www.instagram.com/connect2lawyer/"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white"
    >
      <Instagram size={18} /> {/* Consistent icon size */}
    </a>
  </div>
  <div className="rounded-full border border-white p-2 flex items-center justify-center">
    <a
      href="https://www.youtube.com/@connect2lawyer"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white"
    >
      {/* YouTube SVG Icon */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.12C19.19 3.5 12 3.5 12 3.5s-7.19 0-9.39.566A2.994 2.994 0 0 0 .502 6.186C0 8.39 0 12 0 12s0 3.61.502 5.814a2.994 2.994 0 0 0 2.108 2.12C4.81 20.5 12 20.5 12 20.5s7.19 0 9.39-.566a2.994 2.994 0 0 0 2.108-2.12C24 15.61 24 12 24 12s0-3.61-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </a>
  </div>
  <div className="rounded-full border border-white p-2 flex items-center justify-center">
    <a
      href="https://www.tiktok.com/@connect2lawyer"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-white"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 8.306c-.48.045-.97.07-1.47.07-1.98 0-3.02-.9-3.02-2.68V2.5h-2.13v12.13c0 1.13-.92 2.05-2.05 2.05s-2.05-.92-2.05-2.05c0-1.13.92-2.05 2.05-2.05.13 0 .26.01.38.03V10.3c-.13-.01-.25-.02-.38-.02-2.25 0-4.08 1.83-4.08 4.08 0 2.25 1.83 4.08 4.08 4.08 2.25 0 4.08-1.83 4.08-4.08V9.98c.86.38 1.81.59 2.8.59.5 0 .99-.05 1.46-.14V8.306z" />
      </svg>
    </a>
  </div>
</div>
          </div>

          {/* Connect2Lawyer Title for Desktop/Tablet */}
          <div className="py-6 lg:py-8 w-full flex justify-center lg:pl-4 xl:pl-10">
            {/* For 4K/laptop/tab: show a full-width image, for mobile: keep previous layout */}
            <div className="hidden md:block w-full">
              <img src={FooterGroup} alt="Connect2Lawyer Logo" className="w-full h-auto object-contain max-h-[180px] xl:max-h-[260px] 2xl:max-h-[320px] mx-auto" />
            </div>
            
          </div>
        </div>

        {/* Mobile Layout - shown on screens smaller than md */}
        <div className="md:hidden block overflow-x-hidden">
          <div>
            
            {/* Connect2Lawyer Title for Mobile */}
            <div className="py-3 w-2/3 ">
              <img src={FooterGroup} />
            </div>

            {/* Contact info for Mobile */}
            <div className="flex flex-col space-y-4 border-b border-teal-800 pb-6">
              <div className="flex items-center">
                <img className="mr-2 w-10 h-10" src={phone} alt="Phone Icon" />
                <span className="text-lg sm:text-xl font-semibold">
                  +61 470 695 167
                </span>
              </div>

              <div className="flex items-center">
                <img className="mr-2 w-10 h-10" src={mail} alt="Mail Icon" />
                <span className="text-sm sm:text-base font-semibold">
                  info@connect2lawyer.com.au
                </span>
              </div>

              {/* Social icons and policy links for Mobile */}
                          {/* Social Media Icons */}
            <div className="flex space-x-2 sm:space-x-4 mt-4 lg:mt-0">
               {/* Adjusted spacing and margin-top for responsive layout */}
               <div className="rounded-full border border-white p-2 flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/company/connect2lawyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white"
                >
                  <Linkedin size={18} /> {/* Consistent icon size */}
                </a>
              </div>
               <div className="rounded-full border border-white p-2 flex items-center justify-center">
                <a
                  href="https://x.com/Connect2Lawyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white"
                >
                  <img src={Frame7} alt="Twitter Icon" className="w-4 h-4" /> {/* Consistent icon size */}
                </a>
              </div>
              <div className="rounded-full border border-white p-2 flex items-center justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61570446132760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white"
                >
                  <Facebook size={18} /> {/* Consistent icon size */}
                </a>
              </div>
              <div className="rounded-full border border-white p-2 flex items-center justify-center">
                <a
                  href="https://www.instagram.com/connect2lawyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white"
                >
                  <Instagram size={18} /> {/* Consistent icon size */}
                </a>
              </div>
              <div className="rounded-full border border-white p-2 flex items-center justify-center">
  <a
    href="https://www.youtube.com/@connect2lawyer"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-white"
  >
    {/* YouTube SVG Icon */}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a2.994 2.994 0 0 0-2.108-2.12C19.19 3.5 12 3.5 12 3.5s-7.19 0-9.39.566A2.994 2.994 0 0 0 .502 6.186C0 8.39 0 12 0 12s0 3.61.502 5.814a2.994 2.994 0 0 0 2.108 2.12C4.81 20.5 12 20.5 12 20.5s7.19 0 9.39-.566a2.994 2.994 0 0 0 2.108-2.12C24 15.61 24 12 24 12s0-3.61-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  </a>
</div>
<div className="rounded-full border border-white p-2 flex items-center justify-center">
  <a
    href="https://www.tiktok.com/@connect2lawyer"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-white"
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 8.306c-.48.045-.97.07-1.47.07-1.98 0-3.02-.9-3.02-2.68V2.5h-2.13v12.13c0 1.13-.92 2.05-2.05 2.05s-2.05-.92-2.05-2.05c0-1.13.92-2.05 2.05-2.05.13 0 .26.01.38.03V10.3c-.13-.01-.25-.02-.38-.02-2.25 0-4.08 1.83-4.08 4.08 0 2.25 1.83 4.08 4.08 4.08 2.25 0 4.08-1.83 4.08-4.08V9.98c.86.38 1.81.59 2.8.59.5 0 .99-.05 1.46-.14V8.306z" />
    </svg>
  </a>
</div>
              
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom Bar */}
      <div className="border-t border-teal-800 mt-8 pt-4 pb-4 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300 w-full max-w-full">

        <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0 truncate whitespace-normal break-words">Copyright ©2025 C2L All Rights Reserved</div>
        <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end gap-x-2 gap-y-1 text-center">
          <a href="#" className="hover:underline whitespace-nowrap">Privacy Policy</a>
          <a href="#" className="hover:underline whitespace-nowrap">Disclaimer</a>
        </div>
      </div>
    </div>
  )
}

export default Footer; 