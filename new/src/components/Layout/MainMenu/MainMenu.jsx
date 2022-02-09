import React from "react";
import { Link } from "react-router-dom";
import LangSelector from "../../Utilities/LangSelector/LangSelector";
import classes from "./MainMenu.module.less";
import { useMenuState } from "../menuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContentState } from "../../../Store/Content/store";
import { useLanguageState } from "../../../Context/language";
import { fetchContent } from "../../../Store/Content/actions";

const parser = (data, lang) => {
  if (!data.length) {
    return null;
  }
  return data.map(({ title, relative, key }, i) => {
    const parts = relative.split("/");
    if (parts[1] === lang) {
      parts.splice(1, 1);
      relative = parts.join("/");
    }
    return {
      title,
      relative,
      key,
      index: i + 1
    };
  });
};

function MainMenu() {
  const [state, dispatch] = useContentState();
  const name = "mainMenu";
  const [lang] = useLanguageState();
  const links = state[name]?.[lang];
  const [toggled, toggle] = useMenuState();
  const err = state[name]?.error;
  const closeMenu = () => toggle(false);

  if (!links && !err) {
    dispatch(fetchContent({ url: "/api/menu_items/main", parser, name, lang }));
  }

  return (
    <nav
      className={`${classes.mainMenu} ${toggled ? classes.open : ""} overlay`}
    >
      <ul className={`${classes.mainMenuLinks}`}>
        {links
          ? links.map(({ title, relative, key }) => {
              return (
                <li key={key} className={`${classes.navLink}`}>
                  <Link
                    to={{ pathname: relative }}
                    onClick={closeMenu}
                  >
                    <span className="glitch" data-text={title}>
                      {title}
                    </span>
                  </Link>
                </li>
              );
            })
          : err
          ? err.message
          : "Loading..."}
      </ul>
      <button onClick={closeMenu} className={classes.close}>
        <FontAwesomeIcon icon="times" />
      </button>
      <LangSelector
        onLangChange={closeMenu}
        className={classes.langSelector}
        activeClassName={classes.activeLang}
      />
    </nav>
  );
}
export default MainMenu;
