import React from "react";
import { ThreeDots } from "react-loader-spinner";
import brandLogo from "../../../../../assets/images/Logo/lovemerg.jpeg";

export const BrandLoader = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <img src={brandLogo} alt="" />
      <ThreeDots
        height="60"
        width="60"
        radius="9"
        color="#ff317b"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
