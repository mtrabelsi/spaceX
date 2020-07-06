import React, {
  useEffect, useState, ReactNode,
} from 'react';
import { connect, MapDispatchToPropsParam } from 'react-redux';
import { Calendar } from 'grommet';
import moment from 'moment';
import { RouteComponentProps } from 'react-router-dom';
import { UAction, State, USearchFilter } from '../../state/redux/types';
import Layout from '../../components/Layout';
import { DataLaunchType, DataHistoryType } from '../../components/Table/types';
import Table from '../../components/Table';
import TableItem from '../../components/Table/TableItem';
import { renderLaunches } from '../../components/Table/index.helper';
import InputSearch from '../../components/InputSearch';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';
import { SearchFeedback, SearchFeedbackItem, FiltersWraper } from './atoms';
import { Button } from '../../components/Button/atoms';
import { formatDateLayout } from '../../utils';

const MAX_PER_PAGE = 7;
type AjaxPropsType = {
    reqFetchLaunches: (filter?: USearchFilter) => void,
    searchByMissionName: (missionName: string) => void
}

type MamDisToProps = MapDispatchToPropsParam<AjaxPropsType, {}>

const Launches : React.FC<State | AjaxPropsType | RouteComponentProps> = (props) => {
  const [filter, setFilter] = useState<USearchFilter>({
    limit: MAX_PER_PAGE, offset: 0, start: '2010-06-16', end: '2015-06-25',
  });
  const [activePage, setActivePage] = useState<number>(0);
  const [missionName, setMissionName] = useState<string>('');
  const [shouldReload, setReload] = useState<boolean>(false);
  const [isModalOpen, changeModal] = useState<boolean>(false);
  // this is rendered when user click on a row
  const [renderResult, setRenderResult] = useState<ReactNode>({});
  const { history } = props as RouteComponentProps;
  const { searchByMissionName, reqFetchLaunches } = props as AjaxPropsType;
  const { launchesData, filtredLaunchesData } = props as State;
  const dataLength : number = filtredLaunchesData && filtredLaunchesData.length;
  const launchesArr = launchesData as DataLaunchType[];
  const filtredLaunchesArr = filtredLaunchesData as DataLaunchType[];

  const handleMissionChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    const newName : string = e.target.value;
    setMissionName(newName);
    searchByMissionName(newName);
  };
  const handleDateFilter : (dates: any) => any = (dates : any) => {
    if (Array.isArray(dates)) { // only handle the range cases
      const [[startDate, endDate]] = dates;
      setFilter({
        ...filter,
        start: moment(startDate).format(formatDateLayout),
        end: moment(endDate).format(formatDateLayout),
      });
    }
  };
  const cleanupSearch = () => setMissionName('');
  // we trigger search req in memory only when missionName changes
  useEffect(() => {
    searchByMissionName(missionName);
  }, [missionName]);
  // we trigger fetch everytime the filter changes
  useEffect(() => {
    reqFetchLaunches(filter);
  }, [filter]);
  const loader = <div>Loading ...</div>;
  return (
    <Layout
      showBackButton
      history={history}
      title="Launches View"
    >
      {isModalOpen && (
      <Modal
        title="Modal view"
        history={history}
        onSubmitHandle={() => changeModal(false)}
        onCloseHandle={() => changeModal(false)}
      >
        {renderResult}
      </Modal>
      )}

      <FiltersWraper>
        <Button
          simpleMode
          special
          style={{
            width: 100,
            alignSelf: 'flex-end',
          }}
          onClick={() => {
            setRenderResult(
              <Calendar
                dates={[[filter.start, filter.end]]}
                range
                onSelect={handleDateFilter}
                style={{
                  marginBottom: 60,
                }}
              />,
            );
            changeModal(true);
          }}
        >
          {filter.start}
          {' '}
          -
          {filter.end}
        </Button>
        <InputSearch
          placeholder="Filter by Mission name"
          rightIconClickHandler={cleanupSearch}
          value={missionName}
          onChange={handleMissionChange}
        />
      </FiltersWraper>

      <SearchFeedback>
        <SearchFeedbackItem>
          <b>{launchesData.length}</b>
          {' '}
          Launches
        </SearchFeedbackItem>
        <SearchFeedbackItem>
          Page
          {activePage + 1}
        </SearchFeedbackItem>
      </SearchFeedback>

      <Table
        dataType="launches"
        abstractData={filtredLaunchesArr}
        itemClickHandler={console.log}
      >
        {dataLength > 0 && filtredLaunchesArr.map((d: DataLaunchType) => (
          <TableItem
            key={d.flight_number}
            dataType="launches"
            renderData={() => renderLaunches(d)}
            itemData={d}
            itemClickHandler={() => {
              changeModal(true);
              setRenderResult(
                renderLaunches(d, true), // isLoadedInModal=true to show the video
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
          setFilter({ ...filter, ...f });
        }}
        activePage={activePage}
        setActivePage={setActivePage}
      />
    </Layout>
  );
};

const mapStateToProps = (state : State) : State => ({
  ...state,
});

const mapDispatchToProps : MamDisToProps = (dispatch : (p: UAction) => void) => ({
  reqFetchLaunches: (filter) => dispatch({ type: 'REQ_FETCH_LAUNCHES', payload: filter }),
  searchByMissionName: (missionName) => dispatch({ type: 'SEARCH_LAUNCHES_BY_MISSION', payload: missionName }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Launches);
