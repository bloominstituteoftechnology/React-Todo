import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTask = e => {
        e.preventDefault();
        this.setState({ task: "" });
        this.props.addTask(this.state.task);
    };

    render() {
        console.log("rendering form");
        return (
            <form onSubmit={this.submitTask}>
                <input
                    type="text"
                    value={this.state.task}
                    name="task"
                    onChange={this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;
