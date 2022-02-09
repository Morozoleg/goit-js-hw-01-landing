import React, { useState } from "react";
import classes from "./Slide.module.less";
import useFetchedContent from "../../../../utilities/useFetchedContent";
import Slider from "../../../Utilities/HorizontalSlider/HorizontalSlider";
import ContactForm from "../../../Utilities/ContactForm/ContactForm";

const parser = (data) => {
  return data;
};

const Slide = () => {
  // зараз статично, так як бек не наповнений але в майбутньому має витягувутись url для запроса по конкретній сторінці
  const [animation, setAnimation] = useState(false);
  const [data, error] = useFetchedContent({
    url: "/block-layout?path=/uslugi",
    parser,
    name: `/1`,
  });
  if (error) {
    return error.message;
  }
  return (
    <div className={` ${classes.slideWrapper}`}>
      {data && (
        <div>
          <Slider titles={data.content.main_page_content.entity.field_uslugi_title}>
            {data.content.main_page_content.entity.field_slider.map(
              (data1, index, _) => {
                return [
                  <div
                    key={data1.id[0]}
                    data-slide-index={index + 1}
                    className={`${classes.contentWrapper}`}
                  >
                    <span>
                      {index + 1}/{_.length}
                    </span>
                    <h2>{data.content.main_page_content.entity.field_uslugi_title[index].value}</h2>
                    <p dangerouslySetInnerHTML={{ __html: data.content.main_page_content.entity.field_uslugi_text[index].value }}></p>
                  </div>,
                ];
              }
            )}
          </Slider>
          <div
            className={`${classes.formWrapper} ${
              animation ? classes.animationWrapper : ""
            }`}
          >
            <button
              className={`${classes.btn} btn btn-dark`}
              onClick={() => setAnimation(true)}
            >
              {data.content.main_page_content.entity.field_button_text[0].value}
            </button>
            <div className={classes.container}>
              <ContactForm
                className={`${classes.form}`}
                buttonClassname={"btn btn-dark"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slide;
