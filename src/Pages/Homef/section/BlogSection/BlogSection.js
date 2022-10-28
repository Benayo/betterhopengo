import React from "react";

import classes from "./BlogSection.module.css";
import imageHandsandWater from "../../../../UI/images/imageHandsWater.png";
import children3 from "../../../../UI/images/children-3.png";

const BlogSection = () => {
  return (
    <section className={classes.container}>
      <div className={classes["text--container"]}>
        <div className={classes["text--main"]}>Our Blog Post</div>
      </div>
      <div className={classes["card--container"]}>
        <div className={classes.card}>
          <div className={classes["card--image"]}>
            <img
              src={imageHandsandWater}
              alt="imageHandsandWater"
              className={classes.image}
            />
            {/* <div className={classes["image-details"]}>
              <div>17th October, 2022.</div>
              <div>3mins read</div>
            </div> */}
          </div>

          <div className={classes["details--main-text"]}>
            Glowing Splints Initiative Bore Hole <br /> Construction campaign
            updates.
          </div>
          <div className={classes["details--sub-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor mi
            leo molestie vestibulum nisl lorem gravida. Aenean est eu ut tortor
            vitae adipiscing sed. Orci imperdiet in ac etiam non egestas dictum
            tempus. Accumsan, sed odio amet risus eget nullam cras ac diam.
            Ultrices proin eget proin tempus vulputate malesuada feugiat at.
            Amet id velit rhoncus ut dolor a hac. Congue donec commodo odio
            dolor sed tellus. Mauris lectus elit, sed rutrum et viverra.
          </div>
          <div className={classes.more}>Read more...</div>
        </div>
        <div className={classes.card}>
          <div className={classes["card--image"]}>
            <img src={children3} alt="children3" className={classes.image} />
            {/* <div className={classes["image-details"]}>
              <div>17th October, 2022.</div>
              <div>3mins read</div>
            </div> */}
          </div>

          <div className={classes["details--main-text"]}>
            Glowing Splints Initiative Bore Hole <br /> Construction campaign
            updates.
          </div>
          <div className={classes["details--sub-text"]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor mi
            leo molestie vestibulum nisl lorem gravida. Aenean est eu ut tortor
            vitae adipiscing sed. Orci imperdiet in ac etiam non egestas dictum
            tempus. Accumsan, sed odio amet risus eget nullam cras ac diam.
            Ultrices proin eget proin tempus vulputate malesuada feugiat at.
            Amet id velit rhoncus ut dolor a hac. Congue donec commodo odio
            dolor sed tellus. Mauris lectus elit, sed rutrum et viverra.
          </div>
          <div className={classes.more}>Read more...</div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
