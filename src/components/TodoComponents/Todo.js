 import React from 'react'; 

 // <Todo /> is a component that takes in the todo data and displays the task to the screen.

const Todo = props => {
    return (
        <li key = {Math.random()}>
            {props.singleTodo}
        </li>
    );
};


 export default Todo;