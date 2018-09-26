// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = (props) => {
    return(
        <div className="toDoListContainer">
        <TodoForm onChange={props.onChange} onSubmitButton={props.onSubmitButton} onClear={props.onClear} />
        <Todo list={props.list} completeTask={props.completeTask} />
        </div>
    )
}

  export default TodoList;