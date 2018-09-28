import React from 'react'
import "./Todo.css";

const Todo = (props) => {
    let className = props.completed ? "todo-item completed" : "todo-item";

    const itemClicked = () =>{
        props.toggle(props.id)
    }
        return (
                <ul className={className} 
                    onClick={itemClicked}>
                    <li>{props.task}</li>
                </ul>
        );
}

export default Todo;