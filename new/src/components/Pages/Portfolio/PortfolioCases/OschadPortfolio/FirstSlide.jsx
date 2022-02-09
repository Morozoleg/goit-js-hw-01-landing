import Arrow from "../../../../Utilities/Arrow/Arrow";
import classes from "./OschadPortfolio.module.less";
import portfolioClasses from "../../PortfolioItem/PortfolioItem.module.less";
import React from "react";

export default function FirstSlide({
  content: {
    title,
    content,
    link: { url, text },
    imgSrc
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.first}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
        <div className={classes.firstRow}>
          <div className={portfolioClasses.title}>
            <h1 className='animate__animated animate__fast smallFadeInLeft'>{title}</h1>
            <a
              href={url}
              className={`${portfolioClasses.link} ${classes.link}`}
            >
              <span className='animate__animated animate__fast smallFadeInLeft'>{text}</span>
              <Arrow className={`${portfolioClasses.arrow} ${classes.arrow} animate__animated smallFadeInLeft`} />
            </a>
          </div>
          <div className={`${classes.image} animate__animated animate__fast smallFadeInLeft`}>
            <img src={imgSrc} alt={title} />
          </div>
        </div>
        <ul className={classes.secondRow}>
          {content.map(({ title, text }, i) => {
            return (
              <li className={`animate__animated animate__delay-${i}s animate__fast smallFadeInLeft`} key={title}>
                <h4>{title}</h4>
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
