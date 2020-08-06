import React from 'react';

const Todo = props => {

    console.log('todo task, id, completed', props.item.task, props.item.id, props.item.completed)

    return(

        <div className={`item${props.item.completed ? " completed" : ""}`}

            id = {props.item.id}
            completed = {props.item.completed}
            onClick = {() => props.toggleItem(props.item.id)}>

            <p> {props.item.task}</p>
        </div>

    )
    
}

 export default Todo;