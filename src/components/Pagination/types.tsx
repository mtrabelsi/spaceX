import { USearchFilter } from "../../state/redux/types"

export type SetFilterType = (f : USearchFilter) => void

export type PaginationCPropType = {
    itemsCountPerPage: number,
    limit: number, 
    offset:number, 
    lastQueriedLength: number,
    leftLabel?: string,
    rightLabel?: string,
    setFilter: SetFilterType
}

export type PageChangeSignature = (n: number) => void