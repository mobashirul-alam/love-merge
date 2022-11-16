import shape from "../../../assets/images/shape.a8708fbc0aa77b10a1cf.png";
import { Link } from "react-router-dom";
import LatestRegisteredMemberCSS from "../../../assets/css/latestRegisteredMember.module.css";
import dummyData from "../Home/Banner/TopProfile/dummyData";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const LatestRegisteredMember = () => {
  return (
    <>
      <section className={LatestRegisteredMemberCSS.latestRegisteredSection}>
        <img className={LatestRegisteredMemberCSS.shape} src={shape} alt="" />
        <div className="max-w-[1300px] mx-auto">
          <div className="grid justify-center items-center grid-cols-2 ">
            <div className="	">
              <div className={LatestRegisteredMemberCSS.content}>
                <div className={LatestRegisteredMemberCSS.sectionHeader}>
                  <h6 className="text-[#ff317b] text-[24px] mb-[30px] font-bold">
                    Latest Registered
                  </h6>
                  <h2 className="text-[50px] text-[#ff317b]  font-semibold mb-[11px]">
                    Members
                  </h2>
                  <p className="text-[20px] font-bold mb-[16px]">
                    if you have been looking for the someone special of your
                    life for long, then your search ends here
                  </p>
                </div>
                <Link to="/" className={LatestRegisteredMemberCSS.customButton}>
                  Join Now !
                </Link>
              </div>
            </div>
            <div>
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
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
                {dummyData.map((data) => (
                  <SwiperSlide key={data.id}>
                    <div>
                      <div className="text-center">
                        <div className="mb-[30px] relative">
                          <img
                            style={{
                              width: "80px",
                              height: "80px",
                              borderRadius: "50%",
                            }}
                            src={data.img}
                            className="border-[5px] mx-auto border-[#fff] inline-block "
                            alt="img"
                          />
                        </div>
                        <div className="inner-content">
                          <h4 className="text-[#fff] text-[24px] uppercase font-bold">
                            {data.name}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestRegisteredMember;
