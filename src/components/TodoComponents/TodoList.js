import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
    console.log(props)
    return props.task.map(task => <ToDo key={task.id} task={task} onClick={props.toggle(task.id)} />);
}


export default ToDoList;