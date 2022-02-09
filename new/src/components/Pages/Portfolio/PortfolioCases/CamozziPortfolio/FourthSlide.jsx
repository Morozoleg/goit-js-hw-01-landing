import React from "react";
import classes from "./CamozziPortfolio.module.less";

export default function FourthSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.fourth} `}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
        <div className={`${classes.firstRow} ${classes.fourth_row}`}>
          <div className={`${classes.fourth_left} ${classes.text_place}`}>
            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <ul className={classes.right}>
            {pictures.map(({ url, description }) => {
              return (
                <li key={url}>
                  <img src={url} alt={description} />
                </li>
              );
            })}
          </ul>
        </div>

      </div>
    </div>
  );
}
