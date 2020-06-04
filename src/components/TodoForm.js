import React from "react";
import { render } from "@testing-library/react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ""
        }
    };

    handleChange = event => {
        event.preventDefault();
        this.setState({ item: event.target.value});
    }

    submitForm = event => {
        console.log(this.state.item);
        event.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({item: ''});
    }


render() {
    return (
        <div className="form-box">
        <form onSubmit={this.submitForm}>
            <input onChange={this.handleChange} value={this.state.item} type="text" name="task" />
            <button type="submit">Add</button>
        </form>
        <button onClick={this.props.clearItem}>Clear Completed</button>
        </div>
    )
}
};

export default TodoForm;