import React from "react";

export default init => {
  const context = React.createContext(null);

  const Provider = ({ children }) => {
    return (
      <context.Provider value={React.useState(init)}>
        {children}
      </context.Provider>
    );
  };

  const useContext = () => React.useContext(context);

  return [Provider, useContext];
};
