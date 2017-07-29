import React from 'react';


const TodoList = (props) => {

    return (
        <ol>
            {props.todos.map((todo, index) => {
                return <li value={index+1}>{todo}</li>;
            })}
        </ol>
    );
};










export default TodoList;