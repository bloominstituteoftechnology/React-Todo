// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import ToDo from './Todo';

const List = (props) => {
    return (
        <ul>
            {props.todolist.map(newToDo => {
                return (
                    <ToDo 
                        key={newToDo.id} 
                        value={newToDo.task} 
                        crossout={props.crossout} 
                        id={newToDo.id}
                        completed={newToDo.completed}
                    />
                )
            })}
        </ul>
    )
}

export default List;

//Must pass id=newToDo.id again because key cannot be used for anything other than setting the unique key value
//to access id as a variable in Todo.js, we have to set it to id as well