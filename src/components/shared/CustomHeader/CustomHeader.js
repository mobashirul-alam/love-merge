import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import "../../../assets/css/customHeader.css";
import "../../../index.css";
import NavBar from "../../pages/Shared/NavBar";

export const CustomHeader = ({ title }) => {
    return (
        <div className="custom_header_Container mb-[30px]">
            <NavBar />
            <div className="h-[calc(344px-90px)] custom-container flex justify-start items-center pl-10 xl:pl-0">
                <div>
                    <h1 className="text-[50px] text-white font-fira leading-[60px] font-bold">{title}</h1>
                    <div className="flex items-center text-[#ffd0fd] text-[18px]">
                        <Link to="/" className="hover:text-white font-bold">
                            HOME
                        </Link>{" "}
                        <IoIosArrowForward /> {title}
                    </div>
                </div>
            </div>
        </div>
    );
};
