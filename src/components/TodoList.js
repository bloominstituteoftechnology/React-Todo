// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from './Todo'

const ToDoList = (props) => {
    return(
        <div>
            {props.ToDo.map((item) =>(
                <ToDo 
                key={item.name}
                item={item}
                toggleList={props.toggleList}
                />
            ))}
            <button onClick={props.clearList}>Clear List</button>
        </div>
    )
}

export default ToDoList