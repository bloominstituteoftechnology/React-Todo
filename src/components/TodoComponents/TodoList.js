import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return <div>
        {props.todos.map((todo) => (
            <Todo key={todo.id} todotodo={todo} changeComplete={props.changeComplete} />
        ))}
    </div>
}

export default TodoList;