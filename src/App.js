import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import routes from "./Navigation/routes";
import { history, persistor, store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}><>{routes}</></ConnectedRouter>
      </PersistGate>
    </Provider>
  );
};
