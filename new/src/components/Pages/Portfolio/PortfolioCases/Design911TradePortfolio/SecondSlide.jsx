import classes from "./Design911TradePortfolio.module.less";
import React from "react";

export default function SecondSlide({
  content: {
    title,
    content: { pictures }
  },
    speed
}) {
  return (
    <div className={`${classes.slide} ${classes.second}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
        <ul>
          {pictures.map(({ url, description }, i) => {
            return (

              <li key={description}
                  style={{transitionDelay: `${speed + i / 2 * speed}ms`}}
                  // className={`animate__animated animate__fast animate__fadeInDown`}
              >
                  <h4>
                      <span className={classes.line} />
                      {description}
                  </h4>
                <div className={classes.image}>
                  <div className={classes.wrapper}>
                      <span className={classes.line}/>
                      <img src={url} alt={description} />
                  </div>
                </div>

              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
