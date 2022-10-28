import React from "react";
import { Link } from "react-router-dom";
import classes from "./About.module.css";
import aboutUs1 from "../../../../UI/images/aboutUs1.png";
import aboutUs2 from "../../../../UI/images/aboutUs2.png";

const About = () => {
  return (
    <section id="about-me" className={classes.container}>
      <div className={classes["about__container"]}>
        <div className={classes["about__text__box"]}>
          <div className={classes["about__text"]}>
            <div className={classes["text--main"]}>About us</div>
            <h1>
              Let’s help you <br /> make your donations to places it’s needed
              the most.
            </h1>
            <p>
              Betterhope helps highlight various foundations that needs certain
              help at a particular time. We highlight them via campaigns and
              also give you the opportunity to make your choice as to which NGO
              you want to give to.
            </p>
          </div>
          <Link className={classes["btn"]} to="/Donate">
            Donate Now
          </Link>
        </div>

        <div className={classes["image__container"]}>
          <img
            src={aboutUs1}
            alt="Profile Picture"
            className={classes.image1}
          />

          <img
            src={aboutUs2}
            alt="Profile Picture"
            className={classes.image2}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
