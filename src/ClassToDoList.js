import React, { Component } from 'react';

class ClassToDoList extends Component {
    constructor() {
        super();
        this.state = {
            toDoTaskList: ['make to do list', 'sumbit pr', 'praise hallelujah'],
            newTask: ''
        };
    }
    addTask = (event) => {
        event.preventDefault();
        const taskList = this.state.toDoTaskList;
        taskList.push(this.state.newTask);
        this.setState({
            // toDoTaskList: [...this.state.toDoTaskList, this.state.newTask],
            toDoTaskList: taskList,
            newTask: '',
        });
    };

    handleTaskInput = (event) => {
        this.setState({ newTask: event.target.value });
    };


    render() {
        return (
            <div> 
                {this.state.toDoTaskList.ma((toDoTask, index) => 
                <div key={index}>{toDoTask}</div>)}
                <form onSubmit={this.addTask}>
                    <input type="text" onChange={this.handleTaskInput} placeholder="Add a new task" value={this.state.newTask}/>
                </form>
            </div>
        )
    }
}
export default ClassToDoList;