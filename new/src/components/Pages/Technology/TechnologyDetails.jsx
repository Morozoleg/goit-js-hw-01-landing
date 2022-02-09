import React, { useState } from "react";
import useFetchedContent from "../../../utilities/useFetchedContent";
import classes from "./TechnologyDetails.module.less";
import ContentPage from "../ContentPage/ContentPage";
import ContactForm from "../../Utilities/ContactForm/ContactForm";
import ScrollBar from "simplebar-react";
import "simplebar/src/simplebar.css";
import "./Scrollbar.css";
import {useLanguageState} from "../../../Context/language";
import { Link } from "react-router-dom";

const butonform = {
  en: ["order a project","TECHNOLOGY"],
  ru: ["заказать проект","ТЕХНОЛОГИЯ"],
  uk: ["замовити проект","ТЕХНОЛОГІЯ"]
};
const parser = (data) => {
  data = data.content.main_page_content.entity;
  return {
    title: data.title[0].value,
    text: data.body[0].value,
    image: data.field_image[1].uri[0].url,
  };
};

const TechnologyDetails = (props) => {
  const [isOpen, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [data] = useFetchedContent({
    url: `/block-layout?path=/${props.match.params.id}`,
    name: `/technologyDetails/${props.match.params.id}`,
    parser,
  });
  const [links] = useFetchedContent({
    url: `/${props.match.path.split("/")[1]}`,
    name: "/technologyLinks",
  });
  const [lang] = useLanguageState();
  const butonformtext = butonform[lang][0];
  const butonformtitle = butonform[lang][1];

  const entityContentPage = (classes, onClickFunc) => {
    return (
      links &&
      links.map((data, index) => (
        <li
          key={data.key ? data.key : index}
          className={`${
            props.match.params.id === data.title.toLowerCase()
              ? classes.active
              : ""
          }`}
        >
          <Link
            to={`${data.view_node.split("/")[1]}`}
            onClick={() => {
              setOpen(!isOpen);
              onClickFunc();
            }}
          >
            {data.title}
          </Link>
        </li>
      ))
    );
  };

  return (
    <div className={classes.wrapper}>
      <ContentPage Entity={entityContentPage}>
        {data ? (
          <div className={classes.container}>
            {links ? (
              <ul className={`${classes.nav} ${isOpen && classes.open}`}>
                {links.map((data, index) => (
                  <li
                    key={index}
                    className={`${
                      props.match.params.id === data.title.toLowerCase() &&
                      classes.top
                    } ${classes.link}`}
                  >
                    <Link
                      to={`${data.view_node.split("/")[1]}`}
                      onClick={() => {
                        setOpen(!isOpen);
                      }}
                    >
                      {data.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    className={`${classes.btnNav} ${
                      isOpen && classes.activeBtn
                    }`}
                    onClick={() => setOpen(!isOpen)}
                  ></button>
                </li>
              </ul>
            ) : (
              ""
            )}
            <div className={classes.contentWrapper}>
              <object
                type="image/svg+xml"
                data={`http://back.planeta-web.co.ua${data.image}`}
                className={classes.obj}
              >
                <img
                  src={`http://back.planeta-web.co.ua${data.image}`}
                  alt=""
                />
              </object>
              <div className={classes.textWrapper}>
                <h3
                  className={classes.title}
                >{`${butonformtitle} "${data.title}"`}</h3>
                <ScrollBar
                  // className={classes.paragraph}
                  autoHide={false}
                  className={classes.paragraphWrapper}
                >
                  <p className={classes.paragraph} dangerouslySetInnerHTML={{ __html: data.text }}>
                  </p>
                </ScrollBar>
              </div>
            </div>
            <div
              className={`${classes.formWrapper} ${
                animation ? classes.animationWrapper : ""
              }`}
            >
              <button
                className={`${classes.btn} btn btn-dark`}
                onClick={() => setAnimation(true)}
              >
                {butonformtext}
              </button>
              <div className={classes.containerForm}>
                <ContactForm
                  className={`${classes.form}`}
                  buttonClassname={"btn btn-dark"}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </ContentPage>
    </div>
  );
};

export default TechnologyDetails;
