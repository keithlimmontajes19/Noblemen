import { takeLatest, put, call } from 'redux-saga/effects';
import { TYPES } from '../actionTypes';
import auth_services from 'api/services/auth_services';


export function* postLogin({ payload }: never) {
  try {
    const response = yield call(auth_services.postLogin, payload);
    sessionStorage.setItem('accessToken', response.data.data)

    yield put({ type: TYPES.GET_AUTHENTICATION_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: TYPES.GET_AUTHENTICATION_FAILED, payload: e.response.data });
  }
}

export function* postSignup({ payload }: never) {
  try {
    yield call(auth_services.postSignup, payload);
    yield put({ type: TYPES.POST_SIGNUP_SUCCESS });
  } catch (e) {
    yield put({ type: TYPES.POST_SIGNUP_FAILED });
  }
}

export default function* watcher() {
  yield takeLatest(TYPES.GET_AUTHENTICATION_REQUEST, postLogin);
  yield takeLatest(TYPES.POST_SIGNUP_REQUEST, postSignup);
}