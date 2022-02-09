import React from "react";
import Spinner from "../../Utilities/Spinner/Spinner";
import imageSrc from "../../../assets/images/web-word.png";
import planetImgSrc from "../../../assets/images/planet.svg";
import classes from "./Main.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "../../Utilities/ContactForm/ContactForm";

const parser = data => ({
  body: data.body[0].value,
  button: data.field_button_text[0].value
});

function Main() {
  const [toggled, toggle] = React.useState(false);
  const [text, error] = useFetchedContent({
    url: "/",
    name: "main",
    parser
  });

  let content;

  if (error) {
    content = error.message;
  } else if (text) {
    content = (
        <>
          <div className={classes.mainLeft}>
            <div className={classes.mainLogo}>
              <img src={imageSrc} alt="main-logo" />
            </div>
            <div
                className={classes.mainText}
                dangerouslySetInnerHTML={{
                  __html: text.body
                }}
            />
            <button
                className={`${classes.formToggle} btn`}
                onClick={() => {
                  toggle(true);
                }}
            >
              <span>{text.button}</span>
            </button>
          </div>
          <div className={classes.mainRight}>
            <div className={classes.planetImage}>
              <img src={planetImgSrc} alt="planet" />
            </div>
          </div>
        </>
    )
  } else {
    content = <Spinner className={classes.loader} />
  }

  return (
    <>
      <div className={classes.mainBg}>
        <div className={`container ${classes.container}`}>
          <div className={classes.mainInner}>
            {content}
          </div>
        </div>
      </div>
      <div
        className={`overlay ${classes.contactForm} ${
          toggled ? classes.open : ""
        }`}
      >
        <button
          className={`${classes.closeButton}`}
          onClick={() => toggle(false)}
        >
          <FontAwesomeIcon icon="times" />
        </button>
        <div className="container">
          <Form className={classes.formInner} />
        </div>
      </div>
    </>
  );
}

export default Main;
