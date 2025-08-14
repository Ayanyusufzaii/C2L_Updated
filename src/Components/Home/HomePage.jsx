import React from 'react'
import NavBar from "../NavBar"
import HomeOne from "./HomeOne"
import HomeTwo from "./HomeTwo"
import HomeSeven from './HomeSeven'
import Footer from '../Footer'
import HomeThree from './HomeThree'
import { useState, useEffect, useRef } from 'react';
import { useMeta } from "../hooks/useMeta";
// import Seo from "../Seo/Seo"
const TURNSTILE_SITE_KEY = '0x4AAAAAABpnCnFP_lyxRtVO';


// function HomePage() {
//    const [verified, setVerified] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const widgetRef = useRef(null);
//   const scriptLoadedRef = useRef(false);
 
//   return (
//     <div className='overflow-hidden'>
//       <NavBar />
//       <HomeOne />
//       <HomeThree />
//       <HomeTwo />
//       <HomeSeven />
//       <Footer />
//     </div>
//   )
// }

// export default HomePage



const HomeMain = () => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const widgetRef = useRef(null);
  const scriptLoadedRef = useRef(false);
 
  useEffect(() => {
    // Check if already verified
    const isVerified = localStorage.getItem('isHumanVerified');
    if (isVerified === 'true') {
      setVerified(true);
      setLoading(false);
      return;
    }
 
    // Check if site key is available
    if (!TURNSTILE_SITE_KEY) {
      setError('Turnstile site key not configured');
      setLoading(false);
      return;
    }
 
    loadTurnstileScript();
 
    // Cleanup function
    return () => {
      if (window.onTurnstileLoad) {
        delete window.onTurnstileLoad;
      }
      if (widgetRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    };
  }, []);
 
  const loadTurnstileScript = () => {
    // Check if script already exists
    const existingScript = document.querySelector('script[src*="turnstile"]');
   
    if (existingScript) {
      // Script already loaded, check if Turnstile is ready
      if (window.turnstile && window.turnstile.render) {
        setLoading(false);
      } else {
        // Script loaded but Turnstile not ready, set up callback
        setupTurnstileCallback();
      }
      return;
    }
 
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad';
    script.async = true;
    script.defer = true;
   
    script.onerror = () => {
      setError('Failed to load verification system');
      setLoading(false);
    };
 
    // Set up global callback for when Turnstile is ready
    setupTurnstileCallback();
 
    document.head.appendChild(script);
  };
 
  const setupTurnstileCallback = () => {
    window.onTurnstileLoad = () => {
      scriptLoadedRef.current = true;
      setLoading(false);
    };
  };
 
  const handleTurnstileSuccess = (token) => {
    if (token) {
      localStorage.setItem('isHumanVerified', 'true');
      setVerified(true);
     
      // Clean up the widget
      if (widgetRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
      }
    }
  };
 
  const handleTurnstileError = () => {
    setError('Verification failed. Please refresh the page and try again.');
  };
 
  const renderTurnstileWidget = () => {
    const container = document.getElementById('turnstile-widget');
   
    if (!container || !window.turnstile || !window.turnstile.render) {
      return;
    }
 
    // Clear any existing content
    container.innerHTML = '';
 
    try {
      const widgetId = window.turnstile.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: handleTurnstileSuccess,
        'error-callback': handleTurnstileError,
        theme: 'light',
        size: 'normal',
        retry: 'auto'
      });
     
      widgetRef.current = widgetId;
    } catch (error) {
      console.error('Turnstile render error:', error);
      setError('Failed to initialize verification widget');
    }
  };
 
  // Render widget when everything is ready
  useEffect(() => {
    if (!loading && !verified && !error && scriptLoadedRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        renderTurnstileWidget();
      }, 100);
     
      return () => clearTimeout(timer);
    }
  }, [loading, verified, error]);
 
  const handleRetry = () => {
    setError(null);
    setLoading(true);
    loadTurnstileScript();
  };
 
   useMeta("homepage");


  return (
    
    <div className="relative">
          {/* <Seo pageKey="homepage" /> */}

      <div className={`transition-all duration-300 ${!verified ? 'pointer-events-none blur-sm select-none' : ''}`}>
           <NavBar />
     <HomeOne />
      <HomeThree />
      <HomeTwo />
      <HomeSeven />
      <Footer />
      </div>
 
      {!verified && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center ">
          <div className=" p-8 rounded-lg  text-center max-w-sm mx-auto">
           
            <div
              id="turnstile-widget"
              className="flex justify-center min-h-[65px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
 
export default HomeMain;
 