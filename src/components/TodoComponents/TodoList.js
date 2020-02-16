import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = (props) =>{
    return(
    props.data.map(item =>{
        return(
        <Todo item = {item} toggleCompleted={props.toggleCompleted} />
    )})
    )
}

export default TodoList;