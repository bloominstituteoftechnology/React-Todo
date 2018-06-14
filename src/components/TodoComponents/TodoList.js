import React from 'react'
const TodoList = props => {
    return <ul>{props.passedTodos.map(todo => {
        return <li key={Math.random()}>{todo}</li>
    })} </ul>;
}


export default TodoList;
