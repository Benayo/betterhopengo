import React from "react";
import "./Faq.css";

import arrow from "../../UI/images/arrow.png";
import dot from "../../UI/images/dot.png";
import Footer from "../../components/Footerf/Footer";
import Oheader from "../../components/Otherheaderf/Oheader";

const Faq = () => {
  return (
    <section>
      <Oheader />
      <div className="faq">
        <div className="section-1 header">
          <h2>Frequently Asked Questions</h2>
          <div className="qAndA">
            <div className="questions">
              <div className="question">
                <div>
                  <img src={dot} alt="" />
                  <span className="mainQuestion">How can I donate?</span>
                </div>
                <img src={arrow} alt="" />
              </div>
              <div className="question">
                <div>
                  <img src={dot} alt="" />
                  <span className="mainQuestion">
                    Where are these foundations located?
                  </span>
                </div>
                <img src={arrow} alt="" />
              </div>
              <div className="question">
                <div>
                  <img src={dot} alt="" />
                  <span className="mainQuestion">
                    How am I sure the foundations get the money?
                  </span>
                </div>
                <img src={arrow} alt="" />
              </div>
              <div className="question">
                <div>
                  <img src={dot} alt="" />
                  <span className="mainQuestion">
                    Are my information secured?
                  </span>
                </div>
                <img src={arrow} alt="" />
              </div>
              <div className="question">
                <div>
                  <img src={dot} alt="" />
                  <span className="mainQuestion">
                    What payment methods are avialable to make donations?
                  </span>
                </div>
                <img src={arrow} alt="" />
              </div>
            </div>
            <div className="answers">
              <h5>How can I donate?</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit
                ipsum, sit at hac fermentum, amet tellus potenti. Purus
                habitasse aliquam pharetra malesuada posuere laoreet sed et non.
                Magna nibh amet duis et dictumst. Aliquam lacus, bibendum cursus
                integer faucibus est aliquet pellentesque. Felis tempus
                volutpat, sed cursus in. Cum at eget nunc ut sem imperdiet arcu
                tristique leo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Faq;
