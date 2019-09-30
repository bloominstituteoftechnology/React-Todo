//TodoForm

import React, { Component } from "react";

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            item: ""
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submitList = e => {
        e.preventDefault();
        this.props.addList(this.state.item)
    };

    removeList = e => {
        e.preventDefault();
        this.props.clearSelected(this.state.item);
    };

    render(){
        console.log("rendering")
        return(
            <form onSubmit={this.submitList}>
                <input
                type="text"
                value={this.item}
                name="item"
                onChange={this.handleChanges}
                />
                <button>Update</button>
            </form>
        );
    }
}

export default TodoForm;