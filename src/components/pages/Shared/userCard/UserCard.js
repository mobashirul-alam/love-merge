import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../../assets/css/topProfile.css";
import bg from "../../../../assets/images/TopProfile/Vector-1.9404edcdbad9fde28712.png";
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";

export const UserCard = ({ profile, isLoading }) => {
    const array = [1, 2, 3];
    const navigate = useNavigate();

    return (
        <div className="col-span-1" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            {profile && (
                <div className="h-[400px]  relative group overflow-hidden Suggested-card hidden md:block">
                    <img
                        className="h-[400px] rounded-tr-[12px] rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px] object-cover w-full"
                        src={profile?.profilePhoto}
                        alt="profile"
                    />
                    <div className="absolute h-[100px] w-full top-[300px] right-0 inset-0 bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] opacity-90 text-white px-4 py-2 font-serif group-hover:top-[370px] transition ease-out duration-500 rounded-bl-[12px] rounded-br-[12px]">
                        <div className="flex gap-x-4 items-center">
                            <p className="text-[20px] text-white font-bold drop-shadow-lg">{profile?.firstName}</p>
                            <p className="text-[18px] text-[#87ceeb]">{ageCalculator(profile?.dateOfBirth ? profile?.dateOfBirth : 0)}</p>
                        </div>
                        <p>{profile?.designation ? profile?.designation : "Not Provided"}</p>
                        <p>{profile?.hometown ? profile?.hometown : "Not Provided"}</p>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${bg})`,
                            position: "absolute",
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundPosition: "top",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="Suggested-info__cardUp"
                    >
                        <img
                            src={profile?.profilePhoto}
                            alt="profile"
                            className="w-[94px] h-[94px] rounded-full relative left-[35%] border-white border-4"
                        />
                        <div className="p-2 relative">
                            <h4 className="text-white text-[25px] font-bold text-center overflow-hidden">
                                <span className="font-george">Monir Hossain</span>
                                <span style={{ color: "rgb(135, 206, 235)" }}> 27</span>
                            </h4>
                            <ul className="text-white font-Inter">
                                <li>
                                    <p className="text-[14px] font-normal">
                                        Lorem ipsum dolor sit amet gfdgfgd sdfdsfs consectetur adipisicing elit. Minus dolor dolore sint ea. Non,
                                    </p>
                                </li>
                            </ul>
                            <div className="h-[30px] w-full flex items-center justify-evenly absolute -bottom-[40px]">
                                <p
                                    onClick={() => navigate(`/profile/${profile?._id}`)}
                                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full cursor-pointer"
                                >
                                    <i className="fas fa-user text-white p-3" aria-hidden="true"></i>
                                </p>

                                <a href="!#" className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                    <i className="fas fa-comment text-white p-3" aria-hidden="true"></i>
                                </a>
                                <a href="!#" className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                    <i className="fas fa-heart p-3 text-white" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {profile && (
                <div className="h-[400px]  relative group overflow-hidden Suggested-card  md:hidden ml-4 mr-4 mb-4">
                    <img
                        className="h-[400px] rounded-tr-[12px] rounded-tl-[12px] rounded-bl-[12px] rounded-br-[12px] object-cover w-full"
                        src={profile?.profilePhoto}
                        alt="profile"
                    />
                    <div className="absolute h-[100px] w-full top-[300px] right-0 inset-0 bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] opacity-90 text-white px-4 py-2 font-serif group-hover:top-[370px] transition ease-out duration-500 rounded-bl-[12px] rounded-br-[12px]">
                        <div className="flex gap-x-4 items-center">
                            <p className="text-[20px] text-white font-bold drop-shadow-lg">{profile?.firstName + " " + profile?.lastName}</p>
                            <p className="text-[18px] text-[#87ceeb]">{ageCalculator(profile?.dateOfBirth ? profile?.dateOfBirth : 0)}</p>
                        </div>
                        <p>{profile?.designation ? profile?.designation : "Not Provided"}</p>
                        <p>{profile?.hometown ? profile?.hometown : "Not Provided"}</p>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${bg})`,
                            position: "absolute",
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundPosition: "top",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="Suggested-info__cardUp"
                    >
                        <img
                            src={profile?.profilePhoto}
                            alt="profile"
                            className="w-[94px] h-[94px] rounded-full relative left-[35%] border-white border-4"
                        />
                        <div className="p-2 relative">
                            <h4 className="text-white text-[25px] font-bold text-center overflow-hidden">
                                <span className="font-george">Monir Hossain</span>
                                <span style={{ color: "rgb(135, 206, 235)" }}> 27</span>
                            </h4>
                            <ul className="text-white font-Inter">
                                <li>
                                    <p className="text-[14px] font-normal">
                                        Lorem ipsum dolor sit amet gfdgfgd sdfdsfs consectetur adipisicing elit. Minus dolor dolore sint ea. Non,
                                    </p>
                                </li>
                            </ul>
                            <div className="h-[30px] w-full flex items-center justify-evenly absolute -bottom-[40px]">
                                <p
                                    onClick={() => navigate(`/profile/${profile?._id}`)}
                                    className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full cursor-pointer"
                                >
                                    <i className="fas fa-user text-white p-3" aria-hidden="true"></i>
                                </p>

                                <a href="!#" className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                    <i className="fas fa-comment text-white p-3" aria-hidden="true"></i>
                                </a>
                                <a href="!#" className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-full">
                                    <i className="fas fa-heart p-3 text-white" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {isLoading &&
                array.map(a => {
                    return (
                        <div key={a} className="h-[400px] w-[300px] shadow-2xl">
                            <div className="h-[290px] w-full bg-gray-100"></div>
                            <div className="px-[15px] py-[15px] h-[110px] bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)]">
                                <div className="flex items-center justify-start gap-x-5">
                                    <div className="w-[200px] h-[15px] bg-gray-200 animate-pulse"></div>
                                    <div className="h-[30px] w-[30px] bg-gray-200 rounded-full animate-pulse"></div>
                                </div>
                                <div className="w-[150px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                                <div className="w-[100px] h-[10px] mt-2 bg-gray-200 animate-pulse"></div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
