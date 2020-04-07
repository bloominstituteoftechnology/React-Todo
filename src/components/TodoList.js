// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// we are going to map here 

import React from "react"; 

import Todo from "./Todo"; 

const ToDoList = props => {
    return (
        <div>
            {props.chores.map(chore =>(
                <Todo key={chore.id} chore={chore} toggleChores={props.toggleChores} />
            ))}

            <button className="clear-btn" onClick={props.clearComplete} >Clear completed</button>
        </div>
    )
}

export default ToDoList; 

