import React from 'react';
import { useForm } from 'react-hook-form';
import CustomHeader from '../../shared/CustomHeader/CustomHeader';

const LawyerServiceForm = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <CustomHeader title={"Lawyer Service Form"} ></CustomHeader>
            {/* Internal NavBar for Lawyer Service Form */}
            <div className="flex justify-center md:h-[54px] items-center mt-[39px] z-50">
                <div className="shadow-[0px_5px_30px_rgba(35,57,184,0.2)] bg-white rounded-[10px] h-full px-[39px]">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-x-[28px]">
                        <button className="mt-4 font-medium leading-tight text-gray-800">
                            Service
                        </button>
                        <button className={"mt-4 font-medium leading-tight text-gray-800"}>
                            Profile
                        </button>
                        <button className={"mt-4 font-medium leading-tight text-gray-800"}>
                            Review
                            <sup className="text-white bg_Color px-[6px] py-1 rounded-full text-[10px]">
                                04
                            </sup>
                        </button>
                        <button className="mt-4 font-medium leading-tight text-gray-800">
                            Activity
                        </button>
                    </div>
                </div>
            </div>
            <h1 className='my-10 md:my-20 text-center text-2xl md:text-3xl font-bold leading-8'>
                Fill the Below form to add your own lawyer service
            </h1>
            <form
                className='mb-52 max-w-4xl px-4 border mx-1 md:mx-2 lg:mx-auto bg-[#FFFFFF]'
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className='text-2xl md:text-3xl text-[#32353B] mt-1 mb-5 leading-8'>
                    Add Your Lawyer Service
                </h2>
                <h3 className='text-lg md:text-xl leading-8 text-[#32353B]'>
                    Service:  A packed service you can deliver for a fixed price in a set time frame.
                </h3>
                <hr className='bg-[#E9ECF2] mt-3 mb-6' />
                <div className='grid grid-cols-12 py-2 px-3 border border-[#707276] rounded'
                    style={{ boxShadow: "0px 1px 1px rgba(37, 40, 55, 0.1)" }}>
                    <input
                        type="text"
                        className='col-span-10'
                        {...register("serviceShortDescription")}
                        placeholder='I can do'
                    />
                    <div className='col-span-2 flex items-center gap-3'>
                        <label htmlFor="servicePrice">for</label>
                        <input
                            type="number"
                            name="servicePrice"
                            className='w-2/3 py-2 text-center rounded bg-[#F5F7FA] border border-[#98999C] '
                            {...register("servicePrice")}
                            id="" />
                    </div>
                </div>
                <div className='flex items-center justify-between px-2 mt-3 mb-10'>
                    <p className='text-xs leading-[18px] text-[#98999C] '>
                        e.g. I can do lawyer task for $60
                    </p>
                    <p className='text-sm leading-5'>
                        CUSTOMIZE PRICES
                    </p>
                </div>
                <div className='mb-7'>
                    <label
                        htmlFor="deliveryTime"
                        className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                        When will you deliver the Offer?
                    </label>
                    <select
                        name='deliveryTime'
                        className='py-2 px-5 w-full rounded border border-[#C3C8D4]'
                        style={{ boxShadow: "0px 1px 1px rgba(37, 40, 55, 0.1)" }}
                        {...register("deliveryTime")}>
                        <option value="5">in 5 days</option>
                        <option value="7">in 7 days</option>
                        <option value="10">in 10 days</option>
                    </select>
                </div>
                <div className='mb-12 grid grid-cols-2 gap-8'>
                    <div>
                        <label
                            htmlFor="category"
                            className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                            Category
                        </label>
                        <select
                            name='category'
                            className='py-2 px-5 w-full rounded border border-[#C3C8D4]'
                            style={{ boxShadow: "0px 1px 1px rgba(37, 40, 55, 0.1)" }}
                            {...register("category")}>
                            <option value="">Select</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="subCategory"
                            className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                            Subcategory
                        </label>
                        <select
                            name='subCategory'
                            className='py-2 px-5 w-full rounded border border-[#D8DCE5]'
                            style={{ boxShadow: "0px 1px 1px rgba(37, 40, 55, 0.1)", backgroundColor: "rgba(171, 178, 196, 0.2)" }}
                            {...register("subCategory")}>
                            <option value="">Select</option>
                        </select>
                    </div>
                </div>
                <div className='mb-8'>
                    <label htmlFor="tags" className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                        Add Tags (Max 5)
                    </label>
                    <input
                        type="text"
                        name="tags"
                        className='w-full px-5 py-2 rounded bg-[#F5F7FA] border border-[#98999C]'
                        style={{ boxShadow: "0px 1.24992px 2.5px rgba(93, 94, 97, 0.25)" }}
                        {...register("tags")}
                        id=""
                    />
                    <label htmlFor="tags" className='text-xs font-bold leading-5 text-[#98999C] ml-1 block'>
                        Can't find a skill? Contact Us to add it.
                    </label>
                </div>

                <div className='my-24' >Make it fun</div>

                <div className='mb-8'>
                    <label htmlFor="serviceDetails" className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                        Provide more details about your Offer
                    </label>
                    <textarea
                        name="serviceDetails"
                        id=""
                        rows="3"
                        className='py-2 px-5 w-full rounded border border-[#C3C8D4]'
                        style={{ boxShadow: "0px 1px 1px rgba(37, 40, 55, 0.1)" }}
                        {...register("serviceDetails")}
                    ></textarea>
                </div>
                <div className='mb-8'>
                    <label htmlFor="serviceFullDescription" className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                        Provide a description for your Offer, optimized for search results
                    </label>
                    <textarea
                        name="serviceFullDescription"
                        id=""
                        rows="3"
                        className='py-2 px-5 w-full rounded border border-[#C3C8D4]'
                        style={{ boxShadow: "0px 1px 1px rgba(37, 40, 55, 0.1)" }}
                        {...register("serviceFullDescription")}
                    ></textarea>
                </div>
                <div className='mb-20'>
                    <label htmlFor="addOnServiceDetail" className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                        EARN EXTRA MONEY - OFFER OPTIONAL ADD-ON SERVICES TO THE BUYER
                    </label>
                    <div className='grid grid-cols-12 py-2 px-3 border border-[#707276] rounded'>
                        <input
                            type="text"
                            name='addOnServiceDetail'
                            className='col-span-8'
                            {...register("addOnServiceDetail")}
                            placeholder='I can'
                        />
                        <div className='col-span-2 flex items-center gap-3'>
                            <label htmlFor="addOnServicePrice">for</label>
                            <input
                                type="number"
                                name="addOnServicePrice"
                                className='w-2/3 py-2 text-center rounded bg-[#F5F7FA] border border-[#98999C] '
                                {...register("addOnServicePrice")}
                                id="" />
                        </div>
                        <div className='col-span-2 flex items-center gap-3'>
                            <label htmlFor="addOnServiceTime">in</label>
                            <select
                                type="number"
                                name="addOnServiceTime"
                                className='w-full py-2 text-center rounded bg-[#F5F7FA] border border-[#98999C] '
                                {...register("addOnServiceTime")}
                                id="">
                                <option value="1">in 1 days</option>
                                <option value="3">in 3 days</option>
                                <option value="5">in 5 days</option>
                            </select>
                        </div>
                    </div>
                    <p className='text-sm text-right leading-5 text-[#E41272] cursor-pointer mt-1'>
                        + Add more items
                    </p>
                </div>
                <div className='mb-20'>
                    <label htmlFor="requiredFromBuyer" className='text-xs font-bold leading-5 text-[#707276] ml-1 block uppercase'>
                        What do you need from the Buyer to get started?
                    </label>
                    <textarea
                        name="requiredFromBuyer"
                        id=""
                        rows="3"
                        className='py-2 px-5 w-full rounded border border-[#C3C8D4]'
                        style={{ boxShadow: "0px 1px 1px rgba(37, 40, 55, 0.1)" }}
                        {...register("requiredFromBuyer")}
                    ></textarea>
                </div>
                <p className='w-11/12 mx-2 text-xs leading-[17px] lowercase text-[#707276] mb-16'>
                    I confirm that I am able to deliver this service to Buyers within the delivery time specified. I will update or pause my Offer if I can no longer meet this delivery time. I understand that late delivery will adversely affect my rankings on PPH and will entitle the Buyer to a refund. See T&Cs.
                </p>
                {/* Submit button */}
                <input
                    type="submit"
                    className='bg-[#E41272] text-white tracking-wider px-8 pt-4 pb-5 border border-[#3D66D7] rounded font-bold leading-4 mb-5'
                    value={"Submit Offer"}
                />
            </form>
        </div>
    );
};

export default LawyerServiceForm;