import React from 'react';
import "../../assets/css/anexecutive.css";
import p1 from "../../assets/images/features/i1.png";
import p2 from "../../assets/images/features/i2.png";
import { default as p3, default as p4 } from "../../assets/images/features/i3.png";
import Title from '../SingleProfilesUser/Title/Title';

const Anexecutive = () => {
    return (
        <div className='container mx-auto py-10 px-4 md:px-0'>
            <div className='main-container'>
                <div className='section-header'>
                    <div className='text-center mb-6'>
                        <h1 className='text-2xl font-semibold text-red-600'>An Executive List Of</h1>
                        <h2 className='text-1xl font-semibold text-red-600 py-6'>Amazing feature</h2>
                        <p className='font-bold'>To find meaningfull deal and life petner</p>
                    </div>
                </div>
                <div className='section-body pt-6'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className='relative'>
                            <div className='z-10 free-btn absolute top-44 right-28 md:-right-6 lg:-right-4'>
                                <p><small>Start now for</small></p>
                                <p className='py-1 text-3xl font-semibold'>Free</p>
                                <p>7 day Trail</p>
                            </div>
                            <div className='section-img-container w-full md:w-11/12 z-0'>
                            </div>
                        </div>
                        <div className='section-text-contener '>
                            <div className='flex items-start'>
                                <div className='rounded-img' >
                                    <img src={p1} alt="" />
                                </div>
                                <div className='ml-5 pb-3 md:pr-20'>
                                    <Title titleText="Simple to use"></Title>
                                    <p className='my-1'>Simple steps to follow to have a matching connection</p>
                                    <hr />
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='rounded-img'>
                                    <img src={p2} alt="" />
                                </div>
                                <div className='ml-5 pb-3 md:pr-20'>
                                    <Title titleText="Smart matching"></Title>
                                    <p className='my-1'>Simple steps to follow to have a matching connection</p>
                                    <hr />
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='rounded-img'>
                                    <img src={p3} alt="" />
                                </div>
                                <div className='ml-5 pb-3 md:pr-20'>
                                    <Title titleText="Filter very fast"></Title>
                                    <p className='my-1'>Simple steps to follow to have a matching connection</p>
                                    <hr />
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='rounded-img'>
                                    <img src={p4} alt="" />
                                </div>
                                <div className='ml-5 pb-3 md:pr-20'>
                                    <Title titleText="Cool community"></Title>
                                    <p className='my-1'>Simple steps to follow to have a matching connection</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Anexecutive;