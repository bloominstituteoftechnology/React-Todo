import React, { Component } from 'react';
import ToDo from './ToDo';

class ToDoList extends Component {

    constructor() {
        super();

        this.state = {
            todos: [],
            newToDo:"",
        };
    }

addToDo = (event) => {
    event.preventDefault();

    const list = this.state.todos;
    list.push(this.state.newToDo);

    this.setState({
        todos: list,
        newToDo: ""
    });
}

createToDo = (event) => {
    event.preventDefault();

    this.setState({
        todos: this.state.todos,
        newToDo: event.target.value,
    });
}

render() {
    return (
        <div>
            {this.state.todos.map((thisToDo, i) => <ToDo key={i} todo={thisToDo} />)}
            <form onSubmit={this.addToDo}>
            <input type="text" placeholder="Enter New To Do" onChange={this.createToDo} value={this.state.newToDo} />
        </form>
    </div>

    );
}
}

export default ToDoList;