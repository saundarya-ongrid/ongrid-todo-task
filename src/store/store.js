import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from "history";
import rootSaga from "../sagas";
export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//   sagaMiddleware.run(rootSaga);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

const store = createStore(persistedReducer, applyMiddleware(routerMiddleware(history),sagaMiddleware));
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
