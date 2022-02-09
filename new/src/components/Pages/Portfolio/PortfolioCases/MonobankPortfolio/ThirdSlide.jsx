import classes from "./MonobankPortfolio.module.less";
import React from "react";

export default function ThirdSlide({
 content: {
   content: { description, pictures }
 }
}) {
  return (
      <div className={`${classes.slide} ${classes.third}`}>
        <div className={classes.slideContent}>
          <div>
            <div className={classes.righttop}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <ul className={classes.left} >
              {pictures.map(({ url, description }) => {
                return (
                    <li key={description}>
                      <img src={url} alt={description} />
                    </li>
                );
              })}
            </ul>
            <div className={classes.right}>
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
          </div>
        </div>
      </div>
  );
}
