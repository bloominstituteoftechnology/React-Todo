import React from "react";


export const ToDo = props => {
    return (
        <li
            onClick= { props.handleTaskCompletion }
        >
            { props.toDoTask }
        </li>
    );
};