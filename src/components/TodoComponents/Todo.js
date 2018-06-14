import React from 'react';
import './Todo.css';

const ToDo = props => <li onClick={() => props.toggleCompleted(props.task.id)} style={props.task.completed ? {textDecoration: 'line-through'} : null}>{props.task.task}</li>

export default ToDo;