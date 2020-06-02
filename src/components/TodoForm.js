import React, { Component } from 'react'

class TodoForm extends Component {
constructor(props) {
    super(props);

    this.state = {
         item: "",
    };
}

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ""
        });
    };

    render() {
        console.log("render form")
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    id={Date.now()}
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm
