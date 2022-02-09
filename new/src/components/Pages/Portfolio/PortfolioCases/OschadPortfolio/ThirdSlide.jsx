import classes from "./OschadPortfolio.module.less";
import React from "react";

export default function ThirdSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.third}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
        <ul className={classes.left}>
          {pictures.map(({ url, description }) => {
            return (
              <li key={description}>
                <img src={url} alt={description} />
              </li>
            );
          })}
        </ul>
        <div className={classes.right}>
          <h4>{title}</h4>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <ul>
            {pictures.map(({ description }) => {
              return <li key={description}>{description}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
