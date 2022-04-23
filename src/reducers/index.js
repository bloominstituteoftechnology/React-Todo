import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { userReducer } from './userReducer';
import { tasksReducer } from './tasksReducer';

export const rootReducer = combineReducers({todosReducer, userReducer, tasksReducer
})