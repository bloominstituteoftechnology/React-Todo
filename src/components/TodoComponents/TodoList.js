// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import './Todo.css'
import React from 'react';

class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    

    render () {

        return (
            
            <li >{this.props.thingToDo}</li>
            // key = {thing+count.toString()}
            
        );

    }
}


export default TodoList; 

