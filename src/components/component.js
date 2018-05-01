  import React, { Component } from 'react';
  import { toDoListitems }  from './toDoListItems.js';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            toDo: '',
            toDos: []
        };
    }
    handleToDoActionChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = () => {
        const toDos = this.state.toDos;
        const toDo = { 
            name: this.state.toDo, 
            id: this.state.toDo + toDos.length };
        toDos.push(toDo);
        this.setState({ toDos: toDos, toDo: "" });
    };
        render() {
            return (
            <div>     
                <toDoListItems toDos={this.state.toDos} />
                    <input 
                    name="toDo"
                    onChange={this.handleToDoActionChange}
                    value={this.state.toDo}
                    placeholder="Add to-do item"
                    />
                <button onClick={this.handleSubmit}>Add Todo</button>
            </div>
        );
    }
}


export { TodoList }