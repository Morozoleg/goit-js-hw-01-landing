import React from "react";
import classes from "../About.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../../../Utilities/ContactForm/ContactForm";

function FourthSlide({
  content: {
    items,
    titles: [mainTitle, title, followUs],
  },
}) {
  return (
    <div className={`${classes.slide} ${classes.fourth}`}>
      <div className={classes.content}>
        <div className={classes.left}>
          <span className={classes.mainTitle}>{mainTitle}</span>
          <ContactForm
            className={classes.form}
            buttonClassname={"btn btn-dark"}
          />
        </div>
        <div className={classes.right}>
          <span className={classes.title}>{title}</span>
          <ul className={classes.text}>
            {items.map(({ value, type }) => (
              <li key={value} className={classes[type]}>
                <i>
                  <FontAwesomeIcon icon={type} />
                </i>
                <span>{value}</span>
              </li>
            ))}
          </ul>
          <span className={classes.title}>{followUs}</span>
          <div className={classes.socialNetwork}>
            <i>
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </i>
            <span>planetawebcomua</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthSlide;
