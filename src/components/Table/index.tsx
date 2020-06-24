import React from 'react'
import PropTypes from 'prop-types';
import { DataHistoryType, DataLaunchType } from './types'
import TableItem from './TableItem'
import { renderHistory, renderLaunches } from './index.helper';

type TableProps = {
    dataType: 'history' | 'launches',
    data: Array<DataHistoryType | DataLaunchType>,
    itemClickHandler: (id: string) => void
}

function Table(props : TableProps) {
    const { dataType, data, itemClickHandler } = props
    const dataLength : number =  data && data.length
    const historyArr = data as DataHistoryType[] 
    const launchesArr = data as DataLaunchType[]
    return (<section>
        {(dataType === 'history') && dataLength > 0 && historyArr.map((d: DataHistoryType) => (<TableItem
            key={d.id}
            renderData={() => renderHistory(d)}
            dataType={dataType}
            itemData={d} 
            itemClickHandler={itemClickHandler} 
        />))}
        {(dataType === 'launches') && dataLength > 0 && launchesArr.map((d: DataLaunchType) => (<TableItem
            key={d.flight_number}
            renderData={() => renderLaunches(d)}
            dataType={dataType}
            itemData={d} 
            itemClickHandler={itemClickHandler} 
        />))}
        {dataLength === 0 && 
        <div>No Item found!</div>}
    </section>)
}

Table.propTypes = {
    data: PropTypes.array
};

Table.defaultProps = {
    data: []
};
  
export default Table