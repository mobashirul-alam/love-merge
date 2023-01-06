import React, { useState } from "react";
/* certificate img */
import certificate1 from "../../../assets/images/user profile/certificate1.png";
import { default as certificate2, default as certificate5 } from "../../../assets/images/user profile/certificate2.png";
import certificate3 from "../../../assets/images/user profile/certificate3.png";
import certificate4 from "../../../assets/images/user profile/certificate4.png";
/* component */
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import CertificateNav from "./CertificateNav";
import AllCertificateImg from "./UpdateCertificateSection/AllCertificateImg/AllCertificateImg";
import UpdateCertificateSection from "./UpdateCertificateSection/UpdateCertificateSection";

const PersonalCertificateWeb = () => {
    const [certificateId, setCertificateId] = useState(0);


    /* certificate dummy data */
    const certificateData = [
        {
            id: 1,
            name: "Certificate 1",
            img: certificate1,
        },
        {
            id: 2,
            name: "Certificate 2",
            img: certificate2,
        },
        {
            id: 3,
            name: "Certificate 3",
            img: certificate3,
        },
        {
            id: 4,
            name: "Certificate 4",
            img: certificate4,
        },
        {
            id: 5,
            name: "Certificate 5",
            img: certificate5,
        },
    ];

    return (
        <div className="bg-[#FAFBFF]">
            {/* header section */}
            <CustomHeader title={"Photos"} />

            <div className="mx-auto max-w-[1200px] font-sans ">
                <div className="flex pt-[58px] gap-[51px]">
                    {/* Left side all certificates img */}
                    <div className="w-[349px]">
                        {certificateData.map(certificate => (
                            <AllCertificateImg
                                key={certificate.id}
                                certificate={certificate}
                                setCertificateId={setCertificateId}
                                certificateId={certificateId}
                            />
                        ))}
                    </div>

                    {/* certificate navigation */}
                    <div className="w-[800px]">
                        <h1 className="text-left font-semibold lg:text-[32px] md:text-xl text-lg text-[#333333]">Certificate</h1>
                        <CertificateNav />

                        {/* Selected certificate img showing */}
                        <div style={{ boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.12)" }} className="bg-[#FFFFFF] py-[15px] px-[18px] rounded-[16px]">
                            <img className="h-[1187px] w-[800px] rounded-[16px]" src={certificateData[certificateId].img} alt="view certificate" />
                        </div>

                        {/* file uploading section */}
                        <UpdateCertificateSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalCertificateWeb;
