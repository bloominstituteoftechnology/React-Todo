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
            this.props.addTodo(this.state.newtodo);
            this.setState({ newtodo: ""})
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
                    type="submit"> Add new todo
                </button>
                <button onDoubleClick={this.props.filterTodos}> Double click me to clear completed</button>
            </form>
        )
    }
}

export default TodoForm