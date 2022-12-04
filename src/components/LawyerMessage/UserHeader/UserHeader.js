import React from 'react';
import user from '../../../assets/images/LawyerMessage/user.png';
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const UserHeader = () => {
    return (
        <div className='flex justify-between font-Poppins bg-[#FFFFFF] shadow-[0px_3px_4px_rgba(62, 73, 84, 0.04)] rounded-[20px] px-[30px]'>
            <div className='flex py-8 mr-[169px]'>
                <img className='rounded-[64px]' src={user} alt="" />
                <div className='ml-[15px]'>
                    <h1 className='font-semibold text-[18px] text[#000000]'>Peter Parkur</h1>
                    <p className='mt-2 font-normal text-[14px] text-[#A32BCA]'>Available</p>
                </div>
            </div>
            <div className='flex items-center content-center bg-[#A32BCA] shadow-[0px_4px_20px_rgba(41, 83, 232, 0.11)] rounded-[27px] font-medium text-base text-[#FFFFFF] my-9 px-5 gap-3'>
                <HiChatBubbleBottomCenterText />
                <button>+ New</button>
            </div>
        </div>
    );
};

export default UserHeader;