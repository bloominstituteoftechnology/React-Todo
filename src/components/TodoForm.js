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
        // this.setState({todo: ""})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}></input>
                    <button type="submit">add task</button>
                    <button type="button">clear completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;
