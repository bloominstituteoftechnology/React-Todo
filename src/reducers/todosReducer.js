import {FETCH_TODOS_START, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, CREATE_TODO_START, CREATE_TODO_SUCCESS, CREATE_TODO_FAILURE, DELETE_TODO_START, DELETE_TODO_SUCCESS} from "../actions/todosActions";
import { USER_LOGOUT } from "../actions/userActions";

const initialState = {
    loading: false,
    todos: [],
}

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_TODOS_START:
            return {...state, loading: true };
        case FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload};
        case FETCH_TODOS_FAILURE:
            return {...state, loading: false};
        case CREATE_TODO_START:
            return {...state, loading: true};
        case CREATE_TODO_SUCCESS:
            return {...state, todos: [...state.todos, action.payload]};
        case CREATE_TODO_FAILURE:
            return {...state, loading:false};
        case DELETE_TODO_START:
            return {...state, loading:true};
        case DELETE_TODO_SUCCESS:
            const filteredTodos = state.todos.filter(todo => todo.todo_id != action.payload.todo_id)
            return {...state, todos: filteredTodos}
        case USER_LOGOUT:
            return {...state, todos: [], loading: false};
        default:
            return state;    
    }
}