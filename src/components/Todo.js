import React, { Component } from 'react';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    };

    removeTodo = event => {
        let n = event.target.value;
        let tasksList = this.state.todos;
        tasksList.splice(tasksList.indexOf(n), 1);
        this.setState({ 
          todos: tasksList,
         });
    };

    render() {
        let fini;
        if (this.state.clicked)  fini = {textDecoration: 'line-through'}
        else fini = {textDecoration: 'none'}
        return (
            <div style = {fini} onClick = {this.handleClick}>{this.props.todo}<a value = {this.props.todo} onClick = {this.removeTodo}> X</a></div>
        );
    }
}

export default Todo;