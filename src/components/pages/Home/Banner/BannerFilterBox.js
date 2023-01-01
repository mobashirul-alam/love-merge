import { AutoComplete, Select, Slider } from "antd";

import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFilterObject } from "../../../../Redux/features/filter/filterSlice";

const BannerFilterBox = () => {
    const [looking, setLooking] = useState("");
    const [age, setAge] = useState([]);
    const [religion, setReligion] = useState("");
    const [currentLocation, setCurrentLocation] = useState("");
    const [professionalStatus, setProfessionalStatus] = useState("");
    const [homeTown, setHomeTown] = useState("");
    const [educationalQualification, seteducationalQualification] = useState("");
    const dispatch = useDispatch();

    const options = [
        {
            value: "Teacher",
        },
        {
            value: "Programmer",
        },
        {
            value: "BusinessMan",
        },
        {
            value: "Accountant",
        },
    ];
    const hometown = [
        {
            value: "Chittagong",
        },
        {
            value: "Dhaka",
        },
        {
            value: "Rajshahi",
        },
        {
            value: "Sylhet",
        },
        {
            value: "Jessore",
        },
        {
            value: "Dinajpur",
        },
        {
            value: "Mymensingh",
        },
        {
            value: "Comilla",
        },
        {
            value: "Barisal",
        },
        {
            value: "Faridpur",
        },
        {
            value: "Bogra",
        },
        {
            value: "Pabna",
        },
        {
            value: "Rangamati",
        },
        {
            value: "Kushtia",
        },
        {
            value: "Rangpur",
        },
        {
            value: "Noakhali",
        },
        {
            value: "Khulna",
        },
        {
            value: "Tangail",
        },
        {
            value: "Panchagarh",
        },
        {
            value: "Bhola",
        },
        {
            value: "Bandarban",
        },
        {
            value: "Chandpur",
        },
        {
            value: "Habiganj",
        },
        {
            value: "Lakshmipur",
        },
        {
            value: "Barguna",
        },
        {
            value: "Jhalokati",
        },
        {
            value: "Pirojpur",
        },
        {
            value: "Patuakhali",
        },
        {
            value: "Jhenaidah",
        },
        {
            value: "Narail",
        },
        {
            value: "Magura",
        },
        {
            value: "Lalmonirhat",
        },
        {
            value: "Kurigram",
        },
        {
            value: "Nilphamari",
        },
        {
            value: "Gaibandha",
        },
        {
            value: "Thakurgaon",
        },
        {
            value: "Satkhira",
        },
        {
            value: "Bagerhat",
        },
        {
            value: "Chuadanga",
        },
        {
            value: "Meherpur",
        },
        {
            value: "Sirajganj",
        },
        {
            value: "Joypurhat",
        },
        {
            value: "Natore",
        },
        {
            value: "Naogaon",
        },
        {
            value: "Nawabganj",
        },
        {
            value: "Khagrachhari",
        },
        {
            value: "Feni",
        },
        {
            value: "Brahmanbaria",
        },
        {
            value: "Sunamganj",
        },
        {
            value: "Cox's Bazar",
        },
        {
            value: "Moulvibazar",
        },
        {
            value: "Gopalganj",
        },
        {
            value: "Shariatpur",
        },
        {
            value: "Madaripur",
        },
        {
            value: "Rajbari",
        },
        {
            value: "Gazipur",
        },
        {
            value: "Kishoreganj",
        },
        {
            value: "Jamalpur",
        },
        {
            value: "Sherpur",
        },
        {
            value: "Netrakona",
        },
        {
            value: "Munshiganj",
        },
        {
            value: "Narsingdi",
        },
        {
            value: "Narayanganj",
        },
        {
            value: "Manikganj",
        },
    ];
    const division = [
        {
            value: "Dhaka",
        },
        {
            value: "Borishal",
        },
        {
            value: "Chattogram",
        },
        {
            value: "Khulna",
        },
        {
            value: "Rajshahi",
        },
        {
            value: "Rangpur",
        },
        {
            value: "Rangpur",
        },
        {
            value: "Rangpur",
        },
        {
            value: "Mymensingh",
        },
        {
            value: "Sylhet",
        },
    ];
    const educations = [
        {
            value: "SSC",
        },
        {
            value: "HSC",
        },
        {
            value: "Diploma in Engineering",
        },
        {
            value: "Fazil",
        },
        {
            value: "Bachelor's",
        },
        {
            value: "Kamil",
        },
        {
            value: "Bachelor (Engineering & Technology)",
        },
        {
            value: "Master's",
        },
        {
            value: "Master of Philosopy",
        },
        {
            value: "Doctorate",
        },
    ];
    const navigate = useNavigate();

    const handleFilter = () => {
        const filterObject = {
            basicInfo: {
                religion,
                homeTown,
                age,
                currentLocation,
                looking,
            },
            professionalInfo: {
                educationalQualification,
                professionalStatus,
            },
        };
        dispatch(setFilterObject(filterObject));

        navigate("/find-partner/filter");
    };

    return (
        <Fragment>
            <div style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }} className="min-w-[280px] rounded-[12px] h-[400px] bg-[#FFFFFF] p-5">
                <div className="grid grid-cols-2">
                    <div>
                        <div>
                            <h2 className=" text-[#000000] font-medium">Looking for</h2>
                            <Select
                                className="mt-[5px] text-xs text-[#72777A]"
                                defaultValue="Bride"
                                style={{
                                    width: 101,
                                    boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "5px",
                                }}
                                onSelect={val => setLooking(val)}
                                options={[
                                    {
                                        value: "Bride",
                                        label: "Bride",
                                    },
                                    {
                                        value: "Groom",
                                        label: "Groom",
                                    },
                                ]}
                            />
                        </div>
                        <div className="mt-[15px]">
                            <h2 className=" text-[#000000] font-medium">Age</h2>
                            <div className="mt-[5px]">
                                <span className="text-[14px] block text-center font-medium text-[#72777A]">{/* {age[0]} - {age[1]} */}</span>
                                <Slider
                                    className="text-[#E41272]"
                                    range={{ draggableTrack: true }}
                                    onChange={val => setAge(val)}
                                    defaultValue={[20, 50]}
                                />
                            </div>
                        </div>
                        <div className="mt-[15px]">
                            <h2 className=" text-[#000000] font-medium">Religion</h2>
                            <Select
                                className="mt-[5px] text-xs text-[#72777A]"
                                defaultValue="Islam"
                                style={{
                                    width: 101,
                                    boxShadow: "2px 2px 8px 2px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "5px",
                                }}
                                onSelect={val => setReligion(val)}
                                options={[
                                    {
                                        value: "Islam",
                                        label: "Islam",
                                    },
                                    {
                                        value: "Hinduism",
                                        label: "Hinduism",
                                    },

                                    {
                                        value: "Christian",
                                        label: "Christian",
                                    },
                                    {
                                        value: "Buddhist",
                                        label: "Buddhist",
                                    },
                                    {
                                        value: "Atheist",
                                        label: "Atheist",
                                    },
                                ]}
                            />
                        </div>
                        <div className="mt-[15px]">
                            <h2 className=" text-[#000000] font-medium">Current Location</h2>
                            <AutoComplete
                                style={{
                                    width: 101,
                                }}
                                options={division}
                                placeholder="Location"
                                onSelect={val => setCurrentLocation(val)}
                                filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </div>
                    </div>
                    <div className="ml-[25px]">
                        <div className="">
                            <h2 className=" text-[#000000] font-medium">Profession</h2>
                            <AutoComplete
                                style={{
                                    width: 101,
                                }}
                                options={options}
                                placeholder="Profession"
                                onSelect={val => setProfessionalStatus(val)}
                                filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </div>
                        <div className="mt-[20px]">
                            <h2 className=" text-[#000000] font-medium">Hometown</h2>
                            <AutoComplete
                                style={{
                                    width: 101,
                                }}
                                options={hometown}
                                placeholder="Home Town"
                                onSelect={val => setHomeTown(val)}
                                filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </div>
                        <div className="mt-[15px]">
                            <h2 className=" text-[#000000] font-medium">Education</h2>
                            <AutoComplete
                                style={{
                                    width: 101,
                                }}
                                options={educations}
                                placeholder="Education"
                                onSelect={val => seteducationalQualification(val)}
                                filterOption={(inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
                            />
                        </div>
                    </div>
                </div>
                <button
                    onClick={handleFilter}
                    className="rounded-[48px] w-[121px] h-[31px]  block mt-[25px] mx-auto text-[#fff] text-sm font-medium"
                    style={{
                        background: "linear-gradient(180deg, #D21878 0%, #4F42A3 100%)",
                    }}
                >
                    Find Match
                </button>
            </div>
        </Fragment>
    );
};

export default BannerFilterBox;
