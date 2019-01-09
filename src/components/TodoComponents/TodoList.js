// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

function ToDoList(props) {

    return (
        <div>
            {props.toDoDataList.map((toDo, index) => {
                return <ToDo toDo = {toDo} key={index} />;
            })}
        </div>
    );
}

export default ToDoList;