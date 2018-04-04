import React from "react";
import Task from "./Task";

const ToDo = props => {
    return (
        <div>
            {props.toDos.map((toDo, index) => {
                return <Task 
                    key={toDo.text + index} 
                    clearToDo={props.clearToDo} 
                    completeToDo={props.completeToDo} 
                    toDo={toDo}/>
                })}
        </div>
    );
};

export default ToDo;