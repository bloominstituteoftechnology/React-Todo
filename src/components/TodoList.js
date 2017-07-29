import React from 'react';


const TodoList = (props) => {

    return (
        <ul>
            {props.todos.map((todo, index) => {
                return <li value={index}>{todo}</li>;
            })}
        </ul>
    );
};










export default TodoList;