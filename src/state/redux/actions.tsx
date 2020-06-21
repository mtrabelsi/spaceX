import {
    DataType,
    ErrorMessageType
} from './types'

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