import React, { useEffect } from 'react'
import { connect, MapDispatchToPropsParam } from 'react-redux'
import { UAction, State } from './../../state/redux/types';
import Layout from '../../components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import { DataLaunchType } from '../../components/Table/types';
import Table from '../../components/Table';

type AjaxPropsType = {
    reqFetchLaunches: () => void
}
type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const Launches : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
    const { history } = props as RouteComponentProps
    const { launchesData } = props as State
    const arrData = launchesData as DataLaunchType[]
    useEffect(() => {   
        const { reqFetchLaunches } = props as AjaxPropsType
        reqFetchLaunches()
    }, [])
    
    return(<Layout showBackButton history={history}>
        <Table
            dataType='launches'
            data={arrData}
            itemClickHandler={console.log}
        />
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