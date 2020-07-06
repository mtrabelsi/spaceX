import {
  DataType,
  ErrorMessageType,
  USearchFilter,
  UActionLabels,
} from './types';

export const ActionMapper = {
  FETCH_START: 'FETCH_START' as UActionLabels,
  FETCH_SUCCESS_HISTORY: 'FETCH_SUCCESS_HISTORY' as UActionLabels,
  FETCH_SUCCESS_LAUNCHES: 'FETCH_SUCCESS_LAUNCHES' as UActionLabels,
  REQ_FETCH_LAUNCHES: 'REQ_FETCH_LAUNCHES' as UActionLabels,
  REQ_FETCH_HISTORY: 'REQ_FETCH_HISTORY' as UActionLabels,
  SEARCH_LAUNCHES_BY_MISSION: 'SEARCH_LAUNCHES_BY_MISSION' as UActionLabels,
  FETCH_ERROR: 'FETCH_ERROR' as UActionLabels,
};

export const reqFetchHistory = () => ({
  type: ActionMapper.REQ_FETCH_HISTORY,
});

export const fetchLaunches = (filter? : USearchFilter) => ({
  type: ActionMapper.REQ_FETCH_LAUNCHES,
  payload: filter,
});

export const fetchStarted = () => ({
  type: ActionMapper.FETCH_START,
});

export const fetchSuccessHistory = (input: DataType) => ({
  type: ActionMapper.FETCH_SUCCESS_HISTORY,
  payload: input,
});

export const fetchSuccessLaunches = (input: DataType) => ({
  type: ActionMapper.FETCH_SUCCESS_LAUNCHES,
  payload: input,
});

export const searchLaunchesByMission = (missionName: string) => ({
  type: ActionMapper.SEARCH_LAUNCHES_BY_MISSION,
  payload: missionName,
});

export const fetchError = (errorMessage: ErrorMessageType) => ({
  type: ActionMapper.FETCH_ERROR,
  payload: errorMessage,
});
