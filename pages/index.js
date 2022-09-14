import dynamic from "next/dynamic";
import Head from "next/head";


import Navigation from "../components/navigation";
import Header from "../components/header";
// import About from "../components/about";
// import Groups from "../components/groups";
// import Bonuses from "../components/bonuses";
// import TestLink from "../components/testLink";
import Reviews from "../components/reviews";
// import SignUpBlock from "../components/signUpBlock";
// import Faq from "../components/faq";
// import Footer from "../components/footer";

const About = dynamic(() => import('../components/about'), {
  suspense: true,
})
const Groups = dynamic(() => import('../components/groups'), {
  suspense: true,
})
const Bonuses = dynamic(() => import('../components/bonuses'), {
  suspense: true,
})
const TestLink = dynamic(() => import('../components/testLink'), {
  suspense: true,
})
const SignUpBlock = dynamic(() => import('../components/signUpBlock'), {
  suspense: true,
})
const Faq = dynamic(() => import('../components/faq'), {
  suspense: true,
})
const Footer = dynamic(() => import('../components/footer'), {
  suspense: true,
})

// const Homepage = lazy(() => import('./views/homePage/homePage'));

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
