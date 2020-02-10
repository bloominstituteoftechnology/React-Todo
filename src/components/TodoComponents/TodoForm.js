import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            listItem: ""
        };
    }

    handleChange = e => {
        this.setState({
            listItem: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.listItem !== "") {
            this.props.addItem(this.state.listItem);
            this.setState({
                listItem: ""
            });
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    name="listItem"
                    value={this.state.listItem}
                />
                <button type="submit">Add</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        );
    }
}

export default TodoForm;