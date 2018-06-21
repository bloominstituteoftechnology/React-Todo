import React from 'react';
import Todo from './Todo'

// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> 
// for each element in the array.

const TodoList = props => {
    return (
        <ul>
            {props.currentList.map(todoTask => {
                return <li key={Math.random()}> {todoTask}</li>;
            })}
        </ul>
    )
}

export default TodoList;