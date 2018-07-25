import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <h2>Todo List</h2>
            {props.todoArr.map(item => {
                return <Todo key={item.id} unique={item.id} name={item.task} onClick={props.onItemClick} />
            })}
        </div>
    );
};

export default TodoList;