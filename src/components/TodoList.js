
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => {
                return <Todo completeTodo={props.completeTodo} todo={todo} />;
            })}
        </div>
    );
};

export default TodoList;