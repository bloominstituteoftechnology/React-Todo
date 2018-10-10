// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
//import TodoForm from './TodoForm';


const TodoList = props => {
    return(
        <div className="todo-list-container">
            {props.todoList.map((item) => <Todo todoList={item}/>)}
        </div>
    );
}

export default TodoList;