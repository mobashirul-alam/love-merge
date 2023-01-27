// normal import
import React from "react";

// images import
import { Link } from "react-router-dom";
import Blog from "../../../assets/images/Logo/Blog.svg";
import Kazi from "../../../assets/images/Logo/Kazi.svg";
import Lawyer from "../../../assets/images/Logo/Lawyer.svg";
import courses from "../../../assets/images/Logo/online.svg";
import partner from "../../../assets/images/Logo/partner.svg";
import Shop from "../../../assets/images/Logo/Shop.svg";

export const Services = () => {
  return (
    <div>
      <h1 className="font-bold ml-6 mt-10 mb-4">All Services</h1>
      <div className="grid grid-cols-4 ml-5 gap-3 mr-6">
        <div className="bg-service-mov rounded-lg">
          <Link to="/mobile-find-partner/suggested">
            <img
              src={partner}
              className="w-8 mx-auto mt-1"
              alt="Not Available"
            ></img>
            <h1 className="text-[11px] text-white font-bold text-center pb-1">
              Find Match
            </h1>
          </Link>
        </div>

        {/* <div className=" bg-service-mov rounded-lg">
          <Link to="/mobile-lawyer">
            <img
              src={Lawyer}
              className="w-8 mx-auto mt-1"
              alt="Not Available"
            ></img>
            <h1 className="text-[11px] text-white font-bold text-center pb-1">
              Lawyer
            </h1>
          </Link>
        </div>

        <div className=" bg-service-mov rounded-lg">
          <Link to="/mobile-agent">
            <img
              src="https://svgshare.com/i/pDa.svg"
              className="w-8 mx-auto mt-1"
              alt="Not Available"
            ></img>
            <h1 className="text-[11px] text-white font-bold text-center pb-1">
              Agent
            </h1>
          </Link>
        </div>

        <div className="bg-service-mov rounded-lg">
          <Link to="/mobile-kazi">
            <img
              src={Kazi}
              className="w-8 mx-auto mt-1"
              alt="Not Available"
            ></img>
            <h1 className="text-[11px] text-white font-bold text-center pb-1">
              Kazi
            </h1>
          </Link>
        </div>

        <div className="bg-service-mov rounded-lg">
          <Link to="/mobile-shop">
            <img
              src={Shop}
              className="w-8 mx-auto mt-1"
              alt="Not Available"
            ></img>
            <h1 className="text-[11px] text-white font-bold text-center pb-1">
              Shop
            </h1>
          </Link>
        </div>

        <div className="bg-service-mov rounded-lg">
          <Link>
            <img
              src={courses}
              className="w-8 mx-auto mt-1"
              alt="Not Available"
            ></img>
            <h1 className="text-[11px] text-white font-bold text-center pb-1">
              Courses
            </h1>
          </Link>
        </div>

        <div className="bg-service-mov rounded-lg">
          <Link to="/mobile-allposts">
            <img
              src="https://i.ibb.co/kyBKkbT/Vector.png"
              className="w-8 mx-auto mt-1 rounded-full"
              alt="Not Available"
            ></img>
            <h1 className="text-[11px] text-white font-bold text-center pb-1">
              Posts
            </h1>
          </Link>
        </div>

        <div className="bg-service-mov rounded-lg">
          <Link to="/mobile-blog"></Link>
          <img
            src={Blog}
            className="w-8 mx-auto mt-1"
            alt="Not Available"
          ></img>
          <h1 className="text-[11px] text-white font-bold text-center pb-1">
            Blog
          </h1>
        </div> */}
      </div>
    </div>
  );
};
