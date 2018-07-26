import React from 'react';
import Todo from './Todo';

// this is saying map the todos arra

const TodoList = props => {
    return (
        <div>

            {props.todos.map(todo => (
            <Todo
                handleToggleCompleted={props.handleToggleCompleted}
                key={todo.id}
                todo={todo}
            />
            ))}
            
        </div>
    );
};

export default TodoList;
