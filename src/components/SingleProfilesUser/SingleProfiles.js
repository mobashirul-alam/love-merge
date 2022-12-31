// configuration
import React, { useEffect, useState } from "react";

// components
import CustomHeader from "../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsWIthAuthQuery } from "../../Redux/features/userInfo/userApi";
import ChartBoard from "./chatboard/ChartBoard";
import { IntroCard } from "./IntroCard";
import PhotoGelary from "./PhotoGelary";
import { PhotoUploadCard } from "./PhotoUploadCard";
import ProfileCard from "./ProfileCard";
import { SocialMediaBox } from "./SocialMediaBox/SocialMediaBox";
import Table from "./Table/Table";
import UtilitisCard from "./UtilitisCard";
import { VerificationCard } from "./VerificationCard";

export const SingleProfiles = () => {
    // hook variable declaration
    const [SocialBoxOpen, setSocialBoxOpen] = useState(false);
    const { data, isLoading, error } = useGetProfileDetailsWIthAuthQuery();

    // decision making about social Box
    const { LinkedInId } = data || {};
    const { faceBookId } = data || {};
    const { instagramId } = data || {};

    useEffect(() => {
        if (LinkedInId || faceBookId || instagramId) {
            setSocialBoxOpen(true);
        }
    }, [LinkedInId, faceBookId, instagramId, setSocialBoxOpen]);

    return (
        <div className="bg-[#FAFBFF]">
            <CustomHeader title="Profile" />
            <div className="custom-container mx-auto bg-[#FAFBFF] pt-[30px] ">
                <div className="block lg:flex">
                    <div className=" w-full ">
                        <div>
                            <div className="block lg:flex">
                                <div className="max-w-[360px]">
                                    <div>
                                        <ProfileCard {...{ data, isLoading }} />
                                        {SocialBoxOpen && <SocialMediaBox {...{ LinkedInId, faceBookId, instagramId }} />}
                                        <VerificationCard />
                                        {/* <Badges /> */}
                                        <UtilitisCard />
                                        <IntroCard {...{ data, isLoading, error }} />
                                        <PhotoUploadCard />
                                        <PhotoGelary {...{ data, isLoading }} />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div>
                                        <Table {...{ data, isLoading }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-[263px]">
                        <div className="flex justify-center">
                            <ChartBoard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
