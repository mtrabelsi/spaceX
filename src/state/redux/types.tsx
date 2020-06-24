
export type ErrorMessageType = string | undefined | null
export type PayloadType = string | null | undefined
export type DataType = unknown

export type State = {
    historyData: unknown[],
    launchesData: unknown[],
    isFetching: boolean,
    errorMessage: ErrorMessageType
}

export type UAction = {
    type:   'FETCH_SUCCESS_HISTORY' |
            'FETCH_SUCCESS_LAUNCHES' |
            'FETCH_ERROR' |
            'FETCH_START' |
            'REQ_FETCH_LAUNCHES' |
            'REQ_FETCH_HISTORY',
    payload?: unknown
}