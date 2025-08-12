/* eslint-disable no-undef */
import 'leaflet/dist/leaflet.css';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "leaflet/dist/leaflet.css";
import React from "react";
import HomePage from "./Components/Home/HomePage"
import Footer from "./Components/Footer"
import Thankyou from "./Components/Thankyou"
import PrivacyPolicy from "./Components/PrivacyPolicy"
import Disclaimer from "./Components/Disclaimer"
import Service from "./Components/ServiceOverview/ServiceOverview"
import SubService from "./Components/Sub-Services/Meso/SubService"
import About from './Components/AboutUs/About';
import ContactUs from "./Components/ContactUs/ContactUs"
import MassTort from './Components/Services/MassTort/MassTort';
import PIService from './Components/PersonalInjury/PIService';
import ClassService from './Components/ClassAction/ClassService';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css'; 
import ChatInterface from './Components/ChatBot/ChatInterface';
import HomeNewSouthWales from './Components/Regions/HomeNewSouthWales/HomePage';
import HomeTasmania from './Components/Regions/HomeTasmania/HomePage';
import HomeVictoria from './Components/Regions/HomeVictoria/HomePage';  
import HomeQueensland from './Components/Regions/HomeQueensland/HomePage';
import HomeWesternAustralia from './Components/Regions/HomeWesternAustralia/HomePage';
import HomeSouthAustralia from './Components/Regions/HomeSouthAustralia/HomePage';
import HomeNorthernTerritory from './Components/Regions/HomeNorthernTerritory/HomePage';
import HomeAustralainCapitalTerritory from './Components/Regions/HomeAustralianCapitalTerritory/HomePage';
import LawyersPage from './Components/Lawyers/HomePage';
import PersonalInjury from './Components/Services/PersonalInjury/PersonalInjury';
import ClassAction from './Components/Services/ClassAction/ClassAction';
import SubService18Wheeler from './Components/Sub-Services/18-wheeler/SubService';
import SubServiceRideshare from './Components/Sub-Services/Rideshare/SubService';
import { HeadProvider } from 'react-head';
function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/New-South-Wales',
      element: <HomeNewSouthWales />,
    },
    {
      path: '/Queensland',
      element: <HomeQueensland />,
    },
    {
      path: '/South-Australia',
      element: <HomeSouthAustralia />,
    },
    {
      path: '/Tasmania',
      element: <HomeTasmania />,
    },
    {
      path: '/Victoria',
      element: <HomeVictoria />,
    },
    {
      path: '/Western-Australia',
      element: <HomeWesternAustralia />,
    },
    {
      path: '/Australian-Capital-Territory',
      element: <HomeAustralainCapitalTerritory />,
    },
    {
      path: '/Northern-Territory',
      element: <HomeNorthernTerritory/>,
    },
    {
      path: '/chat',
      element: <ChatInterface />,
    },
    {
      path: '/service',
      element:
        <ParallaxProvider>
          <Service />
        </ParallaxProvider>
      ,
    },
    {
      path: '/Service/Service/MassTort/Mesothelioma-Lawsuit',
      element: <SubService />
    },
    {
      path : '/Service/Service/MassTort/18Wheeler-Lawsuit',
      element: <SubService18Wheeler />
    },
    {
      path : '/Service/Service/MassTort/Rideshare-Lawsuit',
      element: <SubServiceRideshare />

    },
    {
      path: '/About-Us',
      element: <About />
    },
    {
      path: '/Contact-Us',
      element: <ContactUs />
    },
    {
      path: '/Service/MassTort',
      element: <MassTort />
    },
    {
      path: '/Service/ClassAction',
      element: <ClassAction />
    },
    {
      path: 'Service/PersonalInjury',
      element: <PersonalInjury />
    },
    {
      path: '/PIService',
      element: <PIService />,
    },
    {
      path: '/thank-you',
      element: <Thankyou />,
    },
    {
      path: '/disclaimer',
      element: <Disclaimer />,
    },
    {
      path: '/privacy-policy',
      element: <PrivacyPolicy />,
    },
    {
      path: '/ClassService',
      element: <ClassService />,
    },
    {
      path:'/Partner-With-Us',
      element:<LawyersPage />,
    },
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
    <HeadProvider>
    <RouterProvider router={router} />
    </HeadProvider>
  );
}

export default App;
