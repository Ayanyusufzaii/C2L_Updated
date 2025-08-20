import React from "react";
import SubOne from "./SubOne";
import SubThree from "./SubThree";
import HomeTwo from "../SubServiceFrom/HomeTwo"
import SubFour from "./SubFour";
import Footer from "../../Footer";
import SubFive from "./SubFive";

import NavBar from "../../NavBar";
import HomeSeven from "../../Home/HomeSeven";
import Faqmeso from "../../FAQmeso";
import Seo from "../../Seo/Seo";

function SubService() {

  return (
    <div className="overflow-hidden">
        <Seo sitekey={"mesothelioma"} />

      <NavBar />
      <SubOne />   
      <HomeTwo />
      <SubThree />
      <SubFour />
      <SubFive />
      <Faqmeso />
      <HomeSeven />
      <Footer />
    </div>
  );
}

export default SubService;
