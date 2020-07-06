import {
  takeLatest, put, spawn, all, call,
} from 'redux-saga/effects';
import queryString from 'query-string';
import {
  fetchSuccessHistory, fetchSuccessLaunches, fetchError, ActionMapper,
} from '../redux/actions';
import { UAction } from '../redux/types';

function* fetchHistory() {
  try {
    yield put({ type: ActionMapper.FETCH_START });
    const res = yield fetch('https://api.spacexdata.com/v3/history');
    const json = yield res.json();
    yield put(fetchSuccessHistory(json));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

function* fetchLaunches({ payload: filter }: UAction) {
  let query : string = '';
  if (filter) {
    query = '?'.concat(queryString.stringify(filter));
  }
  try {
    yield put({ type: ActionMapper.FETCH_START });
    const res = yield fetch(`https://api.spacexdata.com/v3/launches${query}`);
    const json = yield res.json();
    yield put(fetchSuccessLaunches(json));
  } catch (error) {
    yield put(fetchError(error.message));
  }
}

function* watchHistoryFetch() {
  yield takeLatest(ActionMapper.REQ_FETCH_HISTORY, fetchHistory);
}

function* watchLaunchesFetch() {
  yield takeLatest(ActionMapper.REQ_FETCH_LAUNCHES, (action: UAction) => fetchLaunches(action));
}

export default function* rootSaga() {
  const sagas = [
    watchHistoryFetch,
    watchLaunchesFetch,
  ];
    /*
      This block will make sure that
      even one call is failed (failed ajax call)
       it will automatically
      re-enable all the saga watcher
    */
  yield all(sagas.map((saga) => spawn(function* () {
    while (true) {
      try {
        yield call(saga);
        break;
      } catch (e) {
        console.log(e);
      }
    }
  })));
}
