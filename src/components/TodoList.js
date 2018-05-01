import React from 'react';
import Todo from './Todo';

//set up a component to handle input field that user can type and submit
//the data to create a new todo item

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