import React from "react";

import Header from "../../components/HeaderF/Header";
import Sectionone from "./section/Sectiononef/Sectionone";
import Campaignshome from "./section/CampaigndHome/Campaignshome";
import OngoingCampaign from "./section/OngoingCampaign/OngoingCampaign";
import Footer from "../../components/Footerf/Footer";
import TrustedPartners from "./section/TrustedPartners/TrustedPartners";
import About from "./section/AboutSection/About";
import BlogSection from "./section/BlogSection/BlogSection";
import Testimonials from "./section/Testimonials/Testimonials";

const Homepage = () => {
  return (
    <section className="home">
      <Header
        listimg="../images/Vector.jpg"
        listone="Home"
        listtwo="Campaigns"
        listthree="About Us"
        listfour="FAQ's"
        listfive="Blog"
        rightlist="Register your NGO"
        rightlistbtn="Donate Now"
      />
      <Sectionone
        sectiondonate="Donate Now"
        donatesideplay="See NGO's/Foundation"
      />
      {/* <Campaigns /> */}
      <Campaignshome />
      <OngoingCampaign />
      <TrustedPartners />
      <About />
      <BlogSection />
      <Testimonials />

      <Footer />
    </section>
  );
};

export default Homepage;
