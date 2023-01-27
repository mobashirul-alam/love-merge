// Configuration
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Components
import cart from "../../../assets/images/Logo/Cart.svg";
import member from "../../../assets/images/Logo/Membership.svg";
import Shop from "../../../assets/images/Logo/Shop.svg";
import logo from "../../../assets/images/Logo/lovemergSmall.png";

// CSS files
import "../mobileversion/TopMenu.css";

export const BottomNav = () => {
  const [mobileUpgradeActive, setMobileUpgradeActive] = useState(false);
  const [homeActive, setHomeActive] = useState(false);
  const [settingActive, setSettingActive] = useState(false);

  return (
    <div className="rounded bg-bottom-nav z-50 max-w-[1024px] mx-auto">
      <div className="flex items-center justify-center gap-10 px-4">
        {/* <NavLink
          to="/mobileUpgrade"
          className={({ isActive }) => setMobileUpgradeActive(isActive)}
        >
          <img
            src={member}
            alt="Not Available"
            className={`w-10 mt-1 ${
              mobileUpgradeActive &&
              "-mt-14 border-4 border-[#F8F8FF] bg-[#E8E8E8] rounded-full w-14"
            }`}
          ></img>
        </NavLink> */}
        <NavLink to="/" className={({ isActive }) => setHomeActive(isActive)}>
          <img
            src={logo}
            alt="Not Available"
            className={`w-12 rounded-full ${
              homeActive &&
              "-mt-14 border-4 border-[#EBDEF4] rounded-full w-14 pl-[2px]"
            }`}
          ></img>
        </NavLink>
        {/* <NavLink>
          <img src={Shop} alt="Not Available" className="w-10 mt-1"></img>
        </NavLink> */}
        <NavLink
          to="/setting"
          className={({ isActive }) => setSettingActive(isActive)}
        >
          <img
            src={cart}
            alt="Not Available"
            className={`w-10 mt-1 ${
              settingActive &&
              "-mt-14 border-4 border-white rounded-full w-14 bg-[#E8E8E8]"
            }`}
          ></img>
        </NavLink>
      </div>
    </div>
  );
};
