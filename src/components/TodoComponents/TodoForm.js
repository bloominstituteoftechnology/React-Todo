import React from 'react';  
import {Button, Input} from 'react-materialize'

const TodoForm = props => {
    return (
    <div className = "todo-form">
        <Input id = "input" placeholder = "Enter todos..." type= "text" onChange = {props.change} />
        <div class= "buttons">
        <Button waves='light' onClick = {props.click} className = "add-button amber darken-3">Add todo</Button>
        <Button waves = 'light' onClick ={props.click2} className = "clear-completed red darken-1">Clear Completed</Button>
        </div>
    </div>
    )
}

export default TodoForm; 