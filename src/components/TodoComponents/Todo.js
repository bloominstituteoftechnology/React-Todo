 import React from 'react'; 
 import '../TodoComponents/Todo.css'

 // <Todo /> is a component that takes in the todo data and displays the task to the screen.

const Todo = props => {
    return (
        <div className = {`todoEntryCompleted${props.todoEntryCompleted}`}>
            <li onClick = {() => props.todoCompletedToggle(props.todoEntryId)}>
                {props.todoEntryTask}
            </li>
        </div>
    );
};


 export default Todo;