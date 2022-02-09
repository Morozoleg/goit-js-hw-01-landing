import React from "react";
import classes from "../About.module.less";

function SecondSlide({
  content: { description, firmDescription, pictures, title },
}) {
  return (
    <div className={`${classes.slide} ${classes.second}`}>
      <div className={classes.content}>
        <span className={classes.title}>{title}</span>
        <div className={classes.left}>
          <div
            className={`${classes.text} ${classes.description}`}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <ul className={classes.pictures}>
            {pictures.map(({ url, value }) => (
              <li key={url}>
                <div className={classes.image}>
                  <img src={url} alt={value} />
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: value }}
                  className={classes.text}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.right}>
          <ul className={classes.firm}>
            {firmDescription.map(({ title, description }) => (
              <li key={title}>
                <span className={classes.heading}>{title}</span>
                <div
                  dangerouslySetInnerHTML={{ __html: description }}
                  className={classes.text}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecondSlide;
