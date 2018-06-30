 import React from 'react'; 

 // <Todo /> is a component that takes in the todo data and displays the task to the screen.

const Todo = props => {
    return (
        <li>
            {props.todoTask}
        </li>
    );
};


 export default Todo;