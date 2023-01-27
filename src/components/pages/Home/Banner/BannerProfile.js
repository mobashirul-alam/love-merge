// Third party packages
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// components
import { useGetRecentUsersQuery } from "../../../../Redux/features/AllRecentData/recentApi";
import { SwipAndMatchCard } from "../../../shared/Cards/SwipeAndMatch/SwipAndMatchCard";

//css
import "swiper/css";
import "swiper/css/navigation";

const BannerProfile = () => {
  // hook variables
  const { data: swipematch } = useGetRecentUsersQuery();

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        className="w-[300px] lg:max-w-[280px] h-[400px]"
        navigation={true}
      >
        {swipematch?.data?.members.map((data) => (
          <SwiperSlide key={data._id}>
            <SwipAndMatchCard {...{ data }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerProfile;
