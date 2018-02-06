import React, { Component } from 'react';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            toDos: [],
            newToDo: '',
            isToggleOn: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
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
                <ol>{this.state.toDos.map((toDo) => <li onClick={this.handleClick}>{toDo}</li>
                )}
                </ol>
            </div>    
        );
    }
}

export default ToDo;
