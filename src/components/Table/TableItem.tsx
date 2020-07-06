import React from 'react';
import { TableItemProps } from './types';
import {
  StyledTableItem,
} from './atoms';

function TableItem(props : TableItemProps) {
  const { renderData, itemClickHandler } = props;
  return (
    <StyledTableItem
      onClick={() => itemClickHandler()}
    >
      {renderData()}
    </StyledTableItem>
  );
}

export default TableItem;
