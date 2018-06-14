import React from 'react';
import ToDo from './Todo';

const ToDoList = props => {
    return props.task.map(task => <ToDo key={task.id} task={task} toggleCompleted={props.toggle} />);
}


export default ToDoList;