import React from "react";
import classes from "./CurrentCampaign.module.css";

import GetPaidStock from "../../../UI/images/GetPaidStock.png";
import locationSvg from "../../../UI/images/codicon_location.svg";

const CurrentCampaign = () => {
  return (
    <section>
      <div className={classes.campaign}>
        <div className={classes["card--container"]}>
          <img
            src={GetPaidStock}
            alt="GetPaidStock"
            className={classes.image}
          />
          <div>
            <div className={classes["details-main--text"]}>
              Donate pool - (Education)
            </div>
            <div className={classes["details-sub--text"]}>
              Betterhope is an NGO with a vision to ignite leadership &
              entrepreneurship potentials in women, youths and children.
            </div>
          </div>

          <div className={classes.info}>
            <div className={classes.more}>Read More</div>

            <div className={classes.location}>
              <img
                src={locationSvg}
                alt="codicon_location.svg"
                className={classes["img--location"]}
              />
              <div>Yaba Lagos, Nigeria</div>
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
        </div>

        <div className={classes["card--container"]}>
          <img
            src={GetPaidStock}
            alt="GetPaidStock"
            className={classes.image}
          />
          <div>
            <div className={classes["details-main--text"]}>
              Donate pool - (Education)
            </div>
            <div className={classes["details-sub--text"]}>
              Betterhope is an NGO with a vision to ignite leadership &
              entrepreneurship potentials in women, youths and children.
            </div>
          </div>

          <div className={classes.info}>
            <div className={classes.more}>Read More</div>

            <div className={classes.location}>
              <img
                src={locationSvg}
                alt="codicon_location.svg"
                className={classes["img--location"]}
              />
              <div>Yaba Lagos, Nigeria</div>
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
        </div>


        <div className={classes["card--container"]}>
          <img
            src={GetPaidStock}
            alt="GetPaidStock"
            className={classes.image}
          />
          <div>
            <div className={classes["details-main--text"]}>
              Donate pool - (Education)
            </div>
            <div className={classes["details-sub--text"]}>
              Betterhope is an NGO with a vision to ignite leadership &
              entrepreneurship potentials in women, youths and children.
            </div>
          </div>

          <div className={classes.info}>
            <div className={classes.more}>Read More</div>

            <div className={classes.location}>
              <img
                src={locationSvg}
                alt="codicon_location.svg"
                className={classes["img--location"]}
              />
              <div>Yaba Lagos, Nigeria</div>
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
        </div>
      </div>
    </section>
  );
};

export default CurrentCampaign;
