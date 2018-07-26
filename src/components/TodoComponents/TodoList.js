// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import './Todo.css'
import React from 'react';

class TodoList extends React.Component {
    constructor(){
        super();
        this.state = {count: 0, thing: "thing_"};
        this.count = 0;
    }
    
    

    render () {
         
        
        return (
            
            <li className = {this.props.completed.toString() === "false" ? "unCompleted": "completed"} completed = {this.props.completed.toString()} onClick ={this.props.handleLiClick}>
            {this.props.thingToDo}</li>
            
        );

    }
}


export default TodoList; 

