import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {

    let todos = props.list.map( ( todoItem ) => {
        return ( <Todo key={todoItem.id} id={todoItem.id} task={todoItem.task} handleClick={props.handleClick} completed={todoItem.completed} /> );
    });

    return (
        <div className="todo-list">
            <ul>
                {todos}
            </ul>
        </div>
    );
}

export default TodoList;
