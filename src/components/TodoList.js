// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import TodoItem from "./Todo";


function TodoList (props) {
return(
    <div className="todo-list">
{props.data.map((item) => (
    <TodoItem key={item.id} item={item} toggleItem={props.toggleItem}/>
))}
    </div>
)
}

export default TodoList;