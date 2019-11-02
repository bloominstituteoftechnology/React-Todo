import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ""
        }
    }

    handleChange = e => {
        this.setState({
            itemName: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.itemName !== "") {
            this.props.addItem(this.state.itemName);
            this.setState({
                itemName: ""
            })
        };
    };

    render() {
        console.log("Rendering form");
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChange}
                    type="text"
                    name="item"
                    value={this.state.itemName}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;