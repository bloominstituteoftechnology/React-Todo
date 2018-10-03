import React from "react";

const Todo = props => {
    console.log(props);
    return (
        <div>
            <p className={props.completed.toString()} key={props.id}>{props.task}</p>
        </div>
    );
}

export default Todo;