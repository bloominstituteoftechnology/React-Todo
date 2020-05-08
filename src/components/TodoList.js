// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import List from "./Todo";


const TodoList = props => {

    return (

        <div>

            {props.todo.map(list => (

                    <List
                    toggleToDo={props.toggleToDo}
                    key={list.id}
                    list={list}
                    />

            ))}

            <button onClick={props.clearCompleted} >Clear Completed</button>

        </div>
    );
};


export default TodoList;