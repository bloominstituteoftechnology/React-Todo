import React from 'react';
import TodoList from './TodoList';

const Todo = props => {
    return(
        <div>
            <TodoList todoData={props.todoData}/>
        </div>
    )
}

export default Todo;