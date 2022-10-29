import React from "react";
import { Link } from "react-router-dom";
import Oheader from "../../../components/Otherheaderf/Oheader";
import GetPaidStock from "../../../UI/images/GetPaidStock.png";
import classes from "./AboutNgo.module.css";
import Footer from "../../../components/Footerf/Footer";

const AboutNgo = () => {
  return (
    <section>
      <Oheader />

      <div className={classes["text--container"]}>
        <div className={classes["text--main"]}>
          Current Donation Campaigns running for <br /> NGO’s/Foundations.
        </div>
        <div className={classes["text--sub"]}>
          These are the current needs and campaigns of onboarded Foundations and
          NGO’s for <br /> you to search and make donations respectively.
        </div>
      </div>
      <div className={classes["details-section"]}>
        <img src={GetPaidStock} alt="GetPaidStock" className={classes.image} />
        <div>
          <div className={classes["text--main-1"]}>
            Back to school Kits for Glowing Splints Foundation Kids.
          </div>
          <div className={classes["text--sub-1"]}>
            Glowing Splints Development Initiative is an NGO with a vision to
            ignite leadership & entrepreneurship potentials in women, youths and
            children.
          </div>

          <div className={classes["progress--container"]}>
            <div className={classes.progress}>
              <div className={classes["progress--main"]}>
                <div className={classes["progress--sub"]}>
                  <span className={classes.span1}>
                    <span className={classes.span2}></span>
                    50%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className={classes["target--info"]}>
            <div className={classes["target"]}>
              <div className={classes.text1}>Target</div>
              <div className={classes.text2}>₦310,000</div>
            </div>
            <div className={classes["target"]}>
              <div className={classes.text1}>ongoing</div>
              <div className={classes.text2}>₦227,500</div>
            </div>

            <div className={classes["target"]}>
              <div className={classes.text1}>Balance</div>
              <div className={classes.text2}>₦122,500</div>
            </div>
          </div>
          <button className={classes.btn}>Donate Now</button>
        </div>
      </div>

      <div className={classes["info--container"]}>
        <div className={classes["text--main"]}>
          About the Foundation/NGO & BUDGET ANALYSIS
        </div>
        <div className={classes["text--sub-1"]}>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor mi
            leo molestie vestibulum nisl lorem gravida. Aenean est eu ut tortor
            vitae adipiscing sed. Orci imperdiet in ac etiam non egestas dictum
            tempus. Accumsan, sed odio amet risus eget nullam cras ac diam.
            Ultrices proin eget proin tempus vulputate malesuada feugiat at.
            Amet id velit rhoncus ut dolor a hac.
          </p>
          <p>
            {" "}
            Congue donec commodo odio dolor sed tellus. Mauris lectus elit, sed
            rutrum et viverra. Vel id nam at faucibus in lectus lacus. Felis
            duis suspendisse iaculis orci, quisque gravida pellentesque
            volutpat. Viverra et scelerisque fermentum at vulputate nisl in
            vulputate. Posuere dignissim morbi urna pellentesque. Porttitor
            aliquet cursus dui ut amet sed condimentum ac.
          </p>
          <p>
            Ut elementum ornare tortor viverra et dolor. Tellus massa sapien
            ultricies tortor. Adipiscing sit pulvinar ut sit eget donec et a,
            maecenas. Blandit eros, habitant quis commodo sit et accumsan. Ipsum
            ut orci, a donec. Vel vitae, nulla nulla accumsan curabitur
            malesuada at netus vel. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <p>
            Tempor mi leo molestie vestibulum nisl lorem gravida. Aenean est eu
            ut tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
            egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
            cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
            feugiat at. Amet id velit rhoncus ut dolor a hac.
          </p>
          Congue donec commodo odio dolor sed tellus. Mauris lectus elit, sed
          rutrum et viverra. Vel id nam at faucibus in lectus lacus. Felis duis
          suspendisse iaculis orci, quisque gravida pellentesque volutpat.
          Viverra et scelerisque fermentum at vulputate nisl in vulputate.
          Posuere dignissim morbi urna pellentesque. Porttitor aliquet cursus
          dui ut amet sed condimentum ac.{" "}
          <p>
            {" "}
            Ut elementum ornare tortor viverra et dolor. Tellus massa sapien
            ultricies tortor. Adipiscing sit pulvinar ut sit eget donec et a,
            maecenas. Blandit eros, habitant quis commodo sit et accumsan. Ipsum
            ut orci, a donec. Vel vitae, nulla nulla accumsan curabitur
            malesuada at netus vel. Visit their website on www.
          </p>
        </div>
        <Link to="/Donate" className={classes.btn1}>
          Donate Now
        </Link>
      </div>

      <Footer />
    </section>
  );
};

export default AboutNgo;
