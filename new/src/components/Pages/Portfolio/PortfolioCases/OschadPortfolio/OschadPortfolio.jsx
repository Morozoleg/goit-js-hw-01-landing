import React from "react";
import PortfolioItem from "../../PortfolioItem/PortfolioItem";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import FourthSlide from "./FourthSlide";
import useFetchedContent from "../../../../../utilities/useFetchedContent";
import parser from "./parser";
import Spinner from "../../../../Utilities/Spinner/Spinner";
import classes from "./OschadPortfolio.module.less";

const SLIDER_SPEED = 500;

function OschadPortfolio(props) {
  const [content, error] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    parser,
    name: "portfolio:oschad",
  });

  if (error) {
    return error.message;
  }

  return (
    <PortfolioItem className={classes.item} settings={{ speed: SLIDER_SPEED }} color='#f3f4f6'>
      {content ? (
        [
          <FirstSlide content={content[0]} key={"firstSlide"} />,
          <SecondSlide
            content={content[1]}
            key={"secondSlide"}
            speed={SLIDER_SPEED}
          />,
          <ThirdSlide content={content[2]} key={"thirdSlide"} />,
          <FourthSlide content={content[3]} key={"fourthSlide"} />,
        ]
      ) : (
        <Spinner />
      )}
    </PortfolioItem>
  );
}

export default OschadPortfolio;
