import React from 'react';
import '../TodoComponents/Todo.css'

const Todo = props => {
    return <div className={props.itemprop.complete ? 'line':null} onClick={()=> props.strike(props.itemprop.id)} >{props.itemprop.task}</div>
}

export default Todo;