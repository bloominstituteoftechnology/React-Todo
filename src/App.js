import React, { Component } from 'react';
import Todo from './Todo';

class InputButton extends Component {
    constructor () {
        super();
        this.state = {
            todoData: ['Learn this stuff ', 'try to learn more stuff ', 'cry as all things are impossible'],
            inputData: ''  
        };
    }
    handleTodoChange(event) {
        
    }
    render() {
        return (
            <div> {this.state.todoData} </div>
        );
    }
}

export default InputButton;