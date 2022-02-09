import {
  ADD_CONTENT,
  SET_CONTACT_FORM_SUBMISSION_FLAG,
  SET_ERROR
} from "./actionTypes";
import storage from "../../utilities/storage";
import http from "../../utilities/http";

export const addContent = (name, content, lang) => {
  return {
    type: ADD_CONTENT,
    payload: { name, content, lang }
  };
};

export const setError = (name, error) => ({
  type: SET_ERROR,
  payload: { name, error }
});

export const setContactFormSubmissionFlag = (state = false) => ({
  type: SET_CONTACT_FORM_SUBMISSION_FLAG,
  payload: state
});

export const fetchContent = ({
  url,
  name,
  lang,
  parser,
  expires
}) => dispatch => {
  const isMultiple = Array.isArray(url);
  const urlList = isMultiple ? url : [url];
  const stored = storage.getItem(name) || {};
  if (!stored[lang]) {
    Promise.all(
      urlList.map(url =>
        http.get(url, { params: { lang } }).then(({ data }) => data)
      )
    )
      .then(data => {
        data = isMultiple ? data : data[0];
        const parsed = parser(data, lang);
        dispatch(addContent(name, parsed, lang));
        storage.setItem(name, { ...stored, [lang]: parsed }, expires);
      })
      .catch(err => {
        dispatch(setError(name, err));
      });
  } else {
    dispatch(addContent(name, stored[lang], lang));
  }
};
