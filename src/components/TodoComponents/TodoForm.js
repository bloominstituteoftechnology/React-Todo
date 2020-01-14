import React from "react";
import shortid from "shortid";
export default class TodoForm extends React.component {
    state = {
        text: ""
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            id: shortid.generate(),
            complete: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder="todo..."
                />              
            </form>
        );
    }
}