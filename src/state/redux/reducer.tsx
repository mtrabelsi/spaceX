import { State, UAction } from "./types";
import { DataHistoryType, DataLaunchType } from "../../components/Table/types";

const INITIAL_STATE : State = {
    historyData: [],
    launchesData: [],
    isFetching: false,
    errorMessage: undefined
};

const fetchTasksReducer = (state : State = INITIAL_STATE, action : UAction) : State => {
    switch (action.type) {
        case "FETCH_START":
        return {
                ...state,
                isFetching: true
            };
        case "SEARCH_LAUNCHES_BY_MISSION":
            let launchesData = state.launchesData as Array<DataLaunchType>
            return {
                    ...state,
                    //filter() does not mutate the array on which it is called, so we are safe here
                    launchesData: launchesData.filter(ld => ld.mission_name === action.payload)
                };
        case "FETCH_SUCCESS_HISTORY":
        return {
                ...state,
                isFetching: false,
                historyData: action.payload as DataHistoryType[]
            };
        case "FETCH_SUCCESS_LAUNCHES":
            return {
                ...state,
                isFetching: false,
                launchesData: action.payload as DataLaunchType[]
            };
        case "FETCH_ERROR":
        return {
                ...state,
                isFetching: false,
                errorMessage: action.payload as string
            };
        default:
        return state;
    }
};

  export default fetchTasksReducer;