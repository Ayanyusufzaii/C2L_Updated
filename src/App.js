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
import HomeState1 from './Components/HomeState1/HomePage';
import HomeState2 from './Components/HomeState2/HomePage';
import HomeState3 from './Components/HomeState3/HomePage';      
import HomeState4 from './Components/HomeState4/HomePage';
import HomeState5 from './Components/HomeState5/HomePage';
import HomeState6 from './Components/HomeState6/HomePage';
import HomeState7 from './Components/HomeState7/HomePage';
import PersonalInjury from './Components/Services/PersonalInjury/PersonalInjury';
import ClassAction from './Components/Services/ClassAction/ClassAction';
import SubService18Wheeler from './Components/Sub-Services/18-wheeler/SubService';
import SubServiceRideshare from './Components/Sub-Services/Rideshare/SubService';
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
      path: '/HomeState1',
      element: <HomeState1 />,
    },
     {
      path: '/HomeState2',
      element: <HomeState2 />,
    },
     {
      path: '/HomeState3',
      element: <HomeState3 />,
    },
     {
      path: '/HomeState4',
      element: <HomeState4 />,
    },
     {
      path: '/HomeState5',
      element: <HomeState5 />,
    },
     {
      path: '/HomeState6',
      element: <HomeState6 />,
    },
     {
      path: '/HomeState7',
      element: <HomeState7 />,
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
      path: '/sub-service',
      element: <SubService />
    },
    {
      path : '/SubService18Wheeler',
      element: <SubService18Wheeler />
    },
    {
      path : '/SubServiceRideshare',
      element: <SubServiceRideshare />

    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/ContactUs',
      element: <ContactUs />
    },
    {
      path: '/MassTort',
      element: <MassTort />
    },
    {
      path: '/ClassAction',
      element: <ClassAction />
    },
    {
      path: '/PersonalInjury',
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
      path:'/Lawyers',
      element:<LawyersPage />,
    },
    {
      path: '*',
      element: <h1>404 - Page Not Found</h1>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
