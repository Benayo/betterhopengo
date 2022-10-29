import React from "react";
import classes from "./Blog.module.css";
import Oheader from "../../components/Otherheaderf/Oheader";

import { useState } from "react";

import imageHandsandWater from "../../UI/images/imageHandsWater.png";
import image13 from "../../UI/images/image13.png";
import Footer from "../../components/Footerf/Footer";
import MoreBlog from "./sections/MoreBlog";

const Blog = () => {
  const [showMoreBlog, setShowMoreBlog] = useState(false);

  const openMoreBlogHandler = () => {
    setShowMoreBlog(true);
  };

  if (showMoreBlog) {
    return <MoreBlog />;
  }

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

      <div className={classes.container}>
        <div className={classes["card--container"]}>
          <div className={classes.card}>
            <div className={classes["card--image"]}>
              <img
                src={image13}
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
              leo molestie vestibulum nisl lorem gravida. Aenean est eu ut
              tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac. Congue donec
              commodo odio dolor sed tellus. Mauris lectus elit, sed rutrum et
              viverra.
            </div>
            <button onClick={openMoreBlogHandler} className={classes.more}>Read more...</button>
          </div>
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
              leo molestie vestibulum nisl lorem gravida. Aenean est eu ut
              tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac. Congue donec
              commodo odio dolor sed tellus. Mauris lectus elit, sed rutrum et
              viverra.
            </div>
            <button onClick={openMoreBlogHandler} className={classes.more}>Read more...</button>
          </div>
        </div>
        <div className={classes["card--container"]}>
          <div className={classes.card}>
            <div className={classes["card--image"]}>
              <img
                src={image13}
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
              leo molestie vestibulum nisl lorem gravida. Aenean est eu ut
              tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac. Congue donec
              commodo odio dolor sed tellus. Mauris lectus elit, sed rutrum et
              viverra.
            </div>
            <button onClick={openMoreBlogHandler} className={classes.more}>Read more...</button>
          </div>
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
              leo molestie vestibulum nisl lorem gravida. Aenean est eu ut
              tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac. Congue donec
              commodo odio dolor sed tellus. Mauris lectus elit, sed rutrum et
              viverra.
            </div>
            <button onClick={openMoreBlogHandler} className={classes.more}>Read more...</button>
          </div>
        </div>
        <div className={classes["card--container"]}>
          <div className={classes.card}>
            <div className={classes["card--image"]}>
              <img
                src={image13}
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
              leo molestie vestibulum nisl lorem gravida. Aenean est eu ut
              tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac. Congue donec
              commodo odio dolor sed tellus. Mauris lectus elit, sed rutrum et
              viverra.
            </div>
            <button onClick={openMoreBlogHandler} className={classes.more}>Read more...</button>
          </div>
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
              leo molestie vestibulum nisl lorem gravida. Aenean est eu ut
              tortor vitae adipiscing sed. Orci imperdiet in ac etiam non
              egestas dictum tempus. Accumsan, sed odio amet risus eget nullam
              cras ac diam. Ultrices proin eget proin tempus vulputate malesuada
              feugiat at. Amet id velit rhoncus ut dolor a hac. Congue donec
              commodo odio dolor sed tellus. Mauris lectus elit, sed rutrum et
              viverra.
            </div>
            <button onClick={openMoreBlogHandler} className={classes.more}>Read more...</button>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Blog;
