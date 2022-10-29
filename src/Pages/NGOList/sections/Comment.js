import React from "react";

import classes from "./Comment.module.css";

const Comment = () => {
  return (
    <form className={classes.form}>
      <label className={classes.label} htmlFor="comment">
        Post your Comment Here!
      </label>
      <textarea
        name="comment"
        id="comment"
        cols="30"
        rows="10"
        placeholder="Comments"
        className={classes.textarea}
      />
      <button className={classes.button}>Send</button>
    </form>
  );
};

export default Comment;
