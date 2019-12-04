import React, { Component } from "react";

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            id: "",
            completed: false
        }
    }

    handleChange = event => {
        this.setState({ task: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addItem(this.state.task);
        console.log(this.state.task)
        this.setState({ task: "" });
    };
    render() {
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <h3>Todo Form</h3>
            <input 
            type="task"
            name="task"
            placeholder="task"
            value={this.state.task}
            onChange={this.handleChange}
            />
            <button type='submit'>Add</button>
          </form>
        </div>
    )
    }
}
export default TodoForm;