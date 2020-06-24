import React, { useEffect, Dispatch } from 'react'
import { connect, MapDispatchToPropsFactory, MapDispatchToPropsParam } from 'react-redux'
import { UAction, State } from './../../state/redux/types';
import Layout from '../../components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import Table from '../../components/Table';
import { DataHistoryType } from '../../components/Table/types';

type AjaxPropsType = {
    reqFetchHistory: () => void
}
type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const History : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
    const { data } = props as State
    const { history } = props as RouteComponentProps
    const arrData = data as DataHistoryType[]
    useEffect(() => {   
        const { reqFetchHistory } = props as AjaxPropsType
        reqFetchHistory()
    }, [])

    return(<Layout showBackButton history={history}>
        <Table
            dataType='history'
            data={arrData}
            itemClickHandler={console.log}
        />
    </Layout>)
}

const mapStateToProps = (state : State) : State => ({
    ...state
})

const mapDispatchToProps : MamDisToProps = dispatch => {
    return {
        reqFetchHistory: () => dispatch({ type: 'REQ_FETCH_HISTORY' })
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(History)