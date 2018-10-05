import React from 'react';


const Todo = props => {
    console.log(props.task.id)
    // const completed = props.task.completed ? 'completed' : 'notCompleted';
    return (
        <div onClick={()=> props.toggleCompleted(props.task.id)}>
            {props.task.task}
        </div>

    );
}

export default Todo;

//onClick={props.deleteItem} ///