import React from 'react';
import './Todo.css';



const Todo = (props) => {
    function todoClicked() {
        props.completedFunc(props.id);
    }
    
    if (props.completed) {
        return (
            <div className='todo lineThrough' onClick={()=> todoClicked()} key={props.id.toString()}>{props.task}</div>
        )
    }
    else {
        return (
            <div className='todo' onClick={()=> todoClicked()} key={props.id.toString()}>{props.task}</div>
        )
    }
}

export default Todo;
