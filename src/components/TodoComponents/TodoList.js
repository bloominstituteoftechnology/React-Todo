// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'
import './Todo.css';

const TodoList = props => {
    return(
        <div className="todo-list">
            {props.todos.map(todo => {
                return <Todo todoComplete={props.todoComplete} key={todo.id} newTodo={todo} />
            })}
        </div>
    );
}

export default TodoList;
