// configuration
import React from "react";
import { Link } from "react-router-dom";

// Third party packages
import { AiOutlineWarning } from "react-icons/ai";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
import { ProfileCardSkeletonLoader } from "../../shared/Cards/Loader/ProfileCardSkeletonLoader";
import { UserCard } from "../Shared/userCard/UserCard";

// css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Suggested = () => {
    //hook variable declaration
    const { data, isLoading, error } = useGetRecentMembersQuery();

    // js variables
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let content = null;

    if (isLoading) {
        content = arr.map(k => {
            return (
                <SwiperSlide key={k}>
                    <ProfileCardSkeletonLoader />
                </SwiperSlide>
            );
        });
    } else if (error) {
        content = arr.map(k => {
            return (
                <SwiperSlide key={k}>
                    <div className="flex flex-col items-center justify-center">
                        <AiOutlineWarning className="text-[48px] text-gray-400" />
                        <p className="mt-[10px] text-[22px] font-Inter font-medium text-gray-500">Server Error</p>
                    </div>
                </SwiperSlide>
            );
        });
    } else if (data?.data?.members?.length > 0) {
        content = data?.data?.members?.map(profile => {
            return (
                <SwiperSlide key={profile._id}>
                    <UserCard {...{ profile }} />
                </SwiperSlide>
            );
        });
    }

    return (
        // w-80 mx-auto
        <div>
            <div className="mt-[30px] max-w-[1000px] mx-auto hidden md:block">
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },

                        375: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {content}

                    <div className="text-center py-[40px] hidden md:block">
                        <Link
                            to="/find-partner"
                            className="bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] px-6 py-2 rounded-[4px] text-white"
                        >
                            See More
                        </Link>
                    </div>
                </Swiper>
            </div>

            {/* mobile device  */}
            <div className="mt-[30px] w-[350px] mx-auto md:hidden ">
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },

                        375: {
                            slidesPerView: 1,
                        },

                        768: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {content}
                </Swiper>
            </div>
        </div>
    );
};

export default Suggested;
