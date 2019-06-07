import React from 'react';
<<<<<<< HEAD

function Todo (props) {
    return (
        <div className='task'>
        <p>{props.todoitem.task}</p>
        </div>
        );
}
=======
import './Todo.css';

const Todo = props => {
    console.log("props.task", props);
   return (
<div>
   {props.task}
</div>
   );
};
>>>>>>> 74c34564155fa8f343a4c5a192b2a74466b8cbf1

export default Todo;