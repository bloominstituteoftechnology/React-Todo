import React, { Component } from 'react';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            toDos: ['clean bathroom', 'grocery shopping', 'pick up kids'],
            newToDo: ''
        };
    }

    addNewTask = (event) => {
        event.preventDefault();
        const toDos = this.state.toDos;
        toDos.push(this.state.newToDo);
        this.setState({
            newToDo: "",
            toDos: toDos
        });
    };

    handleNewTaskInput = (event) => {
        this.setState({newToDo: event.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addNewTask}>
                    <input type="text" onChange={this.handleNewTaskInput} placeholder="Add New Task!" value={this.state.newToDo} />
                </form>
                <ol>{this.state.toDos.map((toDo) => <li>{toDo}</li>
                )}
                </ol>
            </div>    
        );
    }
}

export default ToDo;
