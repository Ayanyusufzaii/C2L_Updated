import phone from "../assets/Group 40.png";
import mail from "../assets/Frame 173.png";
import Frame7 from "../assets/Frame 7.png";
import FooterGroup from "../assets/FooterGroup.png";
import dialer from "../assets/dialicon.png";
import sms from "../assets/msgicon.png";
import yt from "../assets/yticon.png";
import insta from "../assets/instaicon.png";
import linkedin from "../assets/linkicon.png";
import tiktok from "../assets/tiktokicon.png";
import fb from "../assets/fbicon.png";
import x from "../assets/xicon.png";
import addressicon from "../assets/addressicon.png";

function Footer() {
  const handleCall = () => {
    window.location.href = "tel:+61470695167";
  };

  const handleEmail = () => {
    window.location.href = "mailto:teamup@connect2lawyer.com.au";
  };

  return (
    <div className="bg-[#023437] text-white w-full">
      <div className="max-w-7xl mx-auto pt-8 md:pt-16 px-4 sm:px-6 lg:px-8">
        {/* Desktop and Tablet Layout - hidden on screens smaller than md */}
        <div className="hidden md:block lg:ml-[-3%]">
          <div className="flex flex-col md:flex-row justify-between items-start border-b border-teal-800 pb-4 px-4">
            {/* Contact Information */}
            <div cassName="flex flex-col ">
              <div className="flex flex-col lg:flex-row lg:gap-10 space-y-2 lg:space-y-0 mb-4 md:mb-0">
                <div className="flex items-center font-opensans">
                  <img
                    className="mr-2 w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]"
                    src={dialer}
                    alt="Phone Icon"
                    onClick={handleCall}
                  />
                  <span
                    className="text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold"
                    onClick={handleCall}
                  >
                    +61 470 695 167
                  </span>
                </div>
                <div className="flex items-center">
                  <img
                    className="mr-2 w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]"
                    src={sms}
                    alt="Mail Icon"
                    onClick={handleEmail}
                  />
                  <span
                    className="text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold "
                    onClick={handleEmail}
                  >
                    teamup@connect2lawyer.com.au
                  </span>
                </div>
              </div>
              <div className="flex items-center">
                <a
                  href="https://www.google.com/maps/place/45+Monterey+Bay+Drive,+Point+Cook+VIC+3030,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    className="mr-2 w-8 h-8 md:w-10 md:h-10 lg:w-[50px] lg:h-[50px]"
                    src={addressicon}
                    alt="Address Icon"
                  />
                  <span className="text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold hover:underline break-words">
                    45 Monterey Bay Drive, Point Cook 3030, Melbourne, Victoria,
                    Australia
                  </span>
                </a>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4 md:mt-0">
              {/* First row */}
              {/* TikTok */}
              <div className="flex items-center justify-center">
                <a
                  href="https://www.tiktok.com/@connect2lawyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={tiktok}
                    alt="TikTok"
                    className="w-[42px] h-[42px]"
                  />
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-center">
                <a
                  href="https://www.linkedin.com/company/connect2lawyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="w-[42px] h-[42px]"
                  />
                </a>
              </div>

              {/* X (Twitter) */}
              <div className="flex items-center justify-center">
                <a
                  href="https://x.com/Connect2Lawyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img src={x} alt="X" className="w-[42px] h-[42px]" />
                </a>
              </div>

              {/* Second row */}
              {/* Facebook */}
              <div className="flex items-center justify-center">
                <a
                  href="https://www.facebook.com/profile.php?id=61570446132760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img src={fb} alt="Facebook" className="w-[42px] h-[42px]" />
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center justify-center">
                <a
                  href="https://www.instagram.com/connect2lawyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={insta}
                    alt="Instagram"
                    className="w-[42px] h-[42px]"
                  />
                </a>
              </div>

              {/* YouTube */}
              <div className="flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@connect2lawyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img src={yt} alt="YouTube" className="w-[42px] h-[42px]" />
                </a>
              </div>
            </div>
          </div>

          {/* Connect2Lawyer Title for Desktop/Tablet */}
          <div className="py-6 lg:py-8 w-full flex justify-center lg:pl-4 xl:pl-10">
            {/* For 4K/laptop/tab: show a full-width image, for mobile: keep previous layout */}
            <div className="hidden md:block w-full">
              <img
                src={FooterGroup}
                alt="Connect2Lawyer Logo"
                className="w-full h-auto object-contain max-h-[180px] xl:max-h-[260px] 2xl:max-h-[320px] mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Mobile Layout - shown on screens smaller than md */}
        <div className="md:hidden block overflow-x-hidden">
          <div>
            {/* Connect2Lawyer Title for Mobile - Bigger and Centered */}
            <div className="py-4 w-full flex justify-center px-4 pb-4">
              <img
                src={FooterGroup}
                alt="Connect2Lawyer Logo"
                className="w-full h-auto object-contain pb-4"
              />
            </div>

            {/* Contact info for Mobile */}
            <div className="flex flex-col space-y-4 ">
              <div className="flex items-center font-opensans">
                <img
                  className=" w-14 h-14"
                  src={dialer}
                  alt="Phone Icon"
                  onClick={handleCall}
                />
                <span
                  className="text-lg sm:text-xl font-semibold "
                  onClick={handleCall}
                >
                  +61 470 695 167
                </span>
              </div>

              <div className="flex items-center font-opensans">
                <img
                  className=" w-14 h-14"
                  src={sms}
                  alt="Mail Icon"
                  onClick={handleEmail}
                />
                <span
                  className="text-lg sm:text-base font-semibold break-words "
                  onClick={handleEmail}
                >
                  teamup@connect2lawyer.com.au
                </span>
              </div>
              <div className="flex items-center font-opensans">
                <a
                  href="https://www.google.com/maps/place/45+Monterey+Bay+Drive,+Point+Cook+VIC+3030,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    className="w-14 h-14 mr-2"
                    src={addressicon}
                    alt="Address Icon"
                  />
                  <span className="text-lg sm:text-base font-semibold hover:underline break-words">
                    45 Monterey Bay Drive, Point Cook 3030, Melbourne, Victoria,
                    Australia
                  </span>
                </a>
              </div>

              {/* Social Media Icons - Horizontal Layout, Center Aligned */}
              <div className="flex justify-center items-center px-2 pt-2">
                <div className="flex justify-between items-center w-full gap-2">
                  <a
                    href="https://www.linkedin.com/company/connect2lawyer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </a>
                  <a
                    href="https://x.com/Connect2Lawyer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={x}
                      alt="X"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61570446132760"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={fb}
                      alt="Facebook"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/connect2lawyer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={insta}
                      alt="Instagram"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@connect2lawyer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={yt}
                      alt="YouTube"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@connect2lawyer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    <img
                      src={tiktok}
                      alt="TikTok"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </a>
                </div>
              </div>

              {/* Privacy Policy and Disclaimer - Below Social Icons */}
              <div className="flex justify-center gap-4 text-xs text-gray-300 pt-4 font-opensans">
                <a href="Privacy-Policy" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="Disclaimer" className="hover:underline">
                  Disclaimer
                </a>
              </div>

              {/* Single Divider Line - Aligned with Social Icons */}
              <div className="flex justify-center px-4">
                <div className="w-full max-w-sm border-t border-teal-800"></div>
              </div>

              {/* Copyright Text - At Bottom */}
              <div className="text-center text-xs text-gray-300 pt-2 font-opensans">
                Copyright ©2025 C2L All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar - Only for Desktop */}
      <div className="hidden md:block border-t border-teal-800 mt-8 pt-4 pb-4 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 font-opensans">
        <div className="flex flex-col md:flex-row items-center justify-between text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-300 w-full max-w-full">
          <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0 truncate whitespace-normal break-words">
            Copyright ©2025 C2L All Rights Reserved
          </div>
          <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end gap-x-2 gap-y-1 text-center">
            <a
              href="Privacy-Policy"
              className="hover:underline whitespace-nowrap"
            >
              Privacy Policy
            </a>
            <a href="Disclaimer" className="hover:underline whitespace-nowrap">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
