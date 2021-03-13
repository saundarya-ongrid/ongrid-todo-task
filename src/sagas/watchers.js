import { takeLatest } from "redux-saga/effects";
// import axios from "axios";
import * as types from '../actions';
import { loginSaga, logout } from "./authenticationSaga";


// const runOurAction = function* () {
//   let remoteData;
//   yield axios.get("https://httpbin.org/json").then((resp) => {
//     remoteData = resp.data;
//   });
//   yield put({ type: "SET_DATA", payload: remoteData });
// };
export default function* getAsyncDataWatcher() {
  // yield takeLatest("GET_ASYNC_DATA", runOurAction);
  yield takeLatest(types.LOGIN_USER, loginSaga);
  yield takeLatest(types.LOG_OUT, logout);
}

