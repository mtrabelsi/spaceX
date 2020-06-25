import React, { useState } from 'react'
import {
    RightNavigator,
    LeftNavigator,
    PaginationWrapper
} from './atoms'
import { PaginationCPropType, PageChangeSignature } from './types'

function PaginationC(props: PaginationCPropType) {
    const { 
        limit, 
        offset, 
        setFilter, 
        lastQueriedLength,
        itemsCountPerPage,
        leftLabel,
        rightLabel
    }  = props
    const [activePage, setActivePage] = useState<number>(0)
    const handlePageChange : PageChangeSignature = (newPage) => {
        setFilter({
            limit,
            offset: newPage * limit
        })
        setActivePage(newPage)
    }
    return (<PaginationWrapper>
        <LeftNavigator 
            disabled={activePage === 0}
            start={true}
            onClick={e => handlePageChange(activePage-1)}
        >
            {(leftLabel || 'Prev').toUpperCase()}
        </LeftNavigator>
        <RightNavigator 
            start={false} 
            onClick={e => handlePageChange(activePage+1)}
            disabled={lastQueriedLength < itemsCountPerPage}
        >
            {(rightLabel || 'Next').toUpperCase()}
        </RightNavigator>
    </PaginationWrapper>)
}

export default PaginationC