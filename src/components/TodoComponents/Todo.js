import React from 'react';
import './Todo.css';

//props = props.todo  - individual todo
const Todo = ({ todo }) => {

    function todoComplete(event){
        todo.completed = true;
        // event.target.classList.toggle(task-complete);
        event.target.classList.toggle('taskComplete');
    }


    return (
        <h3 onClick={todoComplete}>
            {todo.task}
        </h3>
    );


}


export default Todo;