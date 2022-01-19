import { takeLatest, put, call } from 'redux-saga/effects';
import { TYPES } from '../actionTypes';
import onboarding_serive from 'api/services/onboaring_service';

export function* postOnboarding({ payload }: never) {
  try {
    const response = yield call(onboarding_serive.postOnboardingYou, payload);

    if (response.data.code === 110) {
      yield put({ type: TYPES.POST_ONBOARDING_YOU_FAILED, payload: response.data.data });
    } else {
      yield put({ type: TYPES.POST_ONBOARDING_YOU_SUCCESS, payload: response.data.data });
    }

  } catch (e) {
    yield put({ type: TYPES.POST_ONBOARDING_YOU_FAILED, payload: e.response.data });
  }
}

export default function* watcher() {
  yield takeLatest(TYPES.POST_ONBOARDING_YOU_REQUEST, postOnboarding);
}