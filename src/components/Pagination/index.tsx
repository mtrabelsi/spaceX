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
        rightLabel,
        activePage,
        setActivePage
    }  = props
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
            onClick={(e: React.MouseEvent) => handlePageChange(activePage-1)}
        >
            {(leftLabel || 'Prev').toUpperCase()}
        </LeftNavigator>
        <RightNavigator 
            start={false} 
            onClick={(e: React.MouseEvent) => handlePageChange(activePage+1)}
            disabled={lastQueriedLength < itemsCountPerPage}
        >
            {(rightLabel || 'Next').toUpperCase()}
        </RightNavigator>
    </PaginationWrapper>)
}

export default PaginationC