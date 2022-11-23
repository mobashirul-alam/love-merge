import React from 'react';
// import ChatGelary from './ChatGelary';
// import ChatRequest from './ChatRequest';
import certificate from "../../../assets/images/certificate.jpg";
import profilePhoto from "../../../assets/images/profileSmile.jpg";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsCommand } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';
import { BiUserPlus } from 'react-icons/bi';
import ChartBoardCSS from '../../../assets/css/chartBoard.module.css';

const ChartBoard = () => {

    const certificateInfo = [
        { id: 1, text: "Personal Certificate", img: certificate },
        { id: 2, text: "Professional Certificate", img: certificate },
        { id: 3, text: "Educational Certificate", img: certificate },
    ];

    const suggestedProfiles = [
        { id: 1, name: "Mr. Sherlock", img: profilePhoto },
        { id: 2, name: "Mr. Sherlock", img: profilePhoto },
        { id: 3, name: "Mr. Sherlock", img: profilePhoto },
        { id: 4, name: "Mr. Sherlock", img: profilePhoto },
        { id: 5, name: "Mr. Sherlock", img: profilePhoto },
        { id: 6, name: "Mr. Sherlock", img: profilePhoto },
        { id: 7, name: "Mr. Sherlock", img: profilePhoto },
        { id: 8, name: "Mr. Sherlock", img: profilePhoto },
    ];

    return (
        <div>
            {/* <ChatGelary />
            <ChatRequest /> */}

            {/* ----- Certificate ----- */}
            <div className='rounded-xl p-5' style={{ backgroundImage: "linear-gradient(180deg, #FFD7F6 0%, #FFC1E6 100%)" }}>
                <div className='flex justify-start items-center mx-1 gap-6'>
                    <TbMessageCircle2 className='text-[#333333] text-2xl' />
                    <h1 className='text-[#333333] text-2xl leading-[34px] font-bold' >Certificate</h1>
                </div>
                {
                    certificateInfo.map(certificate => <div key={certificate.id}>
                        <h3 className='mt-3 mb-2'>
                            {certificate.text}
                        </h3>
                        <div className={`relative ${ChartBoardCSS.hasViewButton}`}>
                            <img className='rounded-lg' src={certificate.img} alt="" />
                            <button className={`${ChartBoardCSS.showViewButton} top-[35%] left-[35%] rounded block bg-white text-sm font-medium leading-[26px] px-4 py-1 duration-300`}>
                                View
                            </button>
                        </div>
                    </div>)
                }
            </div>

            {/* ----- You may like ----- */}
            <div className='mt-[70px]'>
                <div className='flex justify-start items-center mx-1 gap-6 mb-6'>
                    <BsCommand className='text-[#2E3A59] text-2xl' />
                    <h1 className='text-[#333333] text-2xl leading-[34px] font-bold' >You May Like</h1>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    {
                        suggestedProfiles.map(profile => <div
                            key={profile.id}
                            className="bg-white rounded-[20px] flex flex-col items-center justify-center px-3 py-2"
                            style={{ boxShadow: "0px 4px 4px rgba(62, 73, 84, 0.04)" }}
                        >
                            <img className='w-[45px] h-[45px] rounded-full' src={profile.img} alt="" />
                            <h4 className='text-xs leading-5 font-semibold'>
                                {profile.name}
                            </h4>
                            <div className='flex justify-between items-center gap-4'>
                                <span className='bg-[#FFDFF4] p-3 rounded-full'>
                                    <MdMessage className='text-[#E41272] text-xl' />
                                </span>
                                <span className='bg-[#FFDFF4] p-3 rounded-full'>
                                    <BiUserPlus className='text-[#E41272] text-xl' />
                                </span>
                            </div>
                        </div>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ChartBoard;