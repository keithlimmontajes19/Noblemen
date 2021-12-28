import { all } from 'redux-saga/effects';
import sagas from './authentication/sagas';

export default function* rootSaga() {
  yield all([sagas()]);
}