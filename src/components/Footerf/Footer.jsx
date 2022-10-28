import React from "react";

import classes from "./Footer.module.css";
import logo from "../../UI/images/Vector.svg";
import twitter from "../../UI/images/twitter.svg";
import instagram from "../../UI/images/instagram.svg";
import facebook from "../../UI/images/facebook.svg";
import youtube from "../../UI/images/youtube.svg";
import formVector from "../../UI/images/VectorSnedIconNewsletter.svg";
import vectorIcon1 from "../../UI/images/VectorIcons1.svg";
import vectorIcon2 from "../../UI/images/VectorIcons2.svg";
import vectorIcon3 from "../../UI/images/VectorIcons3.svg";
import vectorIcon4 from "../../UI/images/VectorIcons4.svg";

const Footer = () => {
  return (
    <footer id="resume" className={classes.section}>
      <div className={classes.container}>
        <div className={classes["resume__container__main"]}>
          <div className={classes["resume__grid__container__main"]}>
            <div className={classes["resume__container__sub--1"]}>
              <div className={classes["resume__heading__sub"]}>
                <img src={logo} alt="logo" />
              </div>
              {/* <div className={classes["resume__text__box"]}>
                <div className={classes["resume__text__main"]}>
                  Product Designer
                </div>
                <div className={classes["resume__text__main--1"]}>
                  August 2021 - current
                </div>
              </div> */}

              <div className={classes["resume__text__sub"]}>
                Betterhope helps connect individuals or organizations ready to
                make charitable donations to verified NGO’s/Foundations in need
                of charitable donations in Lagos Nigeria.
              </div>
              <div className={classes["vector-links"]}>
                <img src={twitter} alt="twitter" className={classes.img} />
                <img src={instagram} alt="instagram" className={classes.img} />
                <img src={facebook} alt="facebook" className={classes.img} />
                <img src={youtube} alt="youtube" className={classes.img} />
              </div>
            </div>
            <div className={classes["resume__container__sub--2"]}>
              <div className={classes["resume__grid__container__sub"]}>
                <div>
                  <div className={classes["resume__heading__sub"]}>Company</div>
                  <div className="col-start-1 col-end-3  sm:col-span-1">
                    <div className={classes["resume__list"]}>Campaigns</div>
                    <div className={classes["resume__list"]}>About Us</div>
                    <div className={classes["resume__list"]}>FAQ’s</div>
                    <div className={classes["resume__list"]}>Blog</div>
                    <div className={classes["resume__list"]}>Testimonial</div>
                    <div className={classes["resume__list"]}>Donate now</div>
                  </div>
                </div>
                <div className="col-end-7 col-span-2 sm:col-span-1">
                  <div className={classes["resume__heading__sub"]}>
                    Contact us
                  </div>
                  <div>
                    <div className={classes["resume__list"]}>
                      <img
                        src={vectorIcon1}
                        alt="vector1"
                        className={classes.vector}
                      />{" "}
                      132, Montgomery road, Lagos
                    </div>
                    <div className={classes["resume__list"]}>
                      <img
                        src={vectorIcon2}
                        alt="vector1"
                        className={classes.vector}
                      />
                      www.betterhope.org
                    </div>
                    <div className={classes["resume__list"]}>
                      <img
                        src={vectorIcon3}
                        alt="vector1"
                        className={classes.vector}
                      />
                      support@betterhope.org
                    </div>
                    <div className={classes["resume__list"]}>
                      <img
                        src={vectorIcon4}
                        alt="vector1"
                        className={classes.vector}
                      />
                      +234 905 8686 886
                    </div>
                  </div>
                </div>
                <div className="col-start-1  mt-8 sm:mt-0 sm:col-span-1">
                  <div className={classes["resume__heading__sub"]}>
                    Get Newsletters
                  </div>

                  <div className={classes["resume__list"]}>
                    Get first hand updates about your donations and how the
                    foudnations are fairing from time to time.
                  </div>

                  <form className={classes.form}>
                    <input
                      type="text"
                      placeholder="youremail.com"
                      className={classes.input}
                    />

                    <img src={formVector} alt="send" className={classes.send} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
