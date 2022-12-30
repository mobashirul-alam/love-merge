// configuration 
import React from "react";
import { Link } from "react-router-dom";

// Third party packages 
import { AiOutlineWarning } from "react-icons/ai";

// components 
import { BottomNav } from "./BottomNav";
import { useGetMatchedUsersQuery } from "../../../Redux/features/connections/connectionApi";
import { ageCalculator } from "../../../assets/utilities/AgeCalculation/ageCalculator";
import { MobileProfileCardSkeletonLoader } from "../../../components/shared/Cards/Loader/MobileProfileCardSkeletonLoader";

// css 
import "../../../components/SingleProfilesUser/profileSection/Matches.css";

export const MatchesMov = () => {
  const { data, isLoading , error } = useGetMatchedUsersQuery();
  console.log(data);

  if(isLoading){
    return <MobileProfileCardSkeletonLoader></MobileProfileCardSkeletonLoader>
  }
  
  if(error){
    return  <div className="flex flex-col items-center justify-center mt-40">
    <AiOutlineWarning className="text-[48px] text-gray-400" />
    <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
      Server Error
    </p>
  </div>
  }

  return (
    <div>
      <div className="mt-5">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-8 mt-3"></i>
          </Link>
          <h1 className="mt-2 mb-5 text-center">Match Partner</h1>
          <div></div>
        </div>
      </div>
      <div className="ml-4 mr-4">
        <div className="grid grid-cols-2 gap-4 md:px-8">
          {data.map((info, index) => (
            <div
              key={index}
              className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr"
            >
              <div className="flex flex-wrap justify-center px-10 pt-5"></div>
              <p className="bg-white w-28 text-center ml-3 rounded-full">
                {info.percentage}% Match
              </p>
              <img
                src={info._doc.profilePhoto}
                className="w-20 h-20 mx-auto rounded-full mt-2"
                alt="Not Available"
              ></img>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white mb-0 pb-0">
                  {info._doc.firstName}
                </h2>
                <p className="text-white my-1">
                  Age : {ageCalculator(info._doc.dateOfBirth)}{" "}
                </p>
                <p className="text-white">{info._doc.hometown} , Bangladesh </p>
                <div className="card-actions flex justify-center py-2 gap-10">
                  <div className="match-icon-mov">
                    <div className="match-icon1 rounded-full mr-4">
                      <img
                        src="https://i.ibb.co/Fh0pm2w/Vector.png"
                        className="lg:max-w-lg"
                        alt="Not Available"
                      ></img>
                    </div>
                    <div className="match-icon-2 rounded-full">
                      <img
                        src="https://i.ibb.co/km8DS6j/coolicon.png"
                        alt="Not Available"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>
  );
};
