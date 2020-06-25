import React, { useEffect, useState } from 'react'
import { connect, MapDispatchToPropsParam, useSelector } from 'react-redux'
import { UAction, State, USearchFilter } from './../../state/redux/types';
import Layout from '../../components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import { DataLaunchType, DataHistoryType } from '../../components/Table/types';
import Table from '../../components/Table';
import TableItem from '../../components/Table/TableItem';
import { renderLaunches } from '../../components/Table/index.helper';
import InputSearch from '../../components/InputSearch';
import Pagination from '../../components/Pagination';

type AjaxPropsType = {
    reqFetchLaunches: (filter?: USearchFilter) => void,
    searchByMissionName: (missionName: string) => void
}

type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const Launches : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
    const [filter, setFilter] = useState<USearchFilter>({ limit: 7, offset: 0 })
    const [missionName, setMissionName] = useState<string>('')
    const { history } = props as RouteComponentProps
    const { searchByMissionName, reqFetchLaunches } = props as AjaxPropsType
    const { launchesData } = props as State
    const arrData = launchesData as DataLaunchType[]
    const dataLength : number =  launchesData && launchesData.length
    const launchesArr = launchesData as DataLaunchType[]
    const handleMissionChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        const newName : string = e.target.value
        setMissionName(newName)
    }
    const handleSearchByMissionName = () => {
        searchByMissionName(missionName)
    }
    
    //we trigger fetch everytime the filter changes
    useEffect(() => {   
        const { limit, offset } =  filter
        reqFetchLaunches({
            limit,
            offset
        })
    }, [filter])
    
    const loader = <div>Loading ...</div>;

    return(<Layout showBackButton history={history}>
        <InputSearch 
            placeholder="Filter by Mission name"
            rightIconClickHandler={handleSearchByMissionName}
            value={missionName}
            onChange={handleMissionChange}
        />

        <Table
            dataType='launches'
            abstractData={arrData}
            itemClickHandler={console.log}
        >
            {dataLength > 0 && launchesArr.map((d: DataLaunchType) => (
                <TableItem
                    key={d.flight_number}
                    dataType='launches'
                    renderData={() => renderLaunches(d)}
                    itemData={d} 
                    itemClickHandler={console.log} 
                />
            ))}
        </Table>
        <Pagination 
            itemsCountPerPage={7}
            lastQueriedLength={arrData.length}
            limit={filter.limit}
            offset={filter.offset}
            setFilter={(f: USearchFilter) => {
                setFilter(f)
            }}
        />
    </Layout>)
}

const mapStateToProps = (state : State ) : State => ({
    ...state
})

const mapDispatchToProps : MamDisToProps = (dispatch : (p: UAction) => void) => {
    return {
        reqFetchLaunches: (filter) => dispatch({ type: 'REQ_FETCH_LAUNCHES', payload: filter }),
        searchByMissionName: (missionName) => dispatch({ type: 'SEARCH_LAUNCHES_BY_MISSION', payload: missionName })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Launches)