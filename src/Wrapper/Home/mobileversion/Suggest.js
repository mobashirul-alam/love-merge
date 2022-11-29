import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import { useGetRecentMembersQuery } from "../../../Redux/features/userInfo/withoutLoginApi";
const Suggest = () => {
  const navigate = useNavigate();
  const { data, isSuccess } = useGetRecentMembersQuery();

  return (
    <div className="mt-[30px]">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,

          },

          400: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {isSuccess &&
          data.map((profile) => (
            <SwiperSlide key={profile._id}>
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className=" cursor-pointer ml-4 mr-4 border-gray-300 Suggested-card rounded-[10px] border relative left-0 top-0 overflow-hidden"
              >
                <div>
                  <img
                    style={{ borderRadius: " 10px 10px 0px 0px" }}
                    src={profile.profilePhoto}
                    className="h-[200px] w-[380px]"
                    alt="profile"
                  />
                </div>
                <div className="p-[30px] text-left">
                  <h3 className="text-[30px] text-[#000]">
                    {profile?.firstName + " " + profile?.lastName}{" "}
                    <span className="text-[#87ceeb]"> 26</span>
                  </h3>
                  <h5 className="font-bold">Student</h5>
                  <h5 className="font-bold text-[20px]">Savar Dhaka</h5>
                </div>
                <div className="Suggested-info__cardUp">
                  <div className="Suggested-info__cardImg">
                    <img src={profile.profilePhoto} alt="Not Available" />
                  </div>
                  <h4 className="text-white text-[30px] text-center overflow-hidden">
                    {profile?.firstName + " " + profile?.lastName}
                    <span style={{ color: "rgb(135, 206, 235)" }}> 27</span>
                  </h4>
                  <ul>
                    <li>
                      <p>
                        <span>Occupation</span> Private holder
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Location</span> Barishal shadar, Barishal
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Home Town</span> Dhake
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Education</span> Hon's(Department of History)
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Religion</span> Muslim
                      </p>
                    </li>
                  </ul>
                  <div className="info__social">
                    <i
                      className="fas fa-user text-white"
                      aria-hidden="true"
                      onClick={() => navigate(`/profile/${profile._id}`)}
                    ></i>

                    <a href="!#">
                      <i className="fas fa-comment" aria-hidden="true"></i>
                    </a>
                    <a href="!#">
                      <i className="fas fa-heart" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        <div className="text-center py-[40px]">
          <a className="top-profile-btn" href="/">
            See More
          </a>
        </div>
      </Swiper>
    </div>
  );
};

export default Suggest;
