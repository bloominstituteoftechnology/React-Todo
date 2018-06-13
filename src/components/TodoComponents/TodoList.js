import React from 'react';


const TodoList = props => {
    return (
        <ul>
            {props.toDoList.map(list => {
                return <li key={Math.random()}>{list}</li>;
            })}
        </ul>
    );
};


export default TodoList;