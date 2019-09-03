import React from 'react';
// import { EVENTS } from 'saxes';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newtodo: ""
        }
    }

    handleChange = (event) => {
        // console.log("Change handler activated!");
        this.setState({ [event.target.name]: event.target.value });
      };

    handleSubmit = (event) => {
            event.preventDefault();
            this.props.addTodo(this.state.newtodo)
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChange}
                    type="text"
                    name="newtodo"
                    placeholder="Add new todo"
                    value={this.state.newtodo}
                />
                <button 
                onClick={this.props.handleClick}
                type="submit"> Add new todo
                </button>
                <button onDoubleClick={this.props.handleDoubleClick}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm