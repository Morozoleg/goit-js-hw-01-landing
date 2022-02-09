import storage from "./storage";
import http from "./http";
import { useEffect } from "react";
import { useLanguageState } from "../Context/language";
import useStateWithDeps from './useStateWithDeps'

export default ({
  url,
  parser = (data) => data,
  name,
  expires,
  onlyData = true,
}) => {
  const isMultiple = Array.isArray(url);
  const urlList = isMultiple ? url : [url];
  const [lang] = useLanguageState();
  const stored = storage.getItem(name) || {};
  const [{ fetchedContent, error }, setState] = useStateWithDeps({
    fetchedContent: stored,
    error: null,
  }, [name, url]);

  const content = fetchedContent[lang];
  useEffect(() => {
    if (content === undefined && !error) {
      Promise.all(
        urlList.map((url) =>
          http
            .get(url, { params: { lang } })
            .then((res) => (onlyData ? res.data : res))
        )
      )
        .then((data) => {
          data = isMultiple ? data : data[0];
          const parsed = parser(data, lang) || null;
          const newContent = { ...fetchedContent, [lang]: parsed };
          setState({ fetchedContent: newContent, error: null });
          storage.setItem(name, newContent, expires);
        })
        .catch((err) => {
          setState((prev) => ({ ...prev, error: err }));
        });
    } else if (content && error) {
      setState(
        (prev) => (
          { ...prev, error: null }
        )
      );
    }
  }, [content, error, urlList, lang, onlyData, isMultiple, parser, fetchedContent, name, expires, setState]);
  return [content, error, content === undefined && !error];
};
