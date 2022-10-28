import React from "react";
import classes from "./OngoingCampaign.module.css";
import GetPaidStock from "../../../../UI/images/GetPaidStock.png";
import GetPaidStock2 from "../../../../UI/images/GetPaidStock-2.png";
import GetPaidStock3 from "../../../../UI/images/GetPaidStock-3.jpg";
import locationSvg from "../../../../UI/images/codicon_location.svg";

const OngoingCampaign = () => {
  return (
    <section className={classes.container}>
      <div className={classes["text--container"]}>
        <div className={classes["text--main"]}>Ongoing Campaigns</div>
        <div className={classes["text--sub"]}>
          These are the current needs and campaigns of onboarded Foundations and
          NGO’s for you to search and make donations respectively.
        </div>
      </div>
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
            src={GetPaidStock2}
            alt="GetPaidStock"
            className={classes.image}
          />
          <div>
            <div className={classes["details-main--text"]}>
              Donate pool - (Widows)
            </div>
            <div className={classes["details-sub--text"]}>
              Glowing Splints Development Initiative is an NGO with a vision to
              ignite leadership & entrepreneurship potentials in women, youths
              and children.
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
            src={GetPaidStock3}
            alt="GetPaidStock"
            className={classes.image}
          />
          <div>
            <div className={classes["details-main--text"]}>
              Donate pool - (Feeding)
            </div>
            <div className={classes["details-sub--text"]}>
              Donate NG is an NGO with a vision to ignite leadership &
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

export default OngoingCampaign;
