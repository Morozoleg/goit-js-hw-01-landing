import classes from "./CamozziPortfolio.module.less";
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
              <span className={classes.line} />

              <div className={classes.par} dangerouslySetInnerHTML={{ __html: description }} />

          </div>
        <ul className={classes.left}>
          {pictures.map(({ url, description }) => {
            return (
              <li className={classes.text_style} key={description}>
                <img className={classes.picture} src={url} alt={description} />
                  <span className={classes.line}/>
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
}
