import React, { useEffect } from "react";
import Slider from "../Slider/Slider";
import classes from "./PageSlider.module.less";

function PageSlider({ settings = {}, children }) {
  const sliderRef = React.useRef(null);
  const [currentSlide, setSlide] = React.useState(0);
  const slide = (y) => {
    y > 0 ? sliderRef.current.slickNext() : sliderRef.current.slickPrev();
  };
  const wheelHandler = (e) => slide(e.deltaY);
  useEffect(() => {
    addEventListener("wheel", wheelHandler);
    return () => {
      removeEventListener("wheel", wheelHandler);
    };
  });

  function goTo(i) {
    sliderRef.current.slickGoTo(i);
  }

  const defaultSettings = {
    infinite: false,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    buttons: false,
    dots: false,
    ref: sliderRef,
    beforeChange(_, next) {
      setSlide(next);
    },
  };

  return (
    <>
      <Slider settings={{ ...defaultSettings, ...settings }}>{children}</Slider>
      <div className={classes.navigation}>
        <ul>
          {Array.isArray(children) &&
            children.map((_, n) => {
              return (
                <li key={n}>
                  <button
                    className={currentSlide === n ? classes.active : ""}
                    onClick={() => goTo(n)}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default PageSlider;
