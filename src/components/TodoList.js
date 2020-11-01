// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from './Todo'


const ToDoList = (props) => {
    return(
        <div>
            {props.toDO.map(item =>{
            return <ToDo 
                key={item.id}
                item={item}
                toggleList={props.toggleList}
                />
                })}
            <button>Clear List</button>
        </div>
    )
}
// onClick={props.clearList}
export default ToDoList