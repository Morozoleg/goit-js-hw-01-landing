import React from "react";
import classes from "./Design911TradePortfolio.module.less";

export default function FourthSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.fourth}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
           <div className={classes.firstRow}>
               <div><h4>{title}</h4></div>
            <div dangerouslySetInnerHTML={{ __html: description }} />
           </div>
        <div className={classes.secondRow}>
              <ul className={classes.left}>
                {pictures.map(({ url, description }) => {
                  return (
                      <li key={description}>
                        <img src={url} alt="" />
                        <li key={description}>{description}</li>
                      </li>
                  );
                })}
                  {/*{pictures.map(({ description }) => {*/}
                  {/*  return <li key={description}>{description}</li>;*/}
                  {/*})}*/}
                </ul>
        </div>

        </div>
    </div>
  );
}
