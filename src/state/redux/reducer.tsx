import { State, UAction } from './types';
import { DataHistoryType, DataLaunchType } from '../../components/Table/types';

const INITIAL_STATE : State = {
  historyData: [],
  launchesData: [],
  filtredLaunchesData: [],
  isFetching: false,
  errorMessage: undefined,
};

const fetchTasksReducer = (state : State = INITIAL_STATE, action : UAction) : State => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        isFetching: true,
      };
    case 'SEARCH_LAUNCHES_BY_MISSION':
      const launchesData = state.launchesData as Array<DataLaunchType>;
      const q = action.payload as string;
      return {
        ...state,
        // filter() does not mutate the array on which it is called, so we are safe here
        filtredLaunchesData: q
          ? launchesData.filter((l) => (l.mission_name).toLowerCase().includes(q.toLowerCase())) : launchesData,
      };
    case 'FETCH_SUCCESS_HISTORY':
      return {
        ...state,
        isFetching: false,
        historyData: action.payload as DataHistoryType[],
      };
    case 'FETCH_SUCCESS_LAUNCHES':
      return {
        ...state,
        isFetching: false,
        launchesData: action.payload as DataLaunchType[],
        filtredLaunchesData: action.payload as DataLaunchType[],
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload as string,
      };
    default:
      return state;
  }
};

export default fetchTasksReducer;
