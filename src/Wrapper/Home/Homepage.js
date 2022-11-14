import React from "react";
import Banner from "../../components/pages/Home/Banner/Banner";
import ThreeEasySteps from "../../components/pages/Home/Banner/ThreeEasySteps";
import BeginFamilyJourney from "../../components/pages/Home/BeginFamilyJourney/BeginFamilyJourney";
import SecureVerified from "../../components/pages/Home/SecureVerified/SecureVerified";
import NavBar from "../../components/pages/Shared/NavBar";
import TopProfile from "../../components/pages/TopProfile/TopProfile";

const Homepage = () => {
  return (
    <div className="font-george">
      <NavBar></NavBar>
      <Banner></Banner>

      <div>
        <ThreeEasySteps></ThreeEasySteps>
      </div>
      <SecureVerified></SecureVerified>
      <BeginFamilyJourney></BeginFamilyJourney>
      <TopProfile />
    </div>
  );
};

export default Homepage;
