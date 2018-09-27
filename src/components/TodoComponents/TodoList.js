// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';

class ToDoList extends React.Component{
    constructor(){
        super();

    }
    render (){
        return(
        <h1 className={'todoTitle'}>To Do List</h1>
        );
    }
}

export default ToDoList