// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props =>{

    const handleClear = () =>{
        props.handleClearCompleted();
    }

    return(
        <div className='todo-list'>
            {props.toDoList.map(todo =>(
                <Todo handleTodoToggle={props.handleTodoToggle} key={todo.id} todo={todo} />
            ))}
            <button onClick={handleClear} >Clear Completed</button>
        </div>
    )
};

export default TodoList;
