import Navigation from "../components/navigation";
import Footer from "../components/footer";
import SignUpBlockCompanies from "../components/companies/signUpBlockCompanies";
import Forhremployyes from "../components/companies/forhremployyes";
import TheLearningWay from "../components/companies/theLearningWay";
import WhySimpleEnglishCompanies from "../components/companies/whySimpleEnglishCompanies";
import CompaniesHeader from "../components/companies/companiesHeader";

export default function Companies() {
  return (
    <>
      <Navigation />
  
        <CompaniesHeader />
        <WhySimpleEnglishCompanies />
        <TheLearningWay />
        <Forhremployyes />
        <SignUpBlockCompanies />
        <Footer />

    </>
  );
}
