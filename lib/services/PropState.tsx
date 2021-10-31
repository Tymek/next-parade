import { createContext, FC, useContext, useState } from "react";

const PropStateContext = createContext<ReturnType<typeof useState> | []>([]);

export const PropStateProvider: FC = ({ children }) => {
  const state = useState({});
  return (
    <PropStateContext.Provider value={state}>
      {children}
    </PropStateContext.Provider>
  );
};
export const PropStateConsumer = PropStateContext.Consumer;
export const usePropState = () => useContext(PropStateContext);

export default PropStateContext;
