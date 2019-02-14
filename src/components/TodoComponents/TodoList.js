import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map( todo => (                
                <Todo 
                todo={todo.task}
                key={todo.id}
                />
            )

            )}
        </ul>
    )
}

export default TodoList;