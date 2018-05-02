// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TaskList from "./TaskList.js";

class ToDoList extends React.Component {
    constructor(props){
        super(props);
        this.state =  {
            inputValue: '',
            taskList: []
        };
    }
}
export default ToDoList;