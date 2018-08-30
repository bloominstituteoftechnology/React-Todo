import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return <ul>{props.todo.map(todo => <Todo key={todo.id} todo={todo} completeTask={props.completeTask} completed={todo.completed}/>)}</ul>;
}

export default TodoList;