import React from "react";
import { useState } from "react";
import Oheader from "../../../components/Otherheaderf/Oheader";
import classes from "./MoreAboutNGO.module.css";
import AboutNGO from "./AboutNGO";
import Footer from "../../../components/Footerf/Footer";
import CurrentCampaign from "./CurrentCampaign";
import Comment from "./Comment";

const MoreAboutNGO = () => {
  const [showAboutNGO, setShowAboutNGO] = useState(true);
  const [showCurrentCampaign, setShowCurrentCampaign] = useState(false);

  const showsetShowAboutNGOHandler = () => {
    setShowAboutNGO(true);
    setShowAboutNGO(false);
  };

  const showshowCurrentCampaignHandler = () => {
    setShowCurrentCampaign(true);
    setShowAboutNGO(false);
  };

  return (
    <section>
      <Oheader />
      <div className={classes.container1}>
        <div className={classes["text--container"]}>
          <div className={classes["text--main"]}>
            Search from our list of Verified and <br /> onboarded
            NGO’s/Foundations.
          </div>
          <div className={classes["text--sub"]}>
            These are the current list of onboarded Foundations and NGO’s for
            you to search and <br /> make donations respectively.
          </div>
        </div>
      </div>

      <div className={classes.container2}>
        <button onClick={showsetShowAboutNGOHandler} className={classes.btn1}>
          About us
        </button>
        <button
          onClick={showshowCurrentCampaignHandler}
          className={classes.btn1}
        >
          Current Campaigns
        </button>
        <button className={classes.btn1}>Comments</button>
      </div>

      {/* <div className={classes.container3}>{showAboutNGO && <AboutNGO />}</div>
      <div className={classes.container3}>
        {showCurrentCampaign && <CurrentCampaign />}
      </div> */}
      <div className={classes.container3}>
        <Comment />
      </div>

      <Footer />
    </section>
  );
};

export default MoreAboutNGO;
