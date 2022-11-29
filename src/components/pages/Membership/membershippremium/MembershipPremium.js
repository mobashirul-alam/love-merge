import React from "react";
import "../../../../assets/css/MembershipPremium.css";
export const MembershipPremium = () => {
  const prices = [
    {
      id: 1,
      price: 4.99,
      time: "1 MONTH",
    },
    {
      id: 2,
      price: 8.99,
      time: "2 MONTH",
    },
    {
      id: 3,
      price: 12.99,
      time: "6 MONTH",
    },
    {
      id: 4,
      price: 16.99,
      time: "1 YEAR",
    },
  ];
  return (
    <div className="premium-membership">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6 mx-auto ml-28 mr-28 mt-20">
        {prices?.map(({ id, price, time }) => {
          return (
            <div
              className="card membership-card lg:max-w-lg bg-gray-200 shadow-xl pt-10 rounded-lg mb-32"
              key={id}
            >
              <div className="card-body">
                <h2 className="text-black  text-xl text-center pb-4">{time}</h2>
                <p className="text-center text-5xl font-bold text-[#ac216c] pb-2">
                  ${price}
                </p>
                <p className="text-xl pt-4 text-center">PER {time.slice(1)}</p>
                <div className="card-actions w-full">
                  <div className="text-center">
                    <button className=" bg-member-premium-btn   text-white  ">
                      Buy Now
                    </button>
                  </div>
                  <div className="member-sub pt-8 pb-"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1 className="text-white text-3xl text-center">
        If you have any questions Contact Us
      </h1>
      <div className="grid lg:grid-cols-6 sm:grid-cols-1 gap-2 mx-auto ml-14 mr-14 mt-20">
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/left-img.png"
            className="hhh"
          ></img>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <img
            alt="Not Available"
            src="https://pixner.net/peyamba/peyamba/assets/images/membership/right-img.png"
            className="hhhh"
          ></img>
        </div>
      </div>
    </div>
  );
};
