import Navigation from "../components/navigation";
import Footer from "../components/footer";
import HeaderSC from "../components/speakingClub/headerSC";
import WhySC from "../components/speakingClub/whySC";
import ForYouSC from "../components/speakingClub/forYouSC";
import CostSC from "../components/speakingClub/costSC";
import SignUpSC from "../components/speakingClub/sign_up_sc";
import ReviewsSC from "../components/speakingClub/reviewsSC";

export default function Companies() {
  return (
    <>
      <Navigation />
      <HeaderSC />
      <WhySC />
      <ForYouSC />
      <CostSC />
      <SignUpSC />
      <ReviewsSC />
      <Footer />
    </>
  );
}
