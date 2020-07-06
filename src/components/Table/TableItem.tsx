import React from 'react';
import { TableItemProps } from './types';
import {
  StyledTableItem,
} from './atoms';

function TableItem(props : TableItemProps) {
  const { itemData, renderData, itemClickHandler } = props;
  return (
    <StyledTableItem
      onClick={(e: React.MouseEvent) => itemClickHandler()}
    >
      {renderData()}
    </StyledTableItem>
  );
}

export default TableItem;
