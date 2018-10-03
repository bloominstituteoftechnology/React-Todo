import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = props => (
    <div>
        <h1>Todo List: MVP</h1>
        {props.todo.map(item => {
            return <Todo text={item.task} />
        })}
    </div>
);

export default TodoList;