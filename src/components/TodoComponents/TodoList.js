// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import ToDo from './Todo';

// const ToDoList = props => {
//     return (
//         <div>
//            {props.toDoList.map(item => {
//         return <h1 className={props.item.newTask}> </h1>;
//       })}
//       <button onClick={event => props.changeColor(event)}>Change color</button>

//         </div>
//     )
// }







const ToDoList = (props) => {
    return (
        <div className = 'to-do-list'>
            {props.toDos.map((toDo) => {
                return (
                    <ToDo toDo = {toDo}/>
                )
            }
            )
            }
        
        </div>
    )
}

export default ToDoList;