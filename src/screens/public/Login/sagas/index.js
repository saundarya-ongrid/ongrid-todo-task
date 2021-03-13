import { takeLatest } from "redux-saga/effects";
import * as types from '../actions';
import { loginSaga } from "./loginSaga";


export default function* getAsyncLoginDataWatcher() {
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

