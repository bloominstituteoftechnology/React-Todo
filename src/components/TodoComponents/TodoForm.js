import './Todo.css'
import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {};
    }

    render () {

        return (
            <form action="">
            <Todo handleInputChange = {this.props.handleInputChange} handleEnter = {this.props.handleEnter}/>
            
            </form>
        );

    }
}

export default TodoForm; 
