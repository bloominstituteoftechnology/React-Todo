import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            <h2>Todo List</h2>
            {props.todoArr.map(item => {
                return <Todo key={item.id} name={item.task} />
            })}
        </div>
    );
};

export default TodoList;