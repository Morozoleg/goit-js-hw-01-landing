import React from "react";
import classes from "./LangSelector.module.less";
import { useLanguageState } from "../../../Context/language";
const availableLanguages = [
  {
    lang: "ru",
    label: "ru"
  },
  {
    lang: "uk",
    label: "ua"
  },
  {
    lang: "en",
    label: "en"
  }
];
function LangSelector({ className, activeClassName, onLangChange }) {
  const [stateLang, setLang] = useLanguageState();
  return (
    <div className={`${classes.LangSelector} ${className || ""}`}>
      <ul>
        {availableLanguages.map(({ lang, label }) => {
          return (
            <li key={lang}>
              <a
                onClick={() => {
                  setLang(lang);
                  typeof onLangChange === "function" && onLangChange();
                }}
                className={
                  lang === stateLang ? activeClassName || classes.active : ""
                }
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LangSelector;
