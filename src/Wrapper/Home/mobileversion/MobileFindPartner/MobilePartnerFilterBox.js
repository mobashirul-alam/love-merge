// configuration
import React from "react";

// Third party packages
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

// components
import FindPartner from "../../../../assets/css/FindPartner.module.css";


// css files
import "../../../../App.css";
import { MobileAccordionPartner } from "./MobileAccordionPartner";


const MobilePartnerFilterBox = () => {
  return (
    <>
      <div
        id="join-now-box2"
        className={`bg-[#fff]  ${FindPartner.partnerFilterBox} w-[350px] mt-5 lg:w-full mx-auto rounded-[10px] px-[30px] pt-[20px] pb-[30px]`}
        style={{
          visibility: "visible",
          boxShadow: " 2px 2px 10px rgba(0, 0, 0, 0.12)",
        }}
      >
        <p className="flex items-center">
          <HiOutlineAdjustmentsHorizontal className="text-[28px] mr-2" />{" "}
          <span className="text-[24px] font-medium font-Inter">Filter</span>
        </p>
        <MobileAccordionPartner />
      </div>
    </>
  );
};

export default MobilePartnerFilterBox;
