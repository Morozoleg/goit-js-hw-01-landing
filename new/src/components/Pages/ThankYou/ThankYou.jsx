import React from "react";
import { Link, Redirect } from "react-router-dom";
import formClasses from "../Main/Main.module.less";
import imgSrc from "../../../assets/images/thank_you.gif";
import classes from "./ThankYou.module.less";
import { useContentState } from "../../../Store/Content/store";
import { useLanguageState } from "../../../Context/language";
import { setContactFormSubmissionFlag } from "../../../Store/Content/actions";

function ThankYou() {
  const [
    { contactForm, contactFormSuccess: success },
    dispatch
  ] = useContentState();
  const [lang] = useLanguageState();
  const {
    thankYou: { text, button }
  } = contactForm[lang];
  return !success ? (
    <Redirect to={"/"} />
  ) : (
    <div
      className={`${formClasses.contactForm} ${formClasses.open} ${classes.content} overlay`}
    >
      <div className="container">
        <div className={classes.page}>
          <div className={classes.check}>
            <img src={imgSrc} alt="alt" />
          </div>
          <p className={classes.text}>
            <span>{text}</span>
          </p>
          <Link
            className="btn btn-light"
            to={"/"}
            onClick={() => dispatch(setContactFormSubmissionFlag(false))}
          >
            {button}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
