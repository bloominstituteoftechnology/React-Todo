// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

export default function TodoList(props) {
    return (
        <div>
            {
                props.todos.map(el => {
                    return <Todo toggleTodo={props.toggleTodo} key={el.id} todo={el} />;
                  })
            }
            <button onClick={props.clearCompleted}>Clear Completed</button>
        </div>
    )
}