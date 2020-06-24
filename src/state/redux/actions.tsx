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

export const fetchSuccessHistory = (tasks: DataType) => ({
    type: "FETCH_SUCCESS_HISTORY",
    payload: tasks
});

export const fetchSuccessLaunches = (tasks: DataType) => ({
    type: "FETCH_SUCCESS_LAUNCHES",
    payload: tasks
});

export const fetchError = (errorMessage: ErrorMessageType) => ({
    type: "FETCH_ERROR",
    payload: errorMessage
});