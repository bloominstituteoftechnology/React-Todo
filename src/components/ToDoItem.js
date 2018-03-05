import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(args) {
        super(args);
        this.state = {
            todo: args.todo,
        };
        console.log(args);
    }
    render() {
        return(
            <li>{this.state.todo}</li>
        );
    }
}

export default ToDoItem;