import { USearchFilter } from "../../state/redux/types"

export type SetFilterType = (f : USearchFilter) => void

export type PaginationCPropType = {
    itemsCountPerPage: number,
    limit: number, 
    offset:number, 
    lastQueriedLength: number,
    leftLabel?: string,
    rightLabel?: string,
    setFilter: SetFilterType,
    activePage: number,
    setActivePage: (n: number) => void
}

export type PageChangeSignature = (n: number) => void