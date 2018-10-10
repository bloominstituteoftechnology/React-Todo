import React from "react";
// import Todo from "./Todo";

const TodoList = props => {
    return (
        <div>
            {props.todoTask.map(item => {
                return <h1 className={props.item.task}> </h1>;
            })}
        </div>
    )
}
export default TodoList;