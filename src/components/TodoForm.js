import React, { Component } from 'react';


export class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo:""
        };
    }
    handleChange = event => {
        this.setState({todo: event.target.value})
        console.log(this.state.todo)
    }
    
    handleSubmit = event => {
        event.preventDefault()
        this.props.addTask(this.state.todo)
        event.target.value = ''
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit" value={this.state.todo}>add task</button>
                    <button type="button" onClick={this.props.clearCompleted}>clear completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
