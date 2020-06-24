import { State, UAction } from "./types";
import { DataHistoryType } from "../../components/Table/types";

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
        case "FETCH_SUCCESS_HISTORY":
        return {
                ...state,
                isFetching: false,
                historyData: action.payload as unknown[]
            };
        case "FETCH_SUCCESS_LAUNCHES":
            return {
                ...state,
                isFetching: false,
                launchesData: action.payload as unknown[]
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