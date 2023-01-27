import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../../assets/css/topProfile.css";

const TopProfile = () => {
  return (
    <div className="bg-[#F8F8FF]">
      <div className=" pt-10 custom-container">
        <h1 className="text-center text-[50px] text-[#ff317b] pb-[30px]">
          Top Profile
        </h1>

        <div className="w-full flex justify-start items-center">
          <div className="top-profile-button flex">
            <NavLink to="/">
              <p className="text-[0.8rem] text-center">Suggested For You</p>
            </NavLink>

            {/* <NavLink to="/top-bride">
                            <p className="text-[0.8rem] text-center">Top Bride</p>
                        </NavLink>
                        <NavLink to="/top-groom">
                            <p className="text-[0.8rem] text-center">Top Groom</p>
                        </NavLink> */}
          </div>
        </div>

        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TopProfile;
