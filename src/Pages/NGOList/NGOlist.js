import React from "react";
import Oheader from "../../components/Otherheaderf/Oheader";
import classes from "./NGOList.module.css";

import Frame321 from "../../UI/images/Frame321.png";
import Frame320 from "../../UI/images/Frame320.png";
import Frame322 from "../../UI/images/Frame322.png";
import Frame323 from "../../UI/images/Frame323.png";


import Footer from "../../components/Footerf/Footer";

import MoreAboutNGO from "./sections/MoreAboutNGO";
import { useState } from "react";

const NGOlist = () => {
  const [showMoreOnNGO, setShowMoreOnNGO] = useState(false);

  const showMoreOnNGOHandler = () => {
    setShowMoreOnNGO(true);
  };

  if (showMoreOnNGO) {
    return <MoreAboutNGO />;
  }
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

      <div className={classes["list--container"]}>
        <div className={classes["list--container-sub"]}>
          <div className={classes.content}>
            <div className={classes["image--container1"]}>
              <img src={Frame320} alt="" />
            </div>{" "}
            <div className={classes["text-main"]}>Donate pool - (Feeding)</div>
            <div className={classes["text-sub"]}>
              Glowing Splints Development Initiative is an NGO with a vision to
              ignite leadership & entrepreneurship potentials in women, youths
              and children. Glowing Splints Development Initiative is an NGO
              with a vision to ignite leadership & entrepreneurship potentials
              in women, youths and children.
            </div>
            <button onClick={showMoreOnNGOHandler} className={classes.see}>
              See More
            </button>
          </div>
          <div className={classes.content}>
            <div className={classes["image--container1"]}>
              <img src={Frame321} alt="" />
            </div>{" "}
            <div className={classes["text-main"]}>Donate pool - (Feeding)</div>
            <div className={classes["text-sub"]}>
              Glowing Splints Development Initiative is an NGO with a vision to
              ignite leadership & entrepreneurship potentials in women, youths
              and children. Glowing Splints Development Initiative is an NGO
              with a vision to ignite leadership & entrepreneurship potentials
              in women, youths and children.
            </div>
            <button onClick={showMoreOnNGOHandler} className={classes.see}>
              See More
            </button>
          </div>
        </div>

        <div className={classes["list--container-sub"]}>
          <div className={classes.content}>
            <div className={classes["image--container1"]}>
              <img src={Frame323} alt="" />
            </div>{" "}
            <div className={classes["text-main"]}>Donate pool - (Feeding)</div>
            <div className={classes["text-sub"]}>
              Glowing Splints Development Initiative is an NGO with a vision to
              ignite leadership & entrepreneurship potentials in women, youths
              and children. Glowing Splints Development Initiative is an NGO
              with a vision to ignite leadership & entrepreneurship potentials
              in women, youths and children.
            </div>
            <button onClick={showMoreOnNGOHandler} className={classes.see}>
              See More
            </button>
          </div>
          <div className={classes.content}>
            <div className={classes["image--container1"]}>
              <img src={Frame322} alt="" />
            </div>{" "}
            <div className={classes["text-main"]}>Donate pool - (Feeding)</div>
            <div className={classes["text-sub"]}>
              Glowing Splints Development Initiative is an NGO with a vision to
              ignite leadership & entrepreneurship potentials in women, youths
              and children. Glowing Splints Development Initiative is an NGO
              with a vision to ignite leadership & entrepreneurship potentials
              in women, youths and children.
            </div>
            <button onClick={showMoreOnNGOHandler} className={classes.see}>
              See More
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default NGOlist;
