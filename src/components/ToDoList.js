import React, { Component } from 'react';
import ToDo from './ToDo.js';

class ToDoList extends Component {
    constructor(){
        super();

        this.state = {
            ToDo: [],
            NewItem: ''
        };
    }

    newInput = (event) => {
        this.setState({ NewItem: event.target.value});
    };

    AddToDo = (event) => {
        event.preventDefault();
        const toDoList = this.state.ToDo
        toDoList.push(this.state.NewItem)
        this.setState({
            ToDo: toDoList,
            NewItem: ''
        });
    };

    RemoveToDo = (event) => {
        const remState = this.state.ToDo.filter((item) => item.state.xed === false);
        this.setState({
            ToDo: remState
        });
    };

    render() {
        return(
            <div>
                {this.state.ToDo.map(item => <ToDo text={item} />)}
                <form onSubmit={this.AddToDo}>
                <input
                    type='text'
                    onChange={this.newInput}
                    placeholder='add new task'
                    value={this.state.NewItem}
                />
                </form>
            </div>
        );
        this.RemoveToDo();
    }
    
}
export default ToDoList;

