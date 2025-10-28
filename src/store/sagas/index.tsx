import { all, takeLatest, put, delay } from 'redux-saga/effects';
import { appActions } from '@/src/store/reducers/app';

function* bootApp() {
  try {
    yield delay(300);
    yield put(appActions.appBootSuccess());
  } catch (e: any) {
    yield put(appActions.appBootFailure(e?.message ?? 'Boot failed'));
  }
}

function* watchAppBoot() {
  yield takeLatest(appActions.appBoot.type, bootApp);
}


export default function* rootSagas() {
  yield all([watchAppBoot()]);
}
