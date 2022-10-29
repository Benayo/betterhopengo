import React from "react";
import "./Aboutus.css";
import Campaignshome from "../Homef/section/CampaigndHome/Campaignshome";
import Testimonials from "../Homef/section/Testimonials/Testimonials";
import Footer from "../../components/Footerf/Footer";
import hero from "../../UI/images/aboutImage1.png";
import mission from "../../UI/images/missionImage.png";
import vision from "../../UI/images/visionImage.png";
import Header from "../../components/HeaderF/Header";
import dp from "../../UI/images/dp.png";
import dp2 from "../../UI/images/dp2.png";
import dp3 from "../../UI/images/dp3.png";
import dp4 from "../../UI/images/dp4.png";
import dp5 from "../../UI/images/dp5.png";
import dp6 from "../../UI/images/dp6.png";

const Aboutus = () => {
  return (
    <div className="about">
      <Header />
      <div className="flex flex-row section-1 hero-section">
        <img src={hero} alt="" />
        <div>
          <h1>
            Let’s help you make your donations to places it’s needed the most.
          </h1>
          <p>
            We highlightvarious foundations that needs certain help at a
            particular time via campaigns and also give you the opportunity to
            make your choice as to which NGO you want to give to.
          </p>
          <button>Donate Now</button>
        </div>
      </div>
      <Campaignshome />
      <div className="section-1 mission">
        <img src={mission} alt="" />
        <div>
          <h2>Mission</h2>
          <p>
            Betterhope has helped over 23,000 people from accross 587
            NGO’s/Foundations achieve financial freedom and raise funds to
            successfully fund their campaigns. With Betterhope, donors get
            connected to verified NGO’s that they can give cash and material
            items with ease.
          </p>
        </div>
      </div>
      <div className="section-1 vision">
        <div className="imageContainer">
          <img src={vision} alt="" />
        </div>
        <div>
          <h2>Vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor mi
            leo molestie vestibulum nisl lorem gravida. Aenean est eu ut tortor
            vitae adipiscing sed. Orci imperdiet in ac etiam non egestas dictum
            tempus. Accumsan, sed odio amet risus eget nullam cras ac diam.
            Ultrices proin eget proin tempus vulputate malesuada feugiat at.
            <br />
            <br /> Amet id velit rhoncus ut dolor a hac. Congue donec commodo
            odio dolor sed tellus. Mauris lectus elit, sed rutrum et viverra.
            Vel id nam at faucibus in lectus lacus. Felis duis suspendisse
            iaculis orci, quisque gravida pellentesque volutpat. Viverra et
            scelerisque fermentum at vulputate nisl in vulputate. Posuere
            dignissim morbi urna pellentesque. Porttitor aliquet cursus dui ut
            amet sed condimentum ac. <br />
            <br /> Vel id nam at faucibus in lectus lacus. Felis duis
            suspendisse iaculis orci, quisque gravida pellentesque volutpat.
            Viverra et scelerisque fermentum at vulputate nisl in vulputate.
            Posuere dignissim morbi urna pellentesque. Porttitor aliquet cursus
            dui ut amet sed condimentum ac.
          </p>
        </div>
      </div>
      <div className="section-1 team">
        <h2>Meet the Team</h2>
        <div className="profiles">
          <div className="profile">
            <img src={dp} alt="" />
            <h5>Asegun Ayanfeoluwa</h5>
            <span>Ethical Hacker</span>
          </div>
          <div className="profile">
            <img src={dp2} alt="" />
            <h5>Adeyemo Adetola Ige</h5>
            <span>Data Analyst</span>
          </div>
          <div className="profile">
            <img src={dp3} alt="" />
            <h5>Jeremiah O. Fashola</h5>
            <span>Product Designer</span>
          </div>
          <div className="profile">
            <img src={dp4} alt="" />
            <h5>Patrick Agwuncha</h5>
            <span>Product Designer</span>
          </div>
          <div className="profile">
            <img src={dp5} alt="" />
            <h5>Bamijoko oyindolapo</h5>
            <span>Frontend Developer</span>
          </div>
          <div className="profile">
            <img src={dp6} alt="" />
            <h5>Alerechi Ordu</h5>
            <span>Backend Developer</span>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Aboutus;
