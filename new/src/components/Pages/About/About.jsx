import React from "react";
import useFetchedContent from "../../../utilities/useFetchedContent";
import PageSlider from "../../Utilities/PageSlider/PageSlider";
import ContentPage from "../ContentPage/ContentPage";
import parser from "./parser";
import FirstSlide from "./Slides/FirstSlide";
import SecondSlide from "./Slides/SecondSlide";
import ThirdSlide from "./Slides/ThirdSlide";
import FourthSlide from "./Slides/FourthSlide";
import useWindowSize from "../../../utilities/useWindowSize";
import classes from "./About.module.less";

function About(props) {
  const [content] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    parser,
    name: "about",
  });
  const { width } = useWindowSize();

  return (
    <div className={classes.wrapper}>
      <ContentPage menuItem={"about"}>
        {content ? (
          <>
            {width >= 768 ? (
              <PageSlider>
                <FirstSlide key={"first"} content={content[0]} />
                <SecondSlide key={"second"} content={content[1]} />
                <ThirdSlide key={"third"} content={content[2]} />
                <FourthSlide key={"fourth"} content={content[3]} />
              </PageSlider>
            ) : (
              <div className={classes.container}>
                <FirstSlide content={content[0]} />
                <SecondSlide content={content[1]} />
                <ThirdSlide content={content[2]} />
                <FourthSlide content={content[3]} />
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </ContentPage>
    </div>
  );
}

export default About;
