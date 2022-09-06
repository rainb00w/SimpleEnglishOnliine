import Head from "next/head";

import Navigation from "../components/navigation";
import Header from "../components/header";
import About from "../components/about";
import Groups from "../components/groups";
import Bonuses from "../components/bonuses";
import TestLink from "../components/testLink";
import Reviews from "../components/reviews";
import SignUpBlock from "../components/signUpBlock";
import Faq from "../components/faq";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title lang="en">Simple English</title>
      </Head>
        <Navigation />
        <Header />
        <About />
        <Groups />
        <Bonuses />
        <TestLink />
        {/* <Reviews /> */}
        <SignUpBlock />
        <Faq />
        <Footer />
    </>
  );
}
