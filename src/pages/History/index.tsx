import React, { useEffect } from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { UAction, State, UActionLabels } from '../../state/redux/types';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { DataHistoryType } from '../../components/Table/types';
import TableItem from '../../components/Table/TableItem';
import { renderHistory } from '../../components/Table/index.helper';
import { ActionMapper } from '../../state/redux/actions';

type AjaxPropsType = {
    reqFetchHistory: () => void
}
const History : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
  const { historyData } = props as State;
  const { history, location, match } = props as RouteComponentProps;
  const arrData = historyData as DataHistoryType[];
  const dataLength : number = historyData && historyData.length;
  const historyArr = historyData as DataHistoryType[];
  useEffect(() => {
    const { reqFetchHistory } = props as AjaxPropsType;
    reqFetchHistory();
  }, []);

  return (
    <Layout
      showBackButton
      title="History View"
      history={history}
      location={location}
      match={match}
    >
      <Table
        dataType="history"
        abstractData={arrData}
        itemClickHandler={console.log}
      >
        {dataLength > 0 && historyArr.map((d: DataHistoryType) => (
          <TableItem
            dataType="history"
            key={d.id}
            renderData={() => renderHistory(d)}
            itemData={d}
            itemClickHandler={console.log}
          />
        ))}
      </Table>
    </Layout>
  );
};

const mapStateToProps = (state : State) : State => ({
  ...state,
});

type HistoryDispatchType = (p: UAction) => void
type MapDispatchType = MapDispatchToPropsParam<{ reqFetchHistory: () => void; }, {}>

const mapDispatchToProps = (dispatch : HistoryDispatchType) => ({
  reqFetchHistory: () => dispatch({
    type: ActionMapper.REQ_FETCH_HISTORY as UActionLabels,
  }),
});

export default connect(mapStateToProps, mapDispatchToProps as MapDispatchType)(History);
