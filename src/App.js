import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { ActionComponent } from "./components/ActionComponent";
import OutputComponent from "./components/OutputComponent";
import { persistor, store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div>Ongrid Home.</div>
        <ActionComponent />
        <OutputComponent />
      </PersistGate>
    </Provider>
  );
};
