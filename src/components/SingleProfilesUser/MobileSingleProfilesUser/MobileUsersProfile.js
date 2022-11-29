import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import profile from "../../../assets/images/profile/Ellipse 8.png";
import { auth } from "../../../firebase.init";

const MobileUsersProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <>
            <div className="bg-[#D9D9D9] max-w-[337px] flex justify-center items-center flex-col  mx-auto h-[92px]">
                <h1 className="text-[#979C9E] pb-[10px] text-xs">Upload a cover photo</h1>
                <i className="fa-solid text-[#979C9E]  fa-camera"></i>
            </div>
            <div style={{ boxShadow: " 0px 10px 40px rgba(0, 0, 0, 0.03)" }} className="max-w-[337px] px-[23px]  rounded-sm mx-auto bg-[#ffffff]">
                <div>
                    <div className="flex justify-start items-center">
                        <img src={user ? user.photoURL : profile} className="mt-[-20px] w-16 h-16 rounded-full" alt="" />
                        <h2 className="pl-[7px] text-sm font-semibold text-[#000000]">Marvis Ighedosa</h2>
                    </div>
                    <div>
                        <h3 className="text-[#737373] w-[165px] mt-[16px] pb-[10px] border-[#737373] text-xs font-normal border-b-[1px]">
                            {user ? user.email : "Not Provided"}
                        </h3>
                        <h3 className="text-[#737373] w-[165px] mt-[16px] pb-[10px] border-[#737373] text-xs font-normal border-b-[1px]">
                            +234 9011039271
                        </h3>
                        <h3 className="text-[#737373] w-[165px] mt-[16px]  text-xs font-normal pb-[20px]">Single</h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileUsersProfile;
