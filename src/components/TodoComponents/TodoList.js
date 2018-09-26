import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(todo => (
                <div key={todo.id}>
                    <Todo task={todo.task} /> 
                </div>
            ))}
            <TodoForm enterPressed={props.enterPressed} handleSubmit={props.handleSubmit}/>
        </div>
    );
};

export default TodoList;