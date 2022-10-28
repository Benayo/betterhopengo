import React from "react";
import classes from "./TrustedPartners.module.css";
import univelcity from "../../../../UI/images/univelcity.svg";
import covenant from "../../../../UI/images/covenant.svg";
import unicef from "../../../../UI/images/unicef.svg";
import interswitch from "../../../../UI/images/interswitch.svg";
import lagos from "../../../../UI/images/lagos.svg";
import fidelity from "../../../../UI/images/Fidelity.svg";

const TrustedPartners = () => {
  return (
    <div className={classes.container}>
      <div className={classes["text--main"]}>Our Trusted Partners</div>
      <div className={classes["sub--container"]}>
        <img src={univelcity} alt="univelcity" />
        <img src={covenant} alt="covenant" />
        <img src={unicef} alt="unicef" />
        <img src={interswitch} alt="interswitch" />
        <img src={lagos} alt="covenant" />
        <img src={fidelity} alt="covenant" />
      </div>
    </div>
  );
};

export default TrustedPartners;
