import React from "react";
import Banner from "../../components/pages/Home/Banner/Banner";
import ThreeEasySteps from "../../components/pages/Home/Banner/ThreeEasySteps";
import BeginFamilyJourney from "../../components/pages/Home/BeginFamilyJourney/BeginFamilyJourney";
import FindSoleMate from "../../components/pages/Home/FindSoleMate/FindSoleMate";
import SecureVerified from "../../components/pages/Home/SecureVerified/SecureVerified";
import LatestRegisteredMember from "../../components/pages/LatestRegisteredMember/LatestRegisteredMember";
import PeopleJoinedAlready from "../../components/pages/PeopleJoinedAlready/PeopleJoinedAlready";
import NavBar from "../../components/pages/Shared/NavBar";
import TopProfile from "../../components/pages/TopProfile/TopProfile";
import Footer from "../../components/shared/Footer/Footer";

const Homepage = () => {
  // <<<<<<< HEAD
  //   return (
  //     <div className="font-george">
  //       <NavBar></NavBar>
  //       <Banner></Banner>

  //       <div>
  //         <ThreeEasySteps></ThreeEasySteps>
  //       </div>
  //       <SecureVerified></SecureVerified>
  //       <BeginFamilyJourney></BeginFamilyJourney>
  //       <LatestRegisteredMember />
  //       <TopProfile />
  //       <PeopleJoinedAlready />
  //       <FindSoleMate />
  //       <Anexecutive />
  //       <Membership />
  //       <MeetCard />
  //       <Footer />
  //     </div>
  //   );
  // =======
  return (
    <div className="font-george">
      <NavBar></NavBar>
      <Banner></Banner>
      <ThreeEasySteps></ThreeEasySteps>
      <SecureVerified></SecureVerified>
      <BeginFamilyJourney></BeginFamilyJourney>
      <LatestRegisteredMember />
      <TopProfile />
      <PeopleJoinedAlready />
      <FindSoleMate />
      <Footer />
    </div>
  );
};

export default Homepage;
