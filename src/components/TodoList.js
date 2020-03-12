// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from "./Todo";




const TodoList = props => {
    return (
        <div className="work-list">
        {props.thingsToDo.map(item => (
        <ToDo
        key={item.id}
        item={item}
        toggleCompleted={props.toggleCompleted}
        />


        ))}
        
        <button className="clear-btn" onClick={props.clearCompleted}   >
            Clear Completed
        </button>

        </div>
    )
}

export default TodoList;