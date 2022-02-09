import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Mobile.module.less";
import { BASE_URL } from "../../../../utilities/http";
import {useLanguageState} from "../../../../Context/language";
const mobiteLang = {
    en: ["More projects"],
    ru: ["Больше проектов"],
    uk: ["Більше проектів"]
};
function Mobile({ items, className }) {
    const [lang] = useLanguageState();
    const text = mobiteLang[lang][0];
    let sho = 3;
    const [Sho, SetSho] = useState(sho);

    let hid = '';
    const [Hid, SetHid] = useState(hid);

    function showMore() {
        if(Sho+3 >= items.length){
            SetSho(items.length);
            SetHid('none');
            //console.log(Hid)
        }else{
            SetSho(Sho+3);
        }
    }
  return (
    <div className={`${classes.portfolioMobile} ${className || ''}`}>
      <div className={classes.container}>
        <ul>
          {items.slice(0,Sho).map(({ title, link, imgSrc }) => {
            return (
              <li className={classes.portfolioItem} key={title}>
                <Link
                  to={link.replace("/ru", "").replace("/en", "")}
                  className={`${classes.previewImg} `}
                >
                    {imgSrc.map((e, i) => (
                        i === 3 ? (<img key={i} src={`${BASE_URL}${e}`} alt={title} />):''
                    ))}
                  <span>
                    <FontAwesomeIcon icon="arrow-right" />
                  </span>
                </Link>
                <h2 data-title={title}>
                  <span>{title}</span>
                </h2>
              </li>
            );
          })}
        </ul>
        <p style={{display: Hid }}>
          <a className="btn btn-primary" onClick={showMore.bind()}>{text}</a>
        </p>
      </div>
    </div>
  );
}

export default Mobile;
