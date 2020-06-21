import { takeLatest, put } from "redux-saga/effects";
import { fetchStarted, fetchSuccess, fetchError } from './../redux/actions'

function * fetchTasksSaga() {
    try {
        const taskResponse = yield fetch("https://api.spacexdata.com/v3/history")
        const tasks = yield taskResponse.json()
        yield put(fetchSuccess(tasks));
    } catch (error) {
        yield put(fetchError(error.message));
    }
}

export default function * watchFetchTasksSaga() {
    yield takeLatest("FETCH_START", fetchTasksSaga)
}