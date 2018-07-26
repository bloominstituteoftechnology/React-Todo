import React from 'react';
import './Todo.css';
import Todo from './Todo';

/* <TodoList /> receives your Todos array and iterates over the list generating
a new <Todo /> for each element in the array. */

const TodoList = props => {
    return (
    <div>
    {props.toDoListProp.map(todo => 
        <Todo completedProp={props.completedProp} key={todo.id} toDoProp={todo} />)}
    </div>
    );
};

export default TodoList;

