import React, { useEffect, Dispatch } from 'react'
import { connect, MapDispatchToPropsFactory, MapDispatchToPropsParam } from 'react-redux'
import { UAction, State } from './../../state/redux/types';
import Layout from '../../components/Layout';
import { RouteComponentProps } from 'react-router-dom';
import Table from '../../components/Table';
import { DataHistoryType } from '../../components/Table/types';
import TableItem from '../../components/Table/TableItem';
import { renderHistory } from '../../components/Table/index.helper';

type AjaxPropsType = {
    reqFetchHistory: () => void
}
type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const History : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
    const { historyData } = props as State
    const { history } = props as RouteComponentProps
    const arrData = historyData as DataHistoryType[]
    const dataLength : number =  historyData && historyData.length
    const historyArr = historyData as DataHistoryType[] 
    useEffect(() => {   
        const { reqFetchHistory } = props as AjaxPropsType
        reqFetchHistory()
    }, [])

    return(<Layout showBackButton history={history}>
        <Table
            dataType='history'
            abstractData={arrData}
            itemClickHandler={console.log}
        >
            {dataLength > 0 && historyArr.map((d: DataHistoryType) => (
                <TableItem
                    dataType='history'
                    key={d.id}
                    renderData={() => renderHistory(d)}
                    itemData={d} 
                    itemClickHandler={console.log} 
                />))
            }
        </Table>
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