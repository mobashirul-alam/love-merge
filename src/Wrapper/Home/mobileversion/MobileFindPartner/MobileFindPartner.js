import React, { useEffect } from "react";
import MobilePartnerFilterBox from "./MobilePartnerFilterBox";


const MobileFindPartner = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="bg-[#fafbff]">

      <div className="lg:hidden md:hidden">
        <section className="py-10">
          <div className="max-w-[1200px] mx-auto ">
            <div className="grid grid-cols-1 lg:grid-cols-4  gap-4 justify-center ">
              <div>
                <MobilePartnerFilterBox />
              </div>
              <div className="col-span-3">
                <div>
                 {/* <MobileFindPartnerHeader /> */}
                </div>
                {/* <Outlet /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MobileFindPartner;
