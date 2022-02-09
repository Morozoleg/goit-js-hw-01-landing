import React from "react";
import classes from "../About.module.less";

function FirstSlide({ content: [title, companyName, text1, text2] }) {
  return (
    <div className={`${classes.slide} ${classes.first}`}>
      <div className={classes.content}>
        <div className={classes.left}>
          <span className={classes.title}>{title}</span>
          <h1 className={classes.heading}>{companyName}</h1>
        </div>
        <div className={classes.right}>
          <p className={classes.text}>{text1}</p>
          <p className={classes.text}>{text2}</p>
        </div>
      </div>
    </div>
  );
}

export default FirstSlide;
