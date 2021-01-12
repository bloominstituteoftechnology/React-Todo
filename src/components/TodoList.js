// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div>
           {props.toDoList.map(toDo => {
               return (
                   <Todo task={toDo.task} key={toDo.id} />
               )
           })}
        </div>
    )
};

export default TodoList;