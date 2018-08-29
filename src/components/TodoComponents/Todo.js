import React from 'react';
import './Todo.css'


function Todo(props) {
    return <li className="item">{props.item}</li>
}


export default Todo;