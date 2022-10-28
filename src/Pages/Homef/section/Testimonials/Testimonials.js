import React from "react";

import classes from "./Testimonials.module.css";
import Testimonial1 from "../../../../UI/images/Testimonial1.png";

const Testimonials = () => {
  return (
    <section className={classes.container}>
      <div className={classes["text--main"]}>Testimonials</div>
      <div className={classes.card}>
        <div>
          <img src={Testimonial1} alt="Testimonial" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
