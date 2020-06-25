import React from 'react'
import { DataHistoryType, TableItemProps, DataLaunchType } from './types'
import { 
    StyledTableItem, 
} from './atoms';

function TableItem(props : TableItemProps) {
    const { itemData, renderData, itemClickHandler } = props
    return (<StyledTableItem 
            onClick={(e: React.MouseEvent) => itemClickHandler(renderData)}
        >
        {renderData()}
    </StyledTableItem>)
}

export default TableItem