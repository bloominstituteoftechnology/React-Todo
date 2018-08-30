// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo1 from "./Todo";


function TodoList(props) {
    return <ul>{props.todo4.map(todo2 => 
        <Todo1 
            todo3={todo2}
            key= {todo2.id}
            handleComplete={props.handleComplete}
            />
        )}
        </ul>;
}

export default TodoList;