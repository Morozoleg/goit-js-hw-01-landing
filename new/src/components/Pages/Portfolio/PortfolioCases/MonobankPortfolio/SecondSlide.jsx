import classes from "./MonobankPortfolio.module.less";
import React from "react";

export default function SecondSlide({
    content: {
        content: { pictures }
    },
    speed
}) {
    return (
        <div className={`${classes.slide} ${classes.second}`}>
            <div className={classes.slideContent}>
                <ul>
                    {pictures.map(({ url, description }, i) => {
                        return (
                            <li key={description}
                                style={{transitionDelay: `${speed + i / 2 * speed}ms`}}
                                // className={`animate__animated animate__fast animate__fadeInDown`}
                            >
                                <div className={classes.deckrip}>
                                    <span className={classes.line} />
                                    <div dangerouslySetInnerHTML={{ __html: description}} />
                                </div>
                                <div className={classes.image}>
                                    <div className={classes.wrapper}>
                                        <span className={classes.line}/>
                                        <img src={url} />
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
