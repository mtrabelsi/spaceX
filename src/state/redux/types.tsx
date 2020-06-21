
export type ErrorMessageType = string | undefined | null
export type PayloadType = string | null | undefined
export type DataType = unknown

export type State = {
    data: DataType,
    isFetching: boolean,
    errorMessage: ErrorMessageType
}

export type UAction = {
    type: string,
    payload?: string | null | undefined
}