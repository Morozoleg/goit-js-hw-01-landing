import React, {useEffect} from "react";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./DesktopHorizontal.module.less";
import { Link } from 'react-router-dom';
import Arrow from "../../../Utilities/Arrow/Arrow";
import { BASE_URL } from "../../../../utilities/http";
//const colors = ['pink', 'orange', 'brown', 'blue']

function DesktopHorizontal({ items }) {
    const sliderRef = React.useRef(null);
    const itemList = items.map(({ title,body , imgSrc, link, field_color ,field_block_color }) => (
          <Link key={title} to={link.replace("/ru", "").replace("/en", "")} className={classes.slideLink}>
              <div className={classes.hoveritem} style={{backgroundColor: field_color}}></div>
                  <div className={`${classes.slide} `+title}>
                      <div className={classes.image } style={{backgroundColor: field_block_color , backgroundImage: `url(${BASE_URL}${imgSrc[2]})`}}>
                          <div style={{backgroundImage: `url(${BASE_URL}${imgSrc[1]})`}}></div>
                      </div>
                      <h2>{title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: body }} className={`${classes.bodycon}`}/>
                  </div>
          </Link>
  ));

    const slide = (y) => {
        y > 0 ? next() : prev();
    };
    const wheelHandler = (e) => slide(e.deltaY);
    useEffect(() => {
        addEventListener("wheel", wheelHandler);
        return () => {
            removeEventListener("wheel", wheelHandler);
        };
    });

    const prev = () => {
        sliderRef.current.slickPrev();
    };
    const next = () => {
        sliderRef.current.slickNext();
    };

  return items.length >= 2 ? (
    <div className={classes.desktopHorizontal}>
      <Slider
        settings={{
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: false,
            ref: sliderRef,
            responsive: [
            {
              breakpoint: 1439,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 2
              }
            }
          ]
        }}
      >
        {itemList}
      </Slider>
        <button onClick={prev}>
            <Arrow className={`${classes.arr} ${classes.prev}`}  />
        </button>
        <button onClick={next}>
            <Arrow className={`${classes.arr} ${classes.next}`}  />
        </button>
    </div>
  ) : (
    itemList
  );
}

export default DesktopHorizontal;
