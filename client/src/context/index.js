import React from "react";
import reducer, { initialState } from "./reducer";

const Context = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Context;
