import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(){
        super();

        this.state = {
            ToDo: ['Sample Problem'],
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
            </div>
            <form>


            </form>

        );
    }
}

export default ToDoList;

