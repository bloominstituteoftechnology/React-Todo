import React from 'react';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map( todo => (
                <Todo 
                todo={todo}
                key={todo.id}                
                />
            )

            )}
        </ul>
    )
}