import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../../../App.css";
import "../../../assets/css/table.css";
import { Friends } from "../FriendsSection/Friends";
import { Matches } from "../profileSection/Matches";
import { Profile } from "../profileSection/Profile";

const Table = ({ data, isLoading }) => {
    const [page, setPage] = useState(2);

    const navigate = useNavigate();

    return (
        <div>
            <div className="px-2 md:px-0 mx-4 mb-4">
                <div className="notification-bar">
                    <div className="flex justify-center items-center h-full gap-4">
                        <button className="font-medium text-[15px] leading-tight text-gray-800">Activity</button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(2)}
                        >
                            Profile
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 3 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(3)}
                        >
                            Services <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">1</sup>
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 4 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(4)}
                        >
                            Connections <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">5</sup>
                        </button>
                        <button
                            className={`font-medium text-[15px] leading-tight ${page === 5 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(5)}
                        >
                            Matches <sup className="text-white bg_Color px-2 py-1 rounded-full text-[10px]">1</sup>
                        </button>
                    </div>
                </div>
            </div>
            {!data?.designation && (
                <div className="bg-white h-[30px] pl-3 flex items-center shadow-lg shadow-slate-200 rounded-lg w-full mb-4">
                    <div className="flex-auto bg-slate-100 mr-3">
                        <div className="bg-teal-400 h-1 rounded" style={{ width: "15%" }}></div>
                    </div>
                    <button
                        className="text-[12px] bg-teal-400 text-white h-full rounded-tr-lg rounded-br-lg px-2 font-semibold"
                        onClick={() => navigate("/stepper")}
                    >
                        Update Profile
                    </button>
                </div>
            )}

            {/* table 1 */}
            {page === 2 && <Profile {...{ data, isLoading }} />}
            {page === 4 && <Friends />}
            {page === 5 && <Matches />}
        </div>
    );
};

export default Table;
