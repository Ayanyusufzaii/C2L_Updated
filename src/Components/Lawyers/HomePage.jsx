import React, { useEffect } from 'react';
import Navbar from '../NavBar';
import HomeOne from './HomeOne';
import HomeTwo from './HomeTwo';
import HomeThree from './HomeThree';
import HomeFour from './HomeFour';
import HomeFive from './HomeFive';
import HomeSeven from '../Home/HomeSeven';
import Footer from '../Footer';
import Seo from "../Seo/Seo"

const HomePage = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // avoid animation delay for initial load
    });
  }, []);

  return (
    <div>
      <Seo pageKey="partner" />
      <Navbar />
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <HomeFour />
      <HomeFive />
      <HomeSeven />
      <Footer />
    </div>
  );
};

export default HomePage;
