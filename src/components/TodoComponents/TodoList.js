// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return(
        <div>
            {props.things.map(things => (
                <Todo
                    taskToggler = {props.taskToggler}
                    key = {things.id} 
                    things= {things} 
                />
            ))}
       </div>
    );
};

export default TodoList;
