// configuration
import React from "react";
import { Link, useNavigate } from "react-router-dom";

// Third party package
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// components
import { useDispatch, useSelector } from "react-redux";
import removeCookie from "../../../Helper/cookies/removeCookie";
import isLoggedIn from "../../../Helper/hooks/checkLoggerPersestency/isLoggedIn";
import { loadUserData } from "../../../Redux/features/userInfo/userInfo";
import logoSmall from "../../../assets/images/Logo/lovemergSmall.png";

// css import;
import "./TopMenu.css";
export const TopMenu = () => {
  // hooks variables
  const user = isLoggedIn();
  const userInfo = useSelector(
    (state) => state?.persistedReducer?.userInfo?.userInfo?.user
  );
  let { profilePhoto } = userInfo || {};
  profilePhoto = profilePhoto
    ? profilePhoto
    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  let name;
  if (userInfo?.firstName) {
    name = userInfo?.firstName || "Empty";
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutButton = async () => {
    removeCookie("token");
    dispatch(loadUserData(null));
    navigate("/");
    localStorage.removeItem("accessToken");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // function
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="flex items-center justify-between bg-top rounded px-4 md:px-6 py-2">
        <div>
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={profilePhoto}
                className="rounded-full w-8"
                alt="Not Available"
              ></img>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="font-bold text-black"
              >
                <span className="text-black font-bold">
                  {" "}
                  {name} <i className="fa-solid fa-angle-down"></i>
                </span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center">
              <div className="mov-top w-8 rounded-full mt-1">
                <img
                  className="rounded-full"
                  src={logoSmall}
                  alt="Not Available"
                ></img>
              </div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="font-bold text-black"
              >
                <span className="text-black font-bold">
                  {" "}
                  Lovemerg <i className="fa-solid fa-angle-down"></i>
                </span>
              </Button>
            </div>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              {user ? (
                <div>
                  <button
                    onClick={logoutButton}
                    className="bg-login-mov-home rounded-full text-white px-3"
                  >
                    LogOut
                  </button>
                </div>
              ) : (
                <div className="login-signup">
                  <Link to="/mobile-login">
                    <button className="bg-login-mov-home rounded-full text-white px-3">
                      Log In
                    </button>
                  </Link>
                  <p className="mx-2">Or</p>
                  <Link to="/mobile-signup">
                    <button className="bg-login-mov-home rounded-full text-white px-3">
                      Sign Up
                    </button>
                  </Link>
                </div>
              )}
            </MenuItem>
          </Menu>
        </div>
        <div className="col-span-1 mt-2">
          <Link to="/notifications">
            <i className="fa-regular fa-bell mr-4"></i>
          </Link>
          <Link to="/setting">
            {" "}
            <i className="fa-solid fa-bars"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
