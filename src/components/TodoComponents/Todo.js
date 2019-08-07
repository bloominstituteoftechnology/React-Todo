import React, { useState } from 'react';

import "./Todo.css";

// let changeClassName = (bool) => {
//     if(bool === true){
//         return "task";
//     }
//     else{
//         return "taskCompleted";
//     }
// }



const Todo = (props) => {

    const [nameOfClass, setNameOfClass] = useState("task")

    const handleClick = () => {
        console.log("Click heard");

        if(nameOfClass === "task"){

            setNameOfClass('taskCompleted');
    }
        else{
            setNameOfClass('task');
        }}

        return (
            <div className={nameOfClass} onClick={handleClick}>
                <h3>{props.task}</h3>
            </div>
        )
    }

export default Todo;