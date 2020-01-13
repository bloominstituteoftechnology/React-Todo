import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemDescription: ''
        }
    }

    handleChanges = e => {
        this.setState({
            itemDescription: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.itemDescription.length > 0) {
            this.props.addTodoItem(this.state.itemDescription);
        }
        this.setState({
            itemDescription: ''
        });
    };
    handleClearCompleted = e => {
        e.preventDefault();
        this.props.clearAllCompletedItems();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="item"
                    value={this.state.itemDescription}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
                <button onClick={this.handleClearCompleted}>Remove Completed</button>
            </form>
        );
    }
}
export default TodoForm;