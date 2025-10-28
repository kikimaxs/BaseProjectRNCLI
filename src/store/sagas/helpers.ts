import { put, call } from 'redux-saga/effects';
import { loadingActions } from '@/src/store/reducers/loading';
import { errorsActions } from '@/src/store/reducers/errors';

export function* withLoadingAndErrors<T>(
  key: string,
  worker: (...args: any[]) => any,
  ...args: any[]
): Generator<any, T | undefined, any> {
  try {
    yield put(loadingActions.startLoading(key));
    const result: T = yield call(worker, ...args);
    yield put(loadingActions.stopLoading(key));
    return result;
  } catch (e: any) {
    const message = e?.message ?? 'Unknown error';
    yield put(loadingActions.stopLoading(key));
    yield put(errorsActions.setError({ key, message }));
    return undefined;
  }
}