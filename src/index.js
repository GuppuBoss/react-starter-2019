import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import { App } from "./pages";
import "bootstrap/scss/bootstrap.scss";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
