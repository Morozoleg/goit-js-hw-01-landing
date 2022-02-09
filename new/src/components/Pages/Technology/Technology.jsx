import React from "react";
import useFetchedContent from "../../../utilities/useFetchedContent";
import { Link, useRouteMatch } from "react-router-dom";
import ContentPage from "../ContentPage/ContentPage";
import classes from "./Technology.module.less";

const parser = (data) => {
  data = data.content;
  return {
    title: data.subtitle_for_technology.entity.body,
    links: data.main_page_content.entity,
  };
};

const Technology = (props) => {
  let { url } = useRouteMatch();
  const [data] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    name: "/technology",
    parser,
  });

  const links = data?.links;
  return (
    <div className={classes.wrapper}>
      <ContentPage>
        {links ? (
          <div className={classes.container}>
            <h1 className={classes.title}>{links[0].field_opis_storinki}</h1>
            <ul className={classes.technologyList}>
              {links.map((data, i) => (
                <li key={i} className={classes.technology}>
                  <object
                    type="image/svg+xml"
                    data={`https://back.planeta-web.co.ua${
                      data.field_image.split(" ")[1]
                    }`}
                    className={classes.obj}
                  >
                    <img
                      src={`https://back.planeta-web.co.ua${
                        data.field_image.split(" ")[1]
                      }`}
                      alt=""
                    />
                  </object>
                  <Link
                    to={`${url}${data.view_node.replace("/ru", "").replace("/en", "")}`}
                    className={`${classes.button} btn btn-dark`}
                  >
                    {data.field_tekst_knopki}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
      </ContentPage>
    </div>
  );
};

export default Technology;
