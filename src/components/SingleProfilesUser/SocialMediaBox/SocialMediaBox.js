// configuration
import React from "react";

// components
import facebook from "../../../assets/images/icons/social/facebook.svg";
import instagram from "../../../assets/images/icons/social/instagram.svg";
import linkedIn from "../../../assets/images/icons/social/linkedIn.svg";

export const SocialMediaBox = ({ LinkedInId, faceBookId, instagramId }) => {
    return (
        <div className="mt-[24px] h-[100px] max-w-[360px] bg-white shadow-[0px_10px_5px_rgba(119,123,146,0.02)] rounded-[10px] flex justify-around items-center">
            <a href={LinkedInId} target="_linkedIn">
                <img src={linkedIn} alt="linkedIn" className="hover:scale-105 duration-300" />
            </a>
            <a href={faceBookId} target="_facebook">
                <img src={facebook} alt="facebook" className="hover:scale-105 duration-300" />
            </a>
            <a href={instagramId} target="_instagram">
                <img src={instagram} alt="instagram" className="hover:scale-105 duration-300" />
            </a>
        </div>
    );
};
