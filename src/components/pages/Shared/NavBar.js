import React from "react";
import { Link, NavLink } from "react-router-dom";
import NavBarCSS from "../../../assets/css/navbar.module.css";
import blackLogo from "../../../assets/images/Logo/logoBlack.png";
import blog from "../../../assets/images/NavIcons/Blog.svg";
import findPartner from "../../../assets/images/NavIcons/Find-Your-Partner.svg";
import membership from "../../../assets/images/NavIcons/Membership.svg";
import course from "../../../assets/images/NavIcons/Online-Course.svg";
// import shop from '../../../assets/images/NavIcons/Shop.svg';
import agent from "../../../assets/images/NavIcons/Agent.svg";
import cart from "../../../assets/images/NavIcons/cart.png";
import kazi from "../../../assets/images/NavIcons/Kazi.svg";
import findALawyer from "../../../assets/images/NavIcons/Lawyer.svg";
import register from "../../../assets/images/NavIcons/Profile-Login-Icon.svg";
import bng from "../../../assets/images/NavIcons/Language-Switcher-Bangla.svg";
import eng from "../../../assets/images/NavIcons/Language-Switcher-English.svg";
import { useState } from "react";

const NavBar = () => {
  const [language, setLanguage] = useState(true);
  const allMenu = [
    {
      id: 1,
      to: "/findpartner",
      to: "/findpartner",
      icon: findPartner,
      tooltip: "Find Your Partner",
    },
    { id: 2, to: "/membership", icon: membership, tooltip: "Membership" },
    { id: 3, to: "/blog", icon: blog, tooltip: "Blog" },
    { id: 4, to: "/course", icon: course, tooltip: "Course" },
    // { id: 5, to: '/shop', icon: shop, tooltip: "Shop" },
    { id: 6, to: "/findalawyer", icon: findALawyer, tooltip: "Find a Lawyer" },
    { id: 7, to: "/kazi", icon: kazi, tooltip: "Kazi" },
    { id: 8, to: "/agent", icon: agent, tooltip: "Agent" },
  ];

  const banglaHandler = () => {
    setLanguage(!language);
  };
  const englishHandler = () => {
    setLanguage(!language);
  };

  return (
    <header
      className={`bg-white  sticky top-0 h-[90px] z-50 shadow-md body-font ${NavBarCSS.navbar}`}
    >
      <div className="custom-container container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={blackLogo} alt="" />
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  	flex flex-wrap items-center text-base justify-center">
          {allMenu.map((menu) => (
            <div key={menu.id}>
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  isActive ? "" : `${NavBarCSS.hasTooltip}`
                }
              >
                <div
                  style={{ marginLeft: "15px" }}
                  className="flex flex-col items-center"
                >
                  <img
                    className="hover:rotate-[360deg] duration-[2000ms] w-[50px] h-[75px]"
                    src={menu.icon}
                    alt=""
                  />
                  <span
                    className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-[70px] ml-[14px]`}
                    style={{
                      transform: "translateX(-50%) rotate(45deg)",
                      backgroundImage:
                        "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  ></span>
                  <span
                    className={`${NavBarCSS.tooltip} z-50 rounded-[40px] shadow-lg px-3 py-1 text-white text-xs whitespace-nowrap uppercase mt-20`}
                    style={{
                      backgroundImage:
                        "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  >
                    {menu.tooltip}
                  </span>
                </div>
              </NavLink>
            </div>
          ))}
        </nav>
        <div>
          <ul className={"flex justify-end items-center gap-6 h-32"}>
            <li className={`${NavBarCSS.hasTooltip}`}>
              <div className="flex flex-col items-center cursor-pointer">
                <img className="w-14" src={register} alt="img" />
                <span
                  className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-14 ml-[14px]`}
                  style={{
                    transform: "translateX(-50%) rotate(45deg)",
                    backgroundImage:
                      "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                  }}
                ></span>
                <Link
                  to="/login"
                  className={`${NavBarCSS.tooltip} rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                  style={{
                    backgroundImage:
                      "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                  }}
                >
                  Login
                </Link>
              </div>
            </li>
            <li className="relative ">
              <Link to="/cart" className={`${NavBarCSS.hasTooltip}`}>
                <div className="flex flex-col items-center ">
                  <img src={cart} className="w-[40px]" alt="" />
                  <span className="absolute top-[-7px] right-[-1px] text-white px-[6px] py-[2px] text-xs font-bold bg-[#dc3545] rounded">
                    0
                  </span>

                  <span
                    className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-10 ml-[14px]`}
                    style={{
                      transform: "translateX(-50%) rotate(45deg)",
                      backgroundImage:
                        "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  ></span>
                  <span
                    className={`${NavBarCSS.tooltip} z-50 rounded-[40px] shadow-lg px-3 py-1 text-white text-xs whitespace-nowrap uppercase mt-[50px]`}
                    style={{
                      backgroundImage:
                        "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  >
                    Cart
                  </span>
                </div>
              </Link>
            </li>

            <li>
              <li
                className={`relative cursor-pointer ${NavBarCSS.engDropdown}`}
              >
                <div>
                  <img className="w-[60px]" src={language ? eng : bng} alt="" />
                </div>
                <div
                  className={`absolute eng-menu border border-black left-0 z-10 top-[70px] w-[80px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${NavBarCSS.engMenu}`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  <div className="py-1 text-center" role="none">
                    <button
                      onClick={banglaHandler}
                      className=" text-[#f36] block px-4   text-[22px]"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                    >
                      BN
                    </button>
                    <button
                      onClick={englishHandler}
                      className="block px-4 text-[#f36]  text-[22px]"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-1"
                    >
                      EN
                    </button>
                  </div>
                </div>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
