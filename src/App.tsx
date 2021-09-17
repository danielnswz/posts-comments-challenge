import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { CustomRouter } from "./routes";
import { store } from "./store";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <CustomRouter />
    </Provider>
  );
};
