import { takeLatest } from "redux-saga/effects";
import { todoSaga } from "./todoSaga";
import * as types from '../actions';

export default function* getAsyncTodoDataWatcher() {
    yield takeLatest(types.TODO, todoSaga);
  }
  


