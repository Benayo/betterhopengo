import React from "react";
import classes from "./Campaignshome.module.css";
import carbonSecurity from "../../../../UI/images/carbon_security.svg";
import transparency from "../../../../UI/images/Group-2.svg";
import unity from "../../../../UI/images/fluent_people-community-16-regular.svg";

const Campaignshome = () => {
  return (
    <section className={classes.container}>
      <div className={classes["text--container"]}>
        <div className={classes["text--main"]}>Why Choose Us</div>
        <div className={classes["text--sub"]}>
          Betterhope has helped over 23,000 people from accross 587
          NGO’s/Foundations achieve financial freedom and raise funds to
          successfully fund their campaigns. With Betterhope, donors get
          connected to verified NGO’s that they can give cash and material items
          with ease.
        </div>
      </div>
      <div className={classes["card--section"]}>
        <div className={classes.card}>
          <img
            src={carbonSecurity}
            alt="carbon security"
            className={classes.image}
          />
          <div className={classes["card--text--main"]}>Security</div>
          <div className={classes["card--text--sub"]}>
            We are regulated by the PCIDSS. Onboard are verified NGO’s and
            Foundations. All fundings are 100% secure.
          </div>
        </div>

        <div className={classes.card}>
          <img
            src={transparency}
            alt="carbon security"
            className={classes.image}
          />
          <div className={classes["card--text--main"]}>Transparency</div>
          <div className={classes["card--text--sub"]}>
            You get updates via newsletters on the progress of the campaigns and
            how the foundations are fairing.
          </div>
        </div>

        <div className={classes.card}>
          <img src={unity} alt="carbon security" className={classes.image} />
          <div className={classes["card--text--main"]}>Unity</div>
          <div className={classes["card--text--sub"]}>
            Join thousands of likeminded people to spread love by crowdfunding a
            campaign for an NGO.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaignshome;
