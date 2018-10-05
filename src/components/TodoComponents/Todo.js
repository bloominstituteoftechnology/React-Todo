import React from 'react';


const Todo = props => {
    console.log(props.item.id) //where is this thing firing? FOUND IT
    // const completed = props.task.completed ? 'completed' : 'notCompleted';
    return (
        <div onClick={()=> props.toggleCompleted(props.item.id)}>
            {props.item.task} 
            
        </div>

    );
}

export default Todo;

//onClick={props.deleteItem} ///

// changed {props.task.task} to {props.item.task} 