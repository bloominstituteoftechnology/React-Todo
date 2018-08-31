// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <div className = 'task-container'>
        {props.tasks.map(item => (<Todo task={item.task} key={item.id}/>))}
        </div>
    )
}

// function TodoList(props) {
// return <ul>{props.todo.map(todo => <Todo todo={todo} />)}</ul>;
// }

export default TodoList;