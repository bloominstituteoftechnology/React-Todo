//   _____     ____         
//  |_   _|__ |  _ \  ___ _ 
//    | |/ _ \| | | |/ _ (_)
//    | | (_) | |_| | (_) | 
//    |_|\___/|____/ \___(_)
                         

import React from 'react';
import './Todo.css';

function Todo(props) {
    return <p className={`card ${props.completed}`} onMouseOver={props.pointer} onClick={() => props.completedToggle(props.id)} >{props.task}</p>
}

export default Todo;