import { all } from 'redux-saga/effects';
import authSaga from './authentication/sagas';
import alertSaga from './alert/sagas';

export default function* rootSaga() {
  yield all([authSaga(), alertSaga()]);
}