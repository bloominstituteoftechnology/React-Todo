import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(todo => (
                <Todo id={todo.id} task={todo.task} /> 
            ))}
            <TodoForm handleSubmit={props.handleSubmit}/>
        </div>
    );
};

export default TodoList;