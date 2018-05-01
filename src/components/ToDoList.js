// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { Component } from 'react';
import { ToDo } from "./toDo"

class ToDoList extends Component {
    constructor () {
        super();
        this.state = {
            todo: [],
            items: '',
        }
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit = () => {
        const {todo} = this.state.todo;
        const items = { name: this.state.items, id: this.state.items + 'WHAT?!' };
        todo.push(items);
        this.setState({ todo: todo, items: '' });
    };
    render() {
        return (
            <div>
                <ToDo todo={this.state.todo} />
                <input 
                    name="items"
                    onChange={this.handleChange}
                    value={this.state.items}
                    placeholder="Add a Todo"
                />
                <button onClick={this.handleSubmit}>What do you need to do?</button>
            </div>
            );
        }
    }

export { ToDoList }