import React from "react";
import { NavLink } from "react-router-dom";

const MobileFindPartnerHeader = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between items-center">
            {/* <!-- search --> */}
            <div>
                <div
                    style={{
                        border: "2px solid #FFE8F3",
                    }}
                    className="relative flex items-center w-[386px] h-[52px] shadow-sm rounded-lg focus-within:shadow-lg bg-white overflow-hidden"
                >
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search user name.."
                    />
                </div>
            </div>
            <div className="find-partner-button mt-[10px] lg:mt-0 flex-wrap flex justify-between items-center">
                {" "}
                <NavLink
                    style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
                    to="/find-partner/suggested"
                    className="w-[242px] bg-[#FFFFFF] text-[#000] font-semibold flex justify-center rounded items-center h-[50px]"
                >
                    Suggested For You
                </NavLink>
                <NavLink
                    style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
                    className="bg-[#FFFFFF] h-[50px] font-semibold ml-[24px]  w-[105px] flex justify-center rounded items-center  text-[#000]"
                    to="top"
                >
                    Top
                </NavLink>
                <NavLink
                    style={{ boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)" }}
                    className="bg-[#FFFFFF] h-[50px] font-semibold ml-[24px]  w-[105px] flex justify-center rounded items-center  text-[#000]"
                    to="nearest"
                >
                    Nearest
                </NavLink>
            </div>
        </div>
    );
};

export default MobileFindPartnerHeader;
