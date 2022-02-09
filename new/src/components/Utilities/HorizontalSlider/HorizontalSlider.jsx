import React from "react";
import Slider from "../Slider/Slider";
import classes from "./HorizontalSlider.module.less";

function HorizontalSlider({ settings = {}, children, titles }) {
  const sliderRef = React.useRef(null);
  const [currentSlide, setSlide] = React.useState(0);

  function goTo(i) {
    sliderRef.current.slickGoTo(i);
  }

  const defaultSettings = {
    lazyLoad: "progressive",
    infinite: false,
    ref: sliderRef,
    beforeChange(_, next) {
      setSlide(next);
    },
  };

  return (
    <>
      <div className={classes.navigation}>
        <ul className={classes.list}>
          {titles &&
            titles.map((data, n) => {
              return (
                <li key={n}>
                  <button
                    className={currentSlide === n ? classes.active : ""}
                    onClick={() => goTo(n)}
                  >
                    {data.value}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
      <Slider settings={{ ...defaultSettings, ...settings }}>{children}</Slider>
    </>
  );
}

export default HorizontalSlider;
