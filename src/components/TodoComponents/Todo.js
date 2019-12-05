import React from 'react'
import "./Todo.css";

const Todo = (props) => {
    let className = props.completed ? "completed" : "";

    const itemClicked = () =>{
        props.toggle(props.id)
    }
        return (
            <div className={className} onClick={itemClicked}>
                <p>{props.task}</p>
            </div>
        );
}

export default Todo;