import classes from "./Design911TradePortfolio.module.less";
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
        <div className={classes.right}>
          <h4>{title}
            <span className={classes.line} />
          </h4>

          <div dangerouslySetInnerHTML={{ __html: description }} />
          <span className={classes.line} />

          <ul>

            {pictures.map(({ description }) => {
              return <li key={description}>{description}</li>;
            })}
          </ul>
        </div>
        <ul className={classes.left}>
          {pictures.map(({ url, description }) => {
            return (
                <li key={description}>
                  <img src={url} alt={description} />
                </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
