import React, { useEffect } from 'react'
import { connect, MapDispatchToPropsParam } from 'react-redux'
import { UAction, State } from './../../state/redux/types';
import Layout from '../../components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import { DataLaunchType, DataHistoryType } from '../../components/Table/types';
import Table from '../../components/Table';
import TableItem from '../../components/Table/TableItem';
import { renderLaunches } from '../../components/Table/index.helper';

type AjaxPropsType = {
    reqFetchLaunches: () => void
}
type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const Launches : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
    const { history } = props as RouteComponentProps
    const { launchesData } = props as State
    const arrData = launchesData as DataLaunchType[]
    const dataLength : number =  launchesData && launchesData.length
    const launchesArr = launchesData as DataLaunchType[]

    useEffect(() => {   
        const { reqFetchLaunches } = props as AjaxPropsType
        reqFetchLaunches()
    }, [])
    
    return(<Layout showBackButton history={history}>
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
const mapDispatchToProps : MamDisToProps = dispatch => {
    return {
        reqFetchLaunches: () => dispatch({ type: 'REQ_FETCH_LAUNCHES' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Launches)