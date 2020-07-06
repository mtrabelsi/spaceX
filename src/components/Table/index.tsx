import React from 'react';
import { DataHistoryType, DataLaunchType } from './types';

type TableProps = {
    dataType: 'history' | 'launches',
    abstractData: Array<DataHistoryType | DataLaunchType>,
    itemClickHandler: (id: string) => void
}

const Table : React.FC<TableProps> = (props) => {
  const { abstractData, children } = props;
  const dataLength : number = abstractData && abstractData.length;

  return (
    <section>

      {children}

      {dataLength === 0
        && <div>No Item found!</div>}

    </section>
  );
};

Table.defaultProps = {
  abstractData: [],
};

export default Table;
