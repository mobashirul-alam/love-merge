// normal import 
import React, { useState } from "react";

// configuration 
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase.init";

// material ui 
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// css import 
import "./TopMenu.css";

export const TopMenu = () => {
    // hooks variables 
    const [user] = useAuthState(auth);

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
            <div className="grid grid-cols-5  bg-top rounded  pt-2 pb-2">
                <div className="ml-4 mov-top w-8 rounded-full mt-1 col-span-1">
                    <img src="https://i.ibb.co/pZFRdCB/512-512-Icon-1.png" alt="Not Available"></img>
                </div>
                


                <div className="col-span-3">
                   <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className='font-bold text-black'
      >
       <span className="text-black font-bold"> Shongshari.com <i class="fa-solid fa-angle-down"></i></span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
            <div className="login-signup">
<button className="bg-login-mov-home rounded-full text-white px-3">Log In</button>
<p className="mx-2">Or</p>
<button className="bg-login-mov-home rounded-full text-white px-3">Sign Up</button>
            </div>
        </MenuItem>
      </Menu>
                </div>
                <div className="col-span-1 mt-2">
                    <i className="fa-regular fa-bell mr-4"></i>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    );
};
