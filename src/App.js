import React from "react";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import rootSaga from "./actions/sagas";
import { ActionComponent } from "./components/ActionComponent";
import OutputComponent from "./components/OutputComponent";

export const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <div>Ongrid Home.</div>
      <ActionComponent />
      <OutputComponent />
    </Provider>
  );
};
