import {FETCHING_TODOS_START, FETCHING_TODOS_SUCCESS, FETCHING_TODOS_FAILURE} from "../actions/todosActions";

const initialState = {
    loading: false,
    todos: [],
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_TODOS_START:
            return {...state, loading: true };
        case FETCHING_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload.todos};
        case FETCHING_TODOS_FAILURE:
            return {...state, loading: false};
        default:
            return state;    
    }
}