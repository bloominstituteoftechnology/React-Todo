import React from "react";

class TodoForm extends React.Component {
    //constructor with state
    constructor() {
        super();
        this.state = {
            newItem: ""
        };
    }

    //update state with each keystroke
    handleChanges = (e) => {
        this.setState({
            ...this.state,
            newItem: e.target.value
        });
    };

    //class method to submit form 
    submitItem = (e) => {
        e.preventDefault();
        console.log(this.state.newItem);
        this.props.addItem(e, this.state.newItem);
        this.setState({ newItem: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    value={this.state.newItem}
                    onChange={this.handleChanges}
                    type="text"
                    task="item"
                />
                <button type="submit">Add</button>
            </form>
        );
    }
}

export default TodoForm;