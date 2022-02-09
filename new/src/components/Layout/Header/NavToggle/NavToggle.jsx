import React from "react";
import { useLanguageState } from "../../../../Context/language";
import defaultClasses from "./NavToggle.module.less";
import { useMenuState } from "../../menuContext";

const mainMenuToggle = {
  en: ["close", "menu"],
  ru: ["закрыть", "меню"],
  uk: ["закрити", "меню"]
};
function NavToggle(props) {
  const [toggled, toggleFunc] = useMenuState();
  const [lang] = useLanguageState();
  const text = mainMenuToggle[lang][+!toggled];
  const classes = {...defaultClasses, ...props.classes};

  return (
    <div
      className={`${classes.navToggleContainer}`}
    >
      <button
        className={`${classes.navToggleButton} ${toggled ? classes.open : ""}`}
        onClick={() => {
          toggleFunc(!toggled);
        }}
      >
        <div
          className={`${classes.navToggleBurger}`}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
        <span
          className={`${classes.navToggleMenuStatus}`}
        >
          {text}
        </span>
      </button>
    </div>
  );
}

export default NavToggle;
