//<TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.
import React from 'react';
import './Todo.css';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
    return (
    <div>
        {props.todoList.map(item => {
            return (
                <Todo id={item.id} task={item.task} />
            )
        })}
        <TodoForm submit={props.submit} input={props.input}/>
    </div>
    )
}

export default TodoList;
