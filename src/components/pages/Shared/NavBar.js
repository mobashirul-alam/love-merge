// Configuration
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Third party packages
import { HiShoppingBag } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";

// Components
import { decodeToken } from "react-jwt";
import blackLogo from "../../../assets/images/Logo/lovemerg.jpeg";
import blog from "../../../assets/images/NavIcons/Blog.svg";
import findPartner from "../../../assets/images/NavIcons/Find-Your-Partner.svg";
import kazi from "../../../assets/images/NavIcons/Kazi.svg";
import findALawyer from "../../../assets/images/NavIcons/Lawyer.svg";
import membership from "../../../assets/images/NavIcons/Membership.svg";
import course from "../../../assets/images/NavIcons/Online-Course.svg";
import register from "../../../assets/images/NavIcons/Profile-Login-Icon.svg";
import shop from "../../../assets/images/NavIcons/Shop.svg";
import {
  loadPhotos,
  loadUserData,
} from "../../../Redux/features/userInfo/userInfo";
import MobileNav from "./MobileNav";

// CSS files
import "../../../App.css";
import NavBarCSS from "../../../assets/css/navbar.module.css";
import { profilePathMaker } from "../../../assets/utilities/profilePathDecisionMaker/profilePathMaker";
import getCookie from "../../../Helper/cookies/getCookie";
import removeCookie from "../../../Helper/cookies/removeCookie";
import isLoggedIn from "../../../Helper/hooks/checkLoggerPersestency/isLoggedIn";
import { LanguageSwitcher } from "./LanguageSwitcher";

const NavBar = ({ bg }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = isLoggedIn();
  const userInfo = useSelector(
    (state) => state?.persistedReducer?.userInfo?.userInfo?.user
  );

  const token = getCookie("token");
  const tokenInfo = decodeToken(token);

  const { role } = tokenInfo || {};
  const userProfilePath = profilePathMaker(role);

  // js variable
  let { profilePhoto } = userInfo || {};

  profilePhoto = profilePhoto
    ? profilePhoto
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const allMenu = [
    {
      id: 1,
      to: "/find-partner/suggested",
      icon: findPartner,
      tooltip: "Find Your Partner",
    },
    { id: 2, to: "/membership", icon: membership, tooltip: "Membership" },
    { id: 3, to: "/blog", icon: blog, tooltip: "Blog" },
    { id: 4, to: "/course", icon: course, tooltip: "Course" },
    { id: 5, to: "/findalawyer", icon: findALawyer, tooltip: "Find a Lawyer" },
    {
      id: 6,
      to: "/kazi",
      icon: kazi,
      tooltip: "Kazi",
    },
    {
      id: 7,
      to: "/agent",
      icon: "https://svgshare.com/i/pDa.svg",
      tooltip: "Agent",
    },
    { id: 8, to: "/shop", icon: shop, tooltip: "Shop" },
  ];

  // function declaration for logout
  let logoutButton = async () => {
    dispatch(loadUserData(null));
    dispatch(loadPhotos([]));
    navigate("/");
    removeCookie("token");
  };

  return (
    <>
      <header
        className={`${
          bg ? "bg-transparent" : "bg-white"
        } sticky hidden lg:block top-0 lg:h-[90px] z-50 shadow-md body-font ${
          NavBarCSS.navbar
        }`}
      >
        <div className=" lg:max-w-[1000px]  xl:max-w-[1200px] mx-auto flex flex-wrap  flex-col md:flex-row items-center justify-between">
          <Link
            to="/"
            className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0 "
          >
            <img className="w-5/6" src={blackLogo} alt="Not Available" />
          </Link>
          {/* <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center">
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
                      alt="Not Available"
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
          </nav> */}
          <div>
            <ul className={"flex justify-end items-center gap-2 h-32"}>
              <li className={`${NavBarCSS.hasTooltip}`}>
                <div className="flex flex-col items-center cursor-pointer">
                  {user ? (
                    <img
                      className="w-[60px] h-[60px] rounded-[100%] object-cover"
                      src={profilePhoto}
                      alt=""
                    />
                  ) : (
                    <img className="w-14" src={register} alt="Not Available" />
                  )}
                  <span
                    className={`${NavBarCSS.tooltip} z-50 h-[15px] w-[15px] mt-14 ml-[14px]`}
                    style={{
                      transform: "translateX(-50%) rotate(45deg)",
                      backgroundImage:
                        "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                    }}
                  ></span>

                  {user ? (
                    <>
                      <Link
                        to={userProfilePath}
                        className={`${NavBarCSS.tooltip} rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                        style={{
                          backgroundImage:
                            "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                        }}
                      >
                        Profile
                      </Link>
                      <span
                        className={`${NavBarCSS.tooltip} top-[50px] z-10 h-[15px] w-[15px] mt-14 ml-[14px]`}
                        style={{
                          transform: "translateX(-50%) rotate(45deg)",
                          backgroundImage:
                            "linear-gradient( 103deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                        }}
                      ></span>

                      <button
                        className={`${NavBarCSS.tooltip} top-[53px] rounded-xl z-50 shadow-lg px-3 py-1 text-white text-xs font-bold whitespace-nowrap uppercase mt-[66px]`}
                        style={{
                          backgroundImage:
                            "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)",
                        }}
                        onClick={logoutButton}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              </li>
              {/* {user && (
                <div className="h-full flex items-center relative -top-[14px]">
                  <div
                    className="relative hover:scale-110 duration-300 cursor-pointer"
                    onClick={() => navigate("/cart")}
                  >
                    <HiShoppingBag className="h-[60px] w-[60px] text-[#E42986] -z-20" />
                    <span className="w-[18px] h-[18px] rounded-full bg-[#E42986] text-white flex justify-center items-center absolute z-50 right-0 top-[10px] text-[12px]">
                      1
                    </span>
                  </div>
                </div>
              )} */}
              {/* <LanguageSwitcher /> */}
            </ul>
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
};

export default NavBar;
