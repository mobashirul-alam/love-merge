// components
import MobileSingleProfilesUser from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/MobileSingleProfilesUser";
import { PersonalDetailsMobile } from "../../../components/SingleProfilesUser/MobileSingleProfilesUser/PersonalDetailsMobile";
import EducationalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/EducationalCertificateMobile/EducationalCertificateMobile";
import PersonalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/PersonalCertificateMobile/PersonalCertificateMobile";
import ProfessionalCertificateMobile from "../../../Wrapper/Home/mobileversion/CertificateMobile/ProfessionalCertificateMobile/ProfessionalCertificateMobile";

const MobileMatrimonyPrivateRoutes = [
  {
    id: 1,
    path: "/mobileuserprofile",
    element: <MobileSingleProfilesUser />,
    nestedRoutes: [
      {
        id: 1,
        path: "personaldetailsmov",
        element: <PersonalDetailsMobile />,
      },
    ],
  },
  {
    id: 2,
    path: "/dynamicpersonaldetails/:id",
    element: <PersonalDetailsMobile />,
  },
  {
    id: 3,
    path: "/educationalCertificateMov",
    element: <EducationalCertificateMobile />,
  },
  {
    id: 4,
    path: "/professionalCertificateMov",
    element: <ProfessionalCertificateMobile />,
  },
  {
    id: 5,
    path: "/personalCertificateMov",
    element: <PersonalCertificateMobile />,
  },
];

export default MobileMatrimonyPrivateRoutes;
