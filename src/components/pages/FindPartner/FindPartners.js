import React, { useEffect } from "react";
import { Outlet } from "react-router";
import CustomHeader from "../../shared/CustomHeader/CustomHeader";
import Footer from "../../shared/Footer/Footer";
import FindPartnersHeader from "./FindPartnersHeader";
import PartnerFilterBox from "./PartnerFilterBox";

const FindPartners = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-[#fafbff]">
      <div className="hidden md:hidden lg:block">
        <CustomHeader title="Find Partners" />
      </div>

      <div className="hidden md:hidden lg:block">
        <section className="py-10">
          <div className="max-w-[1200px] mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-4  gap-4 justify-center ">
              <div>
                <PartnerFilterBox />
              </div>
              <div className="col-span-3">
                <div>
                  <FindPartnersHeader />
                </div>
                <Outlet />
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default FindPartners;
