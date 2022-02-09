import React from "react";
import classes from "./UkrgidroenergoPortfolio.module.less";


export default function FourthSlide({
                                      content: {
                                        title,
                                        content: { description, pictures }
                                      }
                                    }) {
  return (
      <div className={`${classes.slide} ${classes.fourth}`}>
        <div className={classes.slideContent}>
          <div className={classes.firstRow} >
            <div className={classes.left } >
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
