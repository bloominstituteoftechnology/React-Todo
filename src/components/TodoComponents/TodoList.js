import React from 'react';
import Todo from './Todo';
const TodoList = props => {
    return (
        <div>
          {props.todos.map(todo => <Todo todo = {props.todo.task} id = {props.todo.id} />)}
        </div>
    );
};

export default TodoList;