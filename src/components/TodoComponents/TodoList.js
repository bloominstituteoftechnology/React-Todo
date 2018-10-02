import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(params =>
                <Todo key={params.id} todo={params} toggleStrike={props.toggleStrike} />
                )}
        </div>
    )
}

export default TodoList;
