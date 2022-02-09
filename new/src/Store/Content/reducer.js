import {
  ADD_CONTENT,
  SET_ERROR,
  SET_CONTACT_FORM_SUBMISSION_FLAG
} from "./actionTypes";

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_CONTENT: {
      const { lang, name, content } = payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          [lang]: content
        }
      };
    }

    case SET_ERROR: {
      const { name, error } = payload;
      return {
        ...state,
        [name]: {
          ...state[name],
          error
        }
      };
    }

    case SET_CONTACT_FORM_SUBMISSION_FLAG:
      return {
        ...state,
        contactFormSuccess: payload
      };

    default:
      return state;
  }
};
