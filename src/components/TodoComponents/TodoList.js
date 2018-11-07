// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css';

const TodoList = props => {
    return (
        <div>
            {props.itemList.map(todo => (
                <Todo
                    key={todo.id}
                    currentTodo={todo}
                    todoCompleted={props.todoCompleted}
                    
                />
            ))}
        </div>
    );
};

export default TodoList;
