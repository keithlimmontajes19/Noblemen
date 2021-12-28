import {takeLatest, put, call} from 'redux-saga/effects';


export function* getAuth() {
  try {
    yield put({type: 'GET_LIST_SUCCESS', payload: []});
  } catch (e) {
    yield put({type: 'GET_LIST_FAILED'});
  }
}


export default function* watcher() {
  yield takeLatest('GET_LIST_REQUEST', getAuth);
}