import createContext from "../utilities/createContext";
export const DEFAULT_LANG = 'uk';

export const [Provider, useLanguageState] = createContext(DEFAULT_LANG);