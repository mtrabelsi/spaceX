import React, { useEffect, useState, ReactNode } from 'react'
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
import Modal from '../../components/Modal';
import { SearchFeedback, SearchFeedbackItem } from './atoms';

const MAX_PER_PAGE = 7
type AjaxPropsType = {
    reqFetchLaunches: (filter?: USearchFilter) => void,
    searchByMissionName: (missionName: string) => void
}

type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const Launches : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
    const [filter, setFilter] = useState<USearchFilter>({ limit: MAX_PER_PAGE, offset: 0 })
    const [activePage, setActivePage] = useState<number>(0)
    const [missionName, setMissionName] = useState<string>('')
    const [shouldReload, setReload] = useState<boolean>(false)
    const [isModalOpen, changeModal] = useState<boolean>(false)
    // this is rendered when user click on a row
    const [renderResult, setRenderResult] = useState<ReactNode>({})
    const { history } = props as RouteComponentProps
    const { searchByMissionName, reqFetchLaunches } = props as AjaxPropsType
    const { launchesData, filtredLaunchesData } = props as State
    const dataLength : number =  filtredLaunchesData && filtredLaunchesData.length
    const launchesArr = launchesData as DataLaunchType[]
    const filtredLaunchesArr = filtredLaunchesData as DataLaunchType[]

    const handleMissionChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        const newName : string = e.target.value
        setMissionName(newName)
        searchByMissionName(newName)
    }
    const cleanupSearch = () => setMissionName('')
    //we trigger search req in memory only when missionName changes
    useEffect(() => {   
        searchByMissionName(missionName)
    }, [missionName])
    //we trigger fetch everytime the filter changes
    useEffect(() => {   
        const { limit, offset } =  filter
        reqFetchLaunches({
            limit,
            offset
        })
    }, [filter])
    const loader = <div>Loading ...</div>;

    return(<Layout 
            showBackButton 
            history={history}
            title="Launches View"
        >
        {isModalOpen && <Modal 
            title="Modal view"
            history={history} 
            onSubmitHandle={() => changeModal(false)}
            onCloseHandle={() => changeModal(false)}
        >
            {renderResult}
        </Modal>}
        <InputSearch 
            placeholder="Filter by Mission name"
            rightIconClickHandler={cleanupSearch}
            value={missionName}
            onChange={handleMissionChange}
        />

        <SearchFeedback>
            <SearchFeedbackItem><b>{launchesData.length}</b> Launches</SearchFeedbackItem>
            <SearchFeedbackItem>Page {activePage+1}</SearchFeedbackItem>
        </SearchFeedback>


        <Table
            dataType='launches'
            abstractData={filtredLaunchesArr}
            itemClickHandler={console.log}
        >
            {dataLength > 0 && filtredLaunchesArr.map((d: DataLaunchType) => (
                <TableItem
                    key={d.flight_number}
                    dataType='launches'
                    renderData={() => renderLaunches(d)}
                    itemData={d} 
                    itemClickHandler={() => {
                        changeModal(true);
                        setRenderResult(
                            renderLaunches(d)
                        );
                    }} 
                />
            ))}
        </Table>
        <Pagination 
            itemsCountPerPage={MAX_PER_PAGE}
            lastQueriedLength={filtredLaunchesArr.length}
            limit={filter.limit}
            offset={filter.offset}
            setFilter={(f: USearchFilter) => {
                setFilter(f)
            }}
            activePage={activePage}
            setActivePage={setActivePage}
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