import {
    DataType,
    ErrorMessageType,
    USearchFilter
} from './types'

export const reqFetchHistory = () => ({
    type: "REQ_FETCH_HISTORY"
});

export const fetchLaunches = (filter? : USearchFilter) => ({
    type: "REQ_FETCH_LAUNCHES",
    payload: filter
});

export const fetchStarted = () => ({
    type: "FETCH_START"
});

export const fetchSuccessHistory = (input: DataType) => ({
    type: "FETCH_SUCCESS_HISTORY",
    payload: input
});

export const fetchSuccessLaunches = (input: DataType) => ({
    type: "FETCH_SUCCESS_LAUNCHES",
    payload: input
});

export const searchLaunchesByMission = (missionName: string) => ({
    type: "SEARCH_LAUNCHES_BY_MISSION",
    payload: missionName
});

export const fetchError = (errorMessage: ErrorMessageType) => ({
    type: "FETCH_ERROR",
    payload: errorMessage
});