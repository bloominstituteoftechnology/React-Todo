import React from 'react';

class TodoForm extends React.Component {
    //constructor with state
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    //change handler
    handleChanges = e => {
        //updates the state with each keystroke
        this.setState({ item: e.target.value });
    };

    //class property to submit form
    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({ item: "" });
    };

    render() {
        return (
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChanges}
                />
            </form>
        );
    }
}

export default TodoForm;