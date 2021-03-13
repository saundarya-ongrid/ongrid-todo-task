import { takeLatest } from "redux-saga/effects";
import * as types from '../actions';
import {  logout } from "./authenticationSaga";


export default function* getAsyncDataWatcher() {
  yield takeLatest(types.LOG_OUT, logout);
}

