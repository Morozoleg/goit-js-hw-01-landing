import React from "react";
import classes from "../About.module.less";

function ThirdSlide({ content: { title, pictures } }) {
  return (
    <div className={`${classes.slide} ${classes.third}`}>
      <div className={classes.content}>
        <span className={classes.title}>{title}</span>
        <ul>
          {pictures.map((url) => (
            <li key={url}>
              <img src={url} alt="image" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ThirdSlide;
