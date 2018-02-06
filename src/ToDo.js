import React, { Component } from 'react';
import './ToDo.css';

class ToDo extends Component {
    constructor() {
        super();

        this.state = {
            toDos: [],
            newToDo: '',
            isToggleOn: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    /*handleClick = (event) => {
        event.preventDefault();
        console.log('click');
    } */

    handleClick = (event) => {
        event.preventDefault();
        const toDos = this.state.toDos;
        const isToggleOn = this.state.isToggleOn;
        if (isToggleOn === false) {
            toDos.className ='toggle__selected';
            this.setState({
            isToggleOn: true
            });
        }
        if (isToggleOn === true) {
            toDos.className = 'toggle__unselected';
            this.setState({
                isToggleOn: false
            });
        }
    }; 

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
                <ol class={this.state.toDos.className}>{this.state.toDos.map((toDo) => <li onClick={this.handleClick}>{toDo}</li>
                )}
                </ol>
            </div>    
        );
    }
}

export default ToDo;
