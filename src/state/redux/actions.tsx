import {
    DataType,
    ErrorMessageType
} from './types'

export const reqFetchHistory = () => ({
    type: "REQ_FETCH_HISTORY"
});

export const fetchLaunches = () => ({
    type: "REQ_FETCH_LAUNCHES"
});

export const fetchStarted = () => ({
    type: "FETCH_START"
});

export const fetchSuccess = (tasks: DataType) => ({
    type: "FETCH_SUCCESS",
    payload: tasks
});
export const fetchError = (errorMessage: ErrorMessageType) => ({
    type: "FETCH_ERROR",
    payload: errorMessage
});