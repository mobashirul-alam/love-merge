import React from "react";
import tick from "../../../../assets/images/icons/tick.png";

export const FriendRequestCard = () => {
    return (
        <div className="p-[21px] h-[141px] lg:w-[501px] mx-auto bg-white shadow-[2px_2px_8px_rgba(0,0,0,0.12)] rounded-[15px] flex justify-between items-center">
            <div className="h-full flex items-center">
                <img className="w-[100px] h-[100px] rounded-full mr-[21px] object-cover" src="https://placeimg.com/192/192/people" alt="profile" />
                <div>
                    <div className="flex items-center">
                        <h1 className="text-[20px] leading-[30px] text-[#333333] font-bold mr-[4px]">Erma Porter</h1>
                        <img src={tick} alt="icon" />
                    </div>
                    <span className="text-[16px] leading-[26px] text-[#333333] font-normal">A month ago</span>
                </div>
            </div>
            <div className="flex flex-col gap-y-[14px]">
                <button className="h-[42px] w-[111px] text-[17px] font-normal font-Inter cursor-pointer bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:bg-[linear-gradient(166deg,rgb(242,40,118)_20%,rgb(148,45,217)_100%)]  rounded-[50px] text-white">
                    Accept
                </button>
                <button className="h-[42px] w-[111px] border-[1px] border-[rgba(0,0,0,0.15)] hover:border-[rgba(0,0,0,0.11)] cursor-pointer rounded-[50px] text-[#E41272] text-[17px] font-normal font-Inter">
                    Reject
                </button>
            </div>
            {/* <button
                className={`hover:text-white text-[#E41272] transition-[0.3s] border-[1px] h-[40px] w-[133px] border-[rgba(0,0,0,0.15)] rounded-full hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] duration-300`}
            >
                Connected
            </button> */}
        </div>
    );
};
