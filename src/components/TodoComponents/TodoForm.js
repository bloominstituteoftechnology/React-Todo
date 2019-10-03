import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        };
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.addTodo(event, this.state.value);

        this.setState({
            value: ""
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button>Add To-do</button>
            </form>
        );
    }
}

export default TodoForm;