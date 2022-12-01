import React from 'react';
import soleMate from '../../../../assets/images/HomeImage/soleMate.png';
import bgHeartShape from '../../../../assets/images/HomeImage/heartshape.png';
import ScaleAnimationCSS from '../../../../assets/css/ScaleAnimation.module.css';
import { Link } from 'react-router-dom';

const FindSoleMate = () => {
    return (
        <div className='bg-[#5736cb] relative h-60 lg:h-72 overflow-hidden mt-10 md:mt-5'>
            <img className='absolute top-0' style={{ animation: `${ScaleAnimationCSS.scaleAni} 5s linear infinite` }} src={bgHeartShape} alt="Not Available" />
            <div className='h-60 lg:h-72 overflow-hidden w-5/6 md:w-11/12 lg:w-5/6 mx-auto flex flex-col md:flex-row items-center'>
                <div className='md:flex-1 my-auto z-10 bg-black md:bg-none rounded-md md:rounded-none bg-opacity-30 md:bg-opacity-0 py-2 md:py-0 px-2 md:px-0'>
                    <div>
                        <h2 className='mb-2 lg:mb-4 text-3xl lg:text-4xl font-medium tracking-wide leading-8 md:leading-6 text-white'>Best Ways to Find Your True Sole Mate</h2>
                        <Link
                            to={'/signup'}
                            className="px-8 md:px-6 lg:px-8 pt-3 md:pt-2 lg:pt-3 pb-2 md:pb-1 lg:pb-2 text-2xl md:text-xl lg:text-2xl text-white font-semibold rounded-md tracking-[.25em] shadow-xl shadow-[#0c4ea54d] cursor-pointer leading-6 md:leading-5 lg:leading6"
                            style={{ backgroundImage: "linear-gradient(155deg, rgba(228, 18, 114, 1) 0%, #4844a5 100%)" }}
                        >
                            JOIN NOW!
                        </Link>
                    </div>
                </div>
                <div className='flex-1 absolute md:static -z-0 lg:mr-10'>
                    <img src={soleMate} alt="Not Available" />
                </div>
            </div>
        </div>
    );
};

export default FindSoleMate;