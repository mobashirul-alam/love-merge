import { Fragment } from "react";
import BannerFilterBox from "./BannerFilterBox";
import banner from "../../../../assets/images/banner/banner.png";
import BannerProfile from "./BannerProfile";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <Fragment>
      <section
        className="banner"
        style={{
          background:
            "url(https://img1.picmix.com/output/stamp/normal/9/9/4/3/1503499_8efaf.gif)",
        }}
      >
        <div className="custom-container py-[50px]">
          <h2
            // style={{ textShadow: " 2px 2px 8px #7B047D" }}
            className="text-center mb-[43px] text-[74px] font-bold leading-[94px] text-[#000000]"
          >
            Starting Your
            <span className="text-[#701FD8] ml-[5px]">
              <Typewriter
                words={["Family Journey", "New Journey", "Life Journey"]}
                loop={3}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>{" "}
            Is
            <br /> So Easy With{" "}
            <span className="text-[#E41272]">Shongshari.Com</span>
          </h2>
          <div className="grid grid-cols-4 gap-x-2 justify-center items-center">
            <div>
              <BannerFilterBox />
            </div>
            <div className=" col-span-2">
              <img className="h-[400px] w-[721px]" src={banner} alt="" />
            </div>
            <div>
              <BannerProfile />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Banner;
