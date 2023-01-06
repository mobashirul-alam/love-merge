import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";
import "../mobileversion/TopMenu.css";
export const TopMenuTab = () => {
    const [user] = useAuthState(auth);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <div>
            <div className="grid grid-cols-5  bg-top rounded ml-4 pt-4 pb-4">
                <div className="ml-4 mov-top w-8 rounded-full  col-span-1">
                    <img src="https://i.ibb.co/pZFRdCB/512-512-Icon-1.png" alt="Not Available"></img>
                </div>
                <div onClick={handleClick} className="col-span-3">
                    {/* <p className="font-bold text-sm mt-1 shongshari-mov">
                        shongshari.com{" "}
                        <span>
                            <i className="fa-solid fa-angle-down"></i>
                        </span>
                    </p> */}
                    <button aria-describedby={id} type="button" onClick={handleClick} className="ml-6 mt-1">
                        About Shongshari <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <Popper id={id} open={open} anchorEl={anchorEl}>
                        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }} className="p-28">
                            {user && (
                                <div className="` ">
                                    <img src={user.photoURL} className="w-20 rounded-full" alt="profile"></img>
                                    <Link to="" className="mt-4">
                                        <span className=" pt-2   pb-2 ">{user.displayName}</span>
                                    </Link>
                                </div>
                            )}
                        </Box>
                    </Popper>
                </div>

                <div className="">
                    <i className="fa-regular fa-bell mr-8 ml-4"></i>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            {user  && (
                <div className="` ">
                    <Link to="" className="mt-4">
                        <span className="bg-red-500 text-white pt-2   pb-2  ml-8">{user.displayName}</span>
                    </Link>
                </div>
            )}
            {!user &&  (
                <div className="` ">
                    <Link to="/login" className="mt-4">
                        <span className="bg-red-500 text-white pt-2 pl-4 pr-4 pb-2 mr-4 rounded-full ml-8">Login</span>
                    </Link>

                    <span className="  pr-4">or</span>
                    <Link to={"/signup"} className="bg-red-500 text-white pt-2 pl-4 pr-4 pb-2 mr-4 rounded-full"></Link>
                </div>
            )}
        </div>
    );
};
