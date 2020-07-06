import React from 'react';
import PropTypes from 'prop-types';
import { RouteComponentProps } from 'react-router-dom';
import { DataHistoryType, DataLaunchType } from './types';

type TableProps = {
    dataType: 'history' | 'launches',
    abstractData: Array<DataHistoryType | DataLaunchType>,
    itemClickHandler: (id: string) => void
}

const Table : React.FC<RouteComponentProps | TableProps> = (props) => {
  const { dataType, abstractData, itemClickHandler } = props as TableProps;
  const dataLength : number = abstractData && abstractData.length;

  return (
    <section>

      {props.children}

      {dataLength === 0
        && <div>No Item found!</div>}

    </section>
  );
};

Table.propTypes = {
  abstractData: PropTypes.array,
};

Table.defaultProps = {
  abstractData: [],
};

export default Table;
