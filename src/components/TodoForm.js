import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state  = {
            newTaskName: ""

        };
    }

    handleChanges = e => {
        e.preventDefault();
        this.setState({
            newTaskName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault(); 
        this.props.addNewTask(this.state.newTaskName);
    };

    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
            <input
            type="text"
            name="item"
            value={this.state.newTaskName}
            onChange={this.handleChanges}
            />
            <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;