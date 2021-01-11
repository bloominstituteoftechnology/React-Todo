// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
// REMEMBER: This is a better use for a functional component!
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    const handleClick = ()=> {
        props.handleItemCompleted();
      }
    return (
        <div className="list__container">
            {props.list.map(item => (
                <Todo handleItemToggle={props.handleItemToggle} key={item.id} item={item} />
            ))}
            <button onClick={handleClick}>Clear Task</button>
        </div>
    )
}

export default TodoList;