import React, { Component } from 'react';

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
    inputSubmitTask = () => {
        const tasks = this.state.tasks;
        const task = { name: this.state.task, id: this.state.task + tasks.length };
        tasks.push(task);
        this.setState({tasks: tasks, task:""});
    }
        
    render(){
        return (
            <div>
            <TasksList chars={this.state.tasks} />
            <input
              name="task" // should be known as the state.value of the thing we update
              onChange={this.inputSubmitTask}
              value={this.state.task} // should be bound to the state.value of thing we update
              placeholder="add task to List"
            />
            <button onClick={this.inputSubmitTask}>Add Task</button>
          </div>
    }
}
export default ToDoList;