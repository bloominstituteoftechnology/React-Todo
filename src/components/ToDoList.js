import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(){
        super();

        this.state = {
            ToDo: ['Item'],
            NewItem: ''
        };
    }

    newInput = (event) => {
        this.setState({ NewItem: event.target.value})
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

    render() {
        return(
            <div>
                {this.state.ToDo.map(item => <div>{item}</div>)}
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
    }
}

export default ToDoList;

