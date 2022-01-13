import { takeLatest, put, call } from 'redux-saga/effects';
import { TYPES } from '../actionTypes';

import auth_services from 'api/services/auth_services';
import history from 'utils/history';

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

    yield call(history.push, '/?register=true')
  } catch (e) {
    yield put({ type: TYPES.POST_SIGNUP_FAILED });
  }
}

export function* tokenChecker() {
  try {
    const response = yield call(auth_services.tokenChecker);

    if (response.data.code === 110) {
      yield put({ type: TYPES.GET_AUTHENTICATION_FAILED });
    } else {
      yield put({ type: TYPES.GET_AUTHENTICATION_SUCCESS });
    }

  } catch (e) {
    yield put({ type: TYPES.GET_AUTHENTICATION_FAILED });
  }
}

export function* changePassword({ payload }: never) {
  try {
    const response = yield call(auth_services.postChangepassowrd, payload);

    yield put({ type: TYPES.CHANGE_PASSWORD_SUCCESS, payload: response?.data?.code });
    yield call(history.push, '/?change-password=true')
  } catch (e) {
    yield put({ type: TYPES.CHANGE_PASSWORD_FAILED, payload: e?.response?.data?.code });
  }
}

export function* forgotPassword({ payload }: never) {
  try {
    yield call(auth_services.postForgotPassword, payload);

    yield put({ type: TYPES.FORGOT_PASSWORD_SUCCESS });
    yield call(history.push, '/?forgot-password=true')
  } catch (e) {
    yield put({ type: TYPES.FORGOT_PASSWORD_FAILED });
  }
}

export default function* watcher() {
  yield takeLatest(TYPES.GET_AUTHENTICATION_REQUEST, postLogin);
  yield takeLatest(TYPES.POST_SIGNUP_REQUEST, postSignup);
  yield takeLatest(TYPES.TOKEN_CHECKER_REQUEST, tokenChecker);
  yield takeLatest(TYPES.CHANGE_PASSWORD_REQUEST, changePassword);
  yield takeLatest(TYPES.FORGOT_PASSWORD_REQUEST, forgotPassword);
}