import React from 'react';
import Todo from './Todo';

const TodoList = props => (
    <div>
        <h1>Todo List: MVP</h1>
        {props.todo.map(item => {
            return <Todo toggleTodo={props.toggleTodo} text={item.task} />
        })}
    </div>
);

export default TodoList;