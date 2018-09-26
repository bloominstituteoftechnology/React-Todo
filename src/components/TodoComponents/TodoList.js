//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
    return (
    <div>
        {props.todoItem.map(item => {
            return (
                <div id={props.todoItem.id}>
                <Todo task={item.task} />
                </div>
            )
        })}
        <TodoForm submit={props.submit} input={props.input}/>
    </div>
    )
}

export default TodoList;
