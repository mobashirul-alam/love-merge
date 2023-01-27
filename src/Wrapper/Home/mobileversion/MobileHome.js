// normal import
import React from "react";
import { BottomNav } from "./BottomNav";

// components import
import { MobileBanner } from "./MobileBanner";
import { Services } from "./Services";
import { TopMenu } from "./TopMenu";
import TopProfileMov from "./topprofilemov/TopProfileMov";

export const MobileHome = () => {
  return (
    <div className="mov-res">
      <TopMenu></TopMenu>
      <MobileBanner></MobileBanner>
      {/* <Services></Services> */}
      <TopProfileMov />
      <div className="h-12"></div>
      <BottomNav />
    </div>
  );
};
