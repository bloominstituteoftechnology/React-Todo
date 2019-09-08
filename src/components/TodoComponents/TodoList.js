// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ThingsToDo from "./Todo";


const TodoList = props => {
return (
<div className="todo-list">
<div className="todo-items">
{props.listtodo.map(item => (
<ThingsToDo key={item.id} item={item} toggleItem={props.toggleItem} />
))}
</div>
<button onClick={props.clearCompleted}>Cross Off Completed</button>
</div>
);
};

export default TodoList;