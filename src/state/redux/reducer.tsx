import { State, UAction } from "./types";

const INITIAL_STATE : State = {
    data: null,
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
        case "FETCH_SUCCESS":
        return {
            ...state,
            isFetching: false,
            data: action.payload
        };
        case "FETCH_ERROR":
        return {
            ...state,
            isFetching: false,
            errorMessage: action.payload
        };
        default:
        return state;
    }
};

  export default fetchTasksReducer;