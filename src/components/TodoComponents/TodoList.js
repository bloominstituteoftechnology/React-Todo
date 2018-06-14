// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    console.log(props);
    return(
        <ul>
            {props.someThings.map(something => {
                return <li key = {something.id}>{something.task}</li>
            })}
        </ul>
    );
};

export default TodoList;

//import todo into todolist , maps over todo, handle toggle complete, exports into app.

/* {this.state.things.map(something=> (<li key={something.id}>{something.task}</li>))} */

//li onclick() key