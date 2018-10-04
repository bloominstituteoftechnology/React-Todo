import React from 'react';
import TodoList from './TodoList';

import './Todo.css'

const Todo = props => {
    return(
        <div>
            <TodoList
                todoData={props.todoData}
                strikeThrough={props.strikeThrough}
                />
        </div>
    )
}

export default Todo;