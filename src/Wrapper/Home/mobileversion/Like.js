import React from "react";

// configuration
import { Link } from "react-router-dom";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";

// components
import { YouMayLikeSkeletionLoader } from "../../../components/shared/Cards/Loader/YouMayLikeSkeletionLoader";
import { useGetSuggestedUsersQuery } from "../../../Redux/features/AllRecentData/recentApi";
import { BottomNav } from "./BottomNav";
import { MayLikeSingle } from "./MayLikeSingle";

export const Like = () => {
  // fetching
  const { data, error, isLoading } = useGetSuggestedUsersQuery();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <YouMayLikeSkeletionLoader></YouMayLikeSkeletionLoader>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center mt-40">
        <AiOutlineWarning className="text-[48px] text-gray-400" />
        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">
          Server Error
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F8FF]">
      <div className="mt-5 px-6 bg-white">
        <div className="grid grid-cols-3">
          <Link to="/setting">
            <i className="fa-solid fa-chevron-left ml-2 mt-3"></i>
          </Link>
          <h1 className="profile-tit text-center mt-2 mb-5">You May Like</h1>
          <div></div>
        </div>
      </div>
      {/* ----- You may like ----- */}
      <div className="mt-[20px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-y-8">
          {data?.data?.suggestion.map((profile) => {
            return <MayLikeSingle key={profile._id} {...{ data: profile }} />;
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>
  );
};
