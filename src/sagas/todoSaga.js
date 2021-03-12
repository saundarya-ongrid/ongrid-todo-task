import { put, call } from 'redux-saga/effects';
import * as types from '../actions'
import { defaultApiCall } from '../services/defaultApiCall';

export function* todoSaga(payload) {
    try {
      const response = yield call(defaultApiCall, payload);
      yield put({ type: types.TODO_SUCCESS, response })
    
    } catch(error) {
      yield put({ type: types.TODO_ERROR, error })
    }
  }