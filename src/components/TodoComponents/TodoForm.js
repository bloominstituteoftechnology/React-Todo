import React, { Component } from "react";

export default class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            name:" "
        };
    }

handleChange = e =>{
    this.setState({
        [e.target.name]: e.target.value
    })
}
submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.name)
}
render(){
    return(
        <form className="todoForm" onSubmit={this.submitTask}>
        <input type="text" value={this.state.name} name="name"
        onChange={this.handleChange}
        />
        <button>Add Task</button>
        </form>
    )
}


}