
import React, { Component } from 'react';


class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            toDos: [],
            toDo: ''
        };
    }
    handleToDoActionChange = event => {
        this.setState({ [event.target.toDoAction]: event.target.value });
    };

    handleSubmit = () => {
        const toDos = this.state.toDos;
        const toDo = { toDoAction: this.state.toDo, id: this.state.toDo + toDos.length };
        toDos.push(toDo);
        this.setState({ toDos: toDos, toDo: '' });
    };
    render() {
        return (
            <div>
                <toDoList toDos={this.state.toDos} />
                <input
                    toDoAction="newToDo"
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


