import React, { Component } from 'react';
import ToDoList from './components/ToDoList';

class ToDo extends Component{
    constructor() {
        super();
        this.state = {
            title: "To Do List",
            task: "",
            someVal: "",
            tasks:[]
        };
    }
    inputNameChange = event => {
      // a controlled input
      this.setState({ [event.target.name]: event.target.value });
    }; // I DID THIS - Because... REUSABILITY
  
    inputSubmitTask = () => {
        const tasks = this.state.tasks;
        const task = { name: this.state.task, id: this.state.task + tasks.length };
        tasks.push(task);
        this.setState({tasks: tasks, task:""});
    }
        
    render(){
        return (
            <div>
            <ToDoList tasks={this.state.tasks} />
            <input
              name="task" // should be known as the state.value of the thing we update
              onChange={this.inputNameChange}
              value={this.state.task} // should be bound to the state.value of thing we update
              placeholder="add task to List"
            />
            <button onClick={this.inputSubmitTask}>Add Task</button>
          </div>
        )}
}
export default ToDo;
