// configuration
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

// css
import "../../../../assets/css/topProfile.css";

const TopProfileMov = () => {
  return (
    <div>
      <h1 className="font-bold ml-5 mt-10 mb-4">Top Profile</h1>
      <div>
        <div className="top-profile-button-mov flex justify-start mx-4">
          <NavLink to="/" className="mr-2">
            <p className="text-[11px] text-center">Suggested For You</p>
          </NavLink>

          {/* <NavLink to="/mobile-top-bride" className="mr-2">
            <p className="text-[11px] text-center pl-[16px] pr-[16px] font-semibold">
              Top Bride
            </p>
          </NavLink>

          <NavLink to="/mobile-top-groom">
            <p className="text-[11px] text-center pl-[16px] pr-[16px] font-semibold">
              Top Groom
            </p>
          </NavLink> */}
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TopProfileMov;
