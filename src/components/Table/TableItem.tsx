import React from 'react'
import { DataHistoryType, TableItemProps, DataLaunchType } from './types'
import { 
    StyledTableItem, 
    Title, 
    EventDateUTC, 
    EventDateUnix, 
    FlightNumber, 
    Details, 
    Links,
    DataWrapper 
} from './atoms';

function TableItem(props : TableItemProps) {
    const { itemData, renderData, dataType, itemClickHandler } = props

    return (<StyledTableItem onClick={(e: React.MouseEvent) => itemClickHandler('itemClickHandler')}>
        {renderData()}
    </StyledTableItem>)
}

export default TableItem