// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from './Todo'


const TodoList = (props) => {
    return(
        <div>
            {props.toDo.map((item) => (
                <ToDo
                    key={item.id}
                    item={item}
                    toggleList={props.toggleList}
                />
            
                ))}
                <button onClick={props.clearList}>
                    clear ToDos
                </button>
        </div>
    )
    }

    export default TodoList