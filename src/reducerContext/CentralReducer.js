import React, { createContext, useContext, useReducer } from "react";
import reducer from "./app/Reducer";
import { states } from "./app/states";
const CentralContext = createContext({});
const CentralReducer = ({ children }) => {
  const [appStates, dispatch] = useReducer(reducer, states);
  return (
    <CentralContext.Provider
      value={{
        // states will be here
        appStates,
        // dispatch will be here
        dispatch,
      }}
    >
      {children}
    </CentralContext.Provider>
  );
};
export { CentralContext, CentralReducer };
export const useCentralContext = () => {
  return useContext(CentralContext);
};
