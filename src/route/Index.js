import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LawyerServiceForm from "../components/Lawyer-Seam/LawyerServiceForm/LawyerServiceForm";
import LawyerServicesPage from "../components/Lawyer-Seam/LawyerUserProfile/LawyerServicesPage";
import OthersProfile from "../components/othersprofile/OthersProfile";
import AdminAnalytics from "../components/pages/AdminAnalytics/AdminAnalytics";

// components import
import Login from "../components/pages/Authentications/Login";
import LoginAsProfessional from "../components/pages/Authentications/LoginAsProfessional";
import RegAsProfessional from "../components/pages/Authentications/RegAsProfessional";
import SignUp from "../components/pages/Authentications/SignUp";
import Contact from "../components/pages/Contact/Contact";
import { DynamicProfilePage } from "../components/pages/DynamicProfilePage/DynamicProfilePage";
import LawyerReview from "../components/pages/lawyerPage/lawyerReview/LawyerReview";
import LawyerServiceDetails from "../components/pages/lawyerPage/LawyerServiceDetails/LawyerServiceDetails";
import { Members } from "../components/pages/Members/Members";
import NotFound from "../components/pages/notfound/NotFound";
import { SingleRequestView } from "../components/pages/SingleRequestView/SingleRequestView";
import TopProfessionAgent from "../components/pages/TopProfession/TopProfessionAgent";
import TopProfessionKazi from "../components/pages/TopProfession/TopProfessionKazi";
import Suggested from "../components/pages/TopProfile/Suggested";
import TopBride from "../components/pages/TopProfile/TopBride";
import TopGroom from "../components/pages/TopProfile/TopGroom";
import About from "../Wrapper/About/About";
import Agent from "../Wrapper/Agent/Agent";
import Community from "../Wrapper/Community/Community";
import Course from "../Wrapper/Course/Course";
import FindAlawyer from "../Wrapper/Findalawyer/FindAlawyer";
import LawyerProfilePage from "../components/pages/lawyerPage/lawyerProfile/LawyerProfilePage";
import FindPartner from "../Wrapper/Findpartner/FindPartner";
import Homepage from "../Wrapper/Home/Homepage";
import Kazi from "../Wrapper/Kazi/Kazi";
import MemberShip from "../Wrapper/Membership/MemberShip";
import ProfileInfo from "../Wrapper/Profileinfo/ProfileInfo";
import Shop from "../Wrapper/Shop/Shop";
import SingleProduct from "../Wrapper/SingleProduct/SingleProduct";
import SingleProfile from "../Wrapper/SingleProfilesUser/SingleProfile";
<<<<<<< HEAD
import { StepProgress } from "../Wrapper/step-progress/StepProgress";
import Main from '../Wrapper/step-progress/Main'
import { StepperHeader } from "../Wrapper/step-progress/StepperHeader";
import PersonalForm from "../Wrapper/step-progress/PersonalForm";
import ProfessionaForm from "../Wrapper/step-progress/ProfessionalForm";
import EducationalForm from "../Wrapper/step-progress/EducationalForm";
import PhysicalForm from "../Wrapper/step-progress/PhysicalForm";
import OtherForm from "../Wrapper/step-progress/OtherForm";
import { LawyerActivity } from "../components/pages/lawyeractivity/LawyerActivity";
=======
import { Container } from "../Wrapper/Stepper/Container";

>>>>>>> dbb014f87b5a84746172cc859729c7630c994ccb
const Index = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/userprofile" element={<SingleProfile />}></Route>
          <Route path="/membership" element={<MemberShip></MemberShip>}></Route>
          <Route
            path="/profileinfo"
            element={<ProfileInfo></ProfileInfo>}
          ></Route>
          <Route path="/course" element={<Course></Course>}></Route>
          <Route
            path="/findalawyer"
            element={<FindAlawyer></FindAlawyer>}
          ></Route>
          <Route path="/lawyer-profile" element={<LawyerProfilePage />}></Route>
          <Route path="/lawyer-review" element={<LawyerReview />}></Route>
          <Route
            path="/lawyer-service-detail"
            element={<LawyerServiceDetails />}
          ></Route>
          <Route path="/kazi" element={<Kazi></Kazi>}></Route>
          <Route path="/agent" element={<Agent></Agent>}></Route>
          <Route path="/community" element={<Community></Community>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
<<<<<<< HEAD
          <Route
            path="/stepher"
            element={<StepperHeader></StepperHeader>}
          ></Route>
=======
          {/* <Route
            path="/stepher"
            element={<StepProgress></StepProgress>}
          ></Route> */}
>>>>>>> dbb014f87b5a84746172cc859729c7630c994ccb
          <Route
            path="/singleproduct"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/regAsProfessional" element={<RegAsProfessional />} />
          <Route
            path="/loginAsProfessional"
            element={<LoginAsProfessional />}
          />
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/personaldetailsform" element={<PersonalForm></PersonalForm>}></Route>
          <Route path="/lawyeractivity" element={<LawyerActivity></LawyerActivity>}></Route>
          <Route path="/professionaldetailsform" element={<ProfessionaForm></ProfessionaForm>}></Route>
          <Route path="/educationaldetailsform" element={<EducationalForm></EducationalForm>}></Route>
          <Route path="/physicaldetailsform" element={<PhysicalForm></PhysicalForm>}></Route>
          <Route path="/otherdetailsform" element={<OtherForm></OtherForm>}></Route>
          <Route path="/members" element={<Members />}></Route>
          <Route path="/profile/:id" element={<DynamicProfilePage />}></Route>
          <Route path="/find-partner" element={<FindPartner />}>
            <Route path="/find-partner" element={<Suggested />} />
            <Route path="top" element={<TopBride />} />
            <Route path="nearest" element={<TopGroom />} />
          </Route>
          <Route path="/" element={<Homepage></Homepage>}>
            <Route path="/" element={<Suggested />} />
            <Route path="/top-gride" element={<TopBride />} />
            <Route path="/top-groom" element={<TopGroom />} />
            <Route
              path="/top-profession/kazi"
              element={<TopProfessionKazi />}
            />
            <Route
              path="/top-profession/agent"
              element={<TopProfessionAgent />}
            />
          </Route>
          <Route path="/singleViewRequest" element={<SingleRequestView />} />
          <Route path="/admin-analytics" element={<AdminAnalytics />}></Route>
          {/* <Route path="/profile" element={<OthersProfile />} /> */}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
