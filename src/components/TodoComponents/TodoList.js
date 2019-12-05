// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

class ToDoList extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <ToDoList />
        )
    }
}

export default ToDoList;