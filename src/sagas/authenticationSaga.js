import { put } from 'redux-saga/effects';


import * as types from '../actions'



export function* logout() {
    yield put({ type: types.LOG_OUT_USER })
}