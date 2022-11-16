import React, { useState } from "react";
import "../../../App.css";
import "../../../assets/css/table.css";
import { Friends } from "../FriendsSection/Friends";
import { Profile } from "../profileSection/Profile";


const Table = () => {
    const [page, setPage] = useState(2);
    return (
        <div>
            <div className="pt-5 px-2 md:px-0">
                <div className="notification-bar">
                    <div className="flex justify-center items-center gap-4">
                        <button className="mt-4 font-medium leading-tight text-gray-800">Activity</button>
                        <button
                            className={`mt-4 font-medium leading-tight ${page === 2 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(2)}
                        >
                            Profile
                        </button>
                        <button
                            className={`mt-4 font-medium leading-tight ${page === 3 ? "text-primary font-bold" : "text-gray-800"}`}
                            onClick={() => setPage(3)}
                        >
                            Friends <sup className="text-white bg_Color p-1 rounded-full text-[10px]">1</sup>
                        </button>
                        <button className="mt-4 font-medium leading-tight text-gray-800">
                            heading<sup className="text-white bg_Color p-1 rounded-full text-[10px]">5</sup>
                        </button>
                        <button className="mt-4 font-medium leading-tight text-gray-800">
                            Message<sup className="text-white bg_Color p-1 rounded-full text-[10px]">14</sup>
                        </button>
                    </div>
                </div>
            </div>
            {/* table 1 */}
            {page === 2 && <Profile />}
            {page === 3 && <Friends />}
        </div>
    );
};

export default Table;
