import React from "react";
import ContentPage from "../../ContentPage/ContentPage";
import classes from "./PortfolioItem.module.less";
import Arrow from "../../../Utilities/Arrow/Arrow";
import { Link } from "react-router-dom";
import PageSlider from "../../../Utilities/PageSlider/PageSlider";
import useWindowSize from "../../../../utilities/useWindowSize";
import {useLanguageState} from "../../../../Context/language";

const butonback = {
    en: ["Back"],
    ru: ["Назад"],
    uk: ["Назад"]
};

function PortfolioItem({ children, className, settings }) {
    const {width} = useWindowSize()
    const [lang] = useLanguageState();
    const butonformtext = butonback[lang][0];
    return (
        <div className={classes.wrapperport}>
            <ContentPage
                className={`${className || ""} slick-height`}
                menuItem={"portfolio"}
            >
                <Link to={"/portfolio"} className={`${classes.link} ${classes.backLink}`}>
                    <Arrow className={classes.arrow} />
                    <span>{butonformtext}</span>
                </Link>
                {width >= 769 ? (
                    <PageSlider settings={settings}>
                        {children}
                    </PageSlider> ) : (<div className={classes.container}>{children}</div>)}
            </ContentPage>
        </div>
    );
}

export default PortfolioItem;
