
import React from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";

type ReduxProviderProps = {
  children: React.ReactNode;
};
export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
