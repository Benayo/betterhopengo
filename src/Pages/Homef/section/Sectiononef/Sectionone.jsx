import React from "react";
// import "./Sectionone.css";
import { AiFillPlayCircle } from "react-icons/ai";
import classes from "./Sectionone.module.css";
import africankidswindow from "../../../../UI/images/africankidswindow.png";
import donateIcon from "../../../../UI/images/Group.svg";
import emojioneRocket from "../../../../UI/images/emojione_rocket.svg";
import registerNGO from "../../../../UI/images/Group 24.png";
import { Link } from "react-router-dom";

const Sectionone = () => {
  return (
    <section className={classes.container}>
      <div className={classes["hero__content"]}>
        <h1 className={classes["text__main"]}>
          Get connected
          <br /> to verified NGO's & Foundations in need.
        </h1>
        <div className={classes["text__sub"]}>
          Betterhope helps connect individuals or organizations ready to make
          charitable donations to verified NGO’s/Foundations in need of
          donations in Lagos Nigeria.
        </div>

        <div className="flex justify-center items-center">
          <button className={classes.btn}>Donate Now</button>

          <button className={classes.btn1}>See NGO’s/Foundations</button>
        </div>
      </div>

      <div className={classes["image-section"]}>
        <div className={classes["image--background"]}>
          <img src={africankidswindow} alt="image" className={classes.image} />

          <div className={classes["floating-icon-1"]}>
            <img src={donateIcon} alt="" className={classes["donate--icon"]} />

            <div className={classes.details}>
              <div className={classes.number}>14,670+</div>
              <div className={classes["detail--text"]}>People donated</div>
            </div>
          </div>

          <div className={classes["floating-icon-2"]}>
            <img
              src={emojioneRocket}
              alt="emojione_rocket"
              className={classes["donate--icon"]}
            />

            <div className={classes.details}>
              <div className={classes.number}>23,875+</div>
              <div className={classes["detail--text"]}>Children Sponsored</div>
            </div>
          </div>

          <div className={classes["floating-icon-3"]}>
            <img
              src={registerNGO}
              alt="registerNGO"
              className={classes["donate--icon"]}
            />

            <div className={classes.details1}>
              <div className={classes.number1}>587+</div>
              <div className={classes["detail--text--1"]}>Registered NGO's</div>
            </div>
          </div>
        </div>
      </div>
    </section>

   
  );
};

export default Sectionone;
