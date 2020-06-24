import React, { useEffect, useState } from 'react'
import { connect, MapDispatchToPropsParam, useSelector } from 'react-redux'
import { UAction, State } from './../../state/redux/types';
import Layout from '../../components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import { DataLaunchType, DataHistoryType } from '../../components/Table/types';
import Table from '../../components/Table';
import TableItem from '../../components/Table/TableItem';
import { renderLaunches } from '../../components/Table/index.helper';
import InputSearch from '../../components/InputSearch';

type AjaxPropsType = {
    reqFetchLaunches: () => void,
    searchByMissionName: (missionName: string) => void
}
type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const Launches : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
    const [missionName, setMissionName] = useState<string>('')
    const { history } = props as RouteComponentProps
    const { searchByMissionName } = props as AjaxPropsType
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

    useEffect(() => {   
        const { reqFetchLaunches } = props as AjaxPropsType
        reqFetchLaunches()
    }, [])
    
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
                />)
            )}
        </Table>
    </Layout>)
}

const mapStateToProps = (state : State ) : State => ({
    ...state
})
const mapDispatchToProps : MamDisToProps = (dispatch : (p: UAction) => void) => {
    return {
        reqFetchLaunches: () => dispatch({ type: 'REQ_FETCH_LAUNCHES' }),
        searchByMissionName: (missionName) => dispatch({ type: 'SEARCH_LAUNCHES_BY_MISSION', payload: missionName })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Launches)