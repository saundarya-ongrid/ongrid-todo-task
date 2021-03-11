import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
const runOurAction = function* () {
  let remoteData;
  yield axios.get("https://httpbin.org/json").then((resp) => {
    //   console.log('response',resp.data)

    remoteData = resp.data;
  });
  yield put({ type: "SET_DATA", payload: remoteData });
};
export default function* getAsyncDataWatcher() {
  yield takeLatest("GET_ASYNC_DATA", runOurAction);
}

