import { takeLatest, put, spawn, all, call } from "redux-saga/effects";
import { fetchSuccess, fetchError } from './../redux/actions'

function * fetchHistory() {
    try {
         
        yield put({type: "FETCH_START"});
        const res = yield fetch("https://api.spacexdata.com/v3/history");
        const json = yield res.json();
        yield put(fetchSuccess(json));
    } catch (error) {
        yield put(fetchError(error.message));
    }
}

function * fetchLaunches() {
    try {
        yield put({type: "FETCH_START"});
        const res = yield fetch("https://api.spacexdata.com/v3/launches");
        const json = yield res.json();
        yield put(fetchSuccess(json));
    } catch (error) {
        yield put(fetchError(error.message));
    }
}


function * watchHistoryFetch() {
    yield takeLatest("REQ_FETCH_HISTORY", fetchHistory)
}

function * watchLaunchesFetch() {
    yield takeLatest("REQ_FETCH_LAUNCHES", fetchLaunches)
}

export default function* rootSaga () {
    const sagas = [
        watchHistoryFetch,
        watchLaunchesFetch
    ];
  
    yield all(sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }))
    );
}