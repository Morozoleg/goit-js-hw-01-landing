import React from "react";
import classes from "./CamozziPortfolio.module.less";
import OrderButton from "../../../../Utilities/OrderButtonForm/OrderButtonForm";

export default function FifthSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
      <div className={`${classes.slide} ${classes.fourth} ${classes.fifth}`}>
        <span className={classes.bgTitle}>{title}</span>
        <div className={classes.slideContent}>
          <div className={classes.firstRow}>
            <div className={classes.left}>
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
          <div className={classes.secondRow}>
            <span className={classes.line}/>
            <p>
              <span className={classes.line} />
            </p>
            <h4>{pictures[0].description}</h4>
            {/* <button className="btn btn-dark" >Заказать Проект</button> */}
            <OrderButton />
          </div>
        </div>
      </div>
  );
}
