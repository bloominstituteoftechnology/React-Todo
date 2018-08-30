import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return(
        <div>
            {props.todos.map(todo => (
                <Todo
                    handleToggleComplete = {props.handleToggleComplete}
                    completedBool = {todo.completed}
                    key = {todo.id}
                    todo = {todo}
                />
            ))}
        </div>
    );
  };

export default TodoList;