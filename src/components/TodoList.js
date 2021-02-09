// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import ToDo from './Todo';

const ToDoList = (props) => {
    return(
        <div className="todo-list">
            {props.toDo.map(item => (
                <ToDo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
          
        </div>
    )
}

export default ToDoList;