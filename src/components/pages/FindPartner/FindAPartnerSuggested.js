// configuration, ex: react-router
import React from "react";

// components
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { UserCard } from "../Shared/userCard/UserCard";

export const FindAPartnerSuggested = () => {
    // varible declation
    // hook variables
    const { data, isSuccess, isLoading } = useGetRecentMembersQuery();
    console.log(data.data)
    return (
        <div className="mt-[30px] max-w-[950px] mx-auto">
            <div className="grid grid-cols-3 gap-[30px]">
                {isSuccess && !isLoading &&
                    data?.data?.members?.map(profile => {
                        console.log(profile)
                        return <UserCard key={profile._id} {...{ profile }} />;
                    })}
            </div>
        </div>
    );
};
