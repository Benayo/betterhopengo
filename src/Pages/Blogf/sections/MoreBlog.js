import React from "react";
import Oheader from "../../../components/Otherheaderf/Oheader";
import classes from "./MoreBlog.module.css";

import image13 from "../../../UI/images/image13.png";
import Footer from "../../../components/Footerf/Footer";

const MoreBlog = () => {
  return (
    <section>
      <Oheader />
      <div className={classes.container1}>
        <div className={classes["text--container"]}>
          <div className={classes["text--main"]}>Our Recent Blog</div>
          <div className={classes["text--sub"]}>
            Here you get to read about the latest happenings <br /> about
            current situations of Rural Areas, NGO’s and Foundations, <br /> and
            the playmakers coming to their rescue.
          </div>
        </div>
      </div>

      <div className={classes["image--container"]}>
        <img src={image13} alt="imageHandsandWater" className={classes.image} />
      </div>

      <div>
        <div className={classes["info--container"]}>
          <div className={classes["text--main--2"]}>
            Glowing Splints Initiative Bore Hole Construction campaign <br />{" "}
            has been fully funded 100% and work is completed.
          </div>
          <div className={classes["text--sub-1"]}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor mi
              leo molestie vestibulum nisl lorem gravida. Aenean est eu ut
              tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac.
            </p>
            <p>
              {" "}
              Congue donec commodo odio dolor sed tellus. Mauris lectus elit,
              sed rutrum et viverra. Vel id nam at faucibus in lectus lacus.
              Felis duis suspendisse iaculis orci, quisque gravida pellentesque
              volutpat. Viverra et scelerisque fermentum at vulputate nisl in
              vulputate. Posuere dignissim morbi urna pellentesque. Porttitor
              aliquet cursus dui ut amet sed condimentum ac.
            </p>
            <p>
              Ut elementum ornare tortor viverra et dolor. Tellus massa sapien
              ultricies tortor. Adipiscing sit pulvinar ut sit eget donec et a,
              maecenas. Blandit eros, habitant quis commodo sit et accumsan.
              Ipsum ut orci, a donec. Vel vitae, nulla nulla accumsan curabitur
              malesuada at netus vel. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
            <p>
              Tempor mi leo molestie vestibulum nisl lorem gravida. Aenean est
              eu ut tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac.
            </p>
            Congue donec commodo odio dolor sed tellus. Mauris lectus elit, sed
            rutrum et viverra. Vel id nam at faucibus in lectus lacus. Felis
            duis suspendisse iaculis orci, quisque gravida pellentesque
            volutpat. Viverra et scelerisque fermentum at vulputate nisl in
            vulputate. Posuere dignissim morbi urna pellentesque. Porttitor
            aliquet cursus dui ut amet sed condimentum ac.{" "}
            <p>
              {" "}
              Ut elementum ornare tortor viverra et dolor. Tellus massa sapien
              ultricies tortor. Adipiscing sit pulvinar ut sit eget donec et a,
              maecenas. Blandit eros, habitant quis commodo sit et accumsan.
              Ipsum ut orci, a donec. Vel vitae, nulla nulla accumsan curabitur
              malesuada at netus vel. Visit their website on www.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
};

export default MoreBlog;
