import React from "react";

import icon1 from "../../../../assets/images/SecureVerified/icon01.png";
import icon2 from "../../../../assets/images/SecureVerified/icon02.png";
import icon3 from "../../../../assets/images/SecureVerified/icon03.png";
import icon4 from "../../../../assets/images/SecureVerified/icon04.png";

const SecureVerified = () => {
    const info = [
        { id: 1, text: "100% Verified", img: icon1 },
        { id: 2, text: "Most Secure", img: icon2 },
        { id: 3, text: "100% Privacy", img: icon3 },
        { id: 4, text: "Smart Matching", img: icon4 },
    ];

    return (
        <div className="pt-44 pb-20 w-4/5 mx-auto">
            <div className="flex justify-center gap-6">
                {info.map(i => (
                    <div
                        key={i.id}
                        className={"w-full h-52 rounded-2xl px-8 pt-8 pb-6"}
                        style={{ boxShadow: "0px 5px 30px 0px rgba(176, 171, 193, 0.4)" }}
                    >
                        <div className="mb-5 h-3/5">
                            <img className="mx-auto" src={i.img} alt="" />
                        </div>
                        <p className="text-xl text-center mb-2">{i.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SecureVerified;
