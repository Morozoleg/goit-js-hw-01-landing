import React, { createContext, useContext, useReducer } from "react";

import reducer from "./reducer";

const context = createContext(null);

export default ({ children }) => {
  const [state, _dispatch] = useReducer(reducer, {});
  const dispatch = action =>
    typeof action === "function" ? action(_dispatch, state) : _dispatch(action);

  return (
    <context.Provider value={[state, dispatch]}>{children}</context.Provider>
  );
};

export const useContentState = () => useContext(context);
