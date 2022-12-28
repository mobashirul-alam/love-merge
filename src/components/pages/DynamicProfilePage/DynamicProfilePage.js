import React, { useEffect } from "react";
import { useParams } from "react-router";
import CustomHeader from "../../../components/shared/CustomHeader/CustomHeader";
import { useGetProfileDetailsQuery } from "../../../Redux/features/userInfo/userApi";
import DynamicCertificate from "./DynamicCertificate";
import { DynamicConnectionsCard } from "./DynamicConnectionsCard";
import { DynamicPhotosContainer } from "./DynamicPhotosContainer";
import DynamicProfileCard from "./DynamicProfileCard";
import { DynamicProfileInfo } from "./DynamicProfileInfo";
import DynamicTable from "./DynamicTable";
import { MobileDynamicProfile } from "./MobileDynamicProfile";

export const DynamicProfilePage = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetProfileDetailsQuery(id);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
        <div className="bg-[#FAFBFF]">
            <div className="hidden lg:block">
            <CustomHeader title="Profile" />
            </div>
            
            <div className="custom-container mx-auto pb-12 pt-[30px]">
                <div className="block lg:flex">
                    <div className="w-full lg:w-9/12">
                        <div>
                            <div className="block lg:flex">
                                <div className="w-full lg:w-2/5 lg:mr-2">
                                    <div className="hidden lg:block">
                                        <DynamicProfileCard {...{ data, isLoading }} />
                                        <DynamicConnectionsCard {...{ data, isLoading }} />
                                        <DynamicPhotosContainer />
                                    </div>
                                    <div className="lg:hidden">
                                        <DynamicProfileCard {...{ data, isLoading }} />
                                        <MobileDynamicProfile {...{ data, isLoading }}  />
                                    </div>
                                </div>
                                <div className="w-full lg:w-3/5">
                                    <div className="hidden lg:block">
                                        <DynamicTable {...{ data, isLoading }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-full lg:w-3/12 ml-2">
                        <div className="flex justify-center hidden lg:block">
                            <DynamicCertificate />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
