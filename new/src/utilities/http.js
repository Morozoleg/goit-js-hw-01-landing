import axios from "axios";
import { DEFAULT_LANG } from "../Context/language";

export const BASE_URL = "https://back.planeta-web.co.ua";

const http = axios.create({
  baseURL: BASE_URL,
});

http.interceptors.request.use((config) => {
  if (config.method.toLowerCase() === "get") {
    config.params = {
      ...config.params,
      _format: "json",
    };

    const { lang } = config.params;

    if (lang && lang !== DEFAULT_LANG) {
      config.url = `/${lang + config.url}`;
    }
  }

  return config;
});

export default http;
