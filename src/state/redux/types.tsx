export type ErrorMessageType = string | undefined | null
export type PayloadType = string | null | undefined
export type DataType = unknown

export type State = {
    historyData: unknown[],
    launchesData: unknown[],
    filtredLaunchesData: unknown[],
    isFetching: boolean,
    errorMessage: ErrorMessageType
}

export type UAction = {
    type: 'FETCH_SUCCESS_HISTORY' |
            'FETCH_SUCCESS_LAUNCHES' |
            'FETCH_ERROR' |
            'FETCH_START' |
            'REQ_FETCH_LAUNCHES' |
            'REQ_FETCH_HISTORY' |
            'SEARCH_LAUNCHES_BY_MISSION',
    payload?: unknown
}

export type USearchFilter = {
    limit: number,
    offset: number,
    start?: string,
    end?: string
}
