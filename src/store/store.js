import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootSaga from "../actions/sagas";
import rootReducer from "../reducers";

const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
//   sagaMiddleware.run(rootSaga);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
