import { all } from "redux-saga/effects";
import getAsyncDataWatcher from "./watchers";


export default function* rootSaga() {
  yield all([getAsyncDataWatcher()]);
}
