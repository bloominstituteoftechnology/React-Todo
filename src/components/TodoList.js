// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import List from "./Todo";


const TodoList = props => {

    return (

        <div className="w3-card">

            {props.todo.map(list => (

                    <List 
                    toggleToDo={props.toggleToDo}
                    key={list.id}
                    list={list}
                    />

            ))}

            <button className="w3-button  w3-green" onClick={props.clearCompleted} >Clear Completed</button>

        </div>
    );
};


export default TodoList;