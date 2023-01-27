// normal import
import React from "react";
import BannerProfile from "../../../components/pages/Home/Banner/BannerProfile";
import { BottomNav } from "./BottomNav";

// components import
import { MobileBanner } from "./MobileBanner";
import { Services } from "./Services";
import { TopMenu } from "./TopMenu";
import TopProfileMov from "./topprofilemov/TopProfileMov";

export const MobileHome = () => {
  return (
    <div className=" bg-[#ebdef4] h-[100vh]">
      <TopMenu></TopMenu>
      <div className="h-12"></div>
      {/* <MobileBanner></MobileBanner> */}
      {/* <Services></Services> */}
      <BannerProfile />
      {/* <TopProfileMov /> */}
      {/* <div className="h-16 bg-[#ebdef4]"></div> */}
      {/* <BottomNav /> */}
    </div>
  );
};
