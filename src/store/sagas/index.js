import { all } from "redux-saga/effects";
import getAsyncTodoDataWatcher from "../../screens/private/Todos/sagas";
import getAsyncLoginDataWatcher from "../../screens/public/Login/sagas";

export default function* rootSaga() {
  yield all([getAsyncLoginDataWatcher(), getAsyncTodoDataWatcher()]);
}
