import React from "react";
import SubOne from "./SubOne";
import SubTwo from "./SubTwo";
import HomeTwo from "../SubServiceFrom/HomeTwo"

import SubThree from "./SubThree";
import SubFour from "./SubFour";
import Footer from "../../Footer";
import SubFive from "./SubFive";

import NavBar from "../../NavBar";
import HomeSeven from "../../Home/HomeSeven";
import Faqmeso from "../../faq18wheeler";
import Seo from "../../Seo/Seo";

function SubService18Wheeler() {

  return (
    <div className="overflow-hidden">
        <Seo sitekey={"heavyVehicle"} />

      <NavBar />
      <SubOne />
      {/* <SubTwo /> */}
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

export default SubService18Wheeler;
