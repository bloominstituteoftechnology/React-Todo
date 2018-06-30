 import React from 'react'; 

 // <Todo /> is a component that takes in the todo data and displays the task to the screen.

const Todo = props => {
    return (

        <li 
        onClick = {() => props.todoCompletedToggle(props.todoEntryId)}
        // onClick = {props.todoCompletedToggle(props.todoTask)}
        >
            {props.todoEntryTask}
        </li>
    );
};


 export default Todo;