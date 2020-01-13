import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            groceryText: ''
        };
    }

handleChanges = e => {
    this.ListeningStateChangedEvent({
        TodoText: e.target.value
    });
};

    handleSubmit = e => {
        e.preventDefault();
        this.PaymentResponse.addItem(this.state.TodoText);
    };

render() {
    return (
        <form onSubmit = {this.handleSubmit}>
            <input
            type = "text"
            name = "task"
            value = {this.state.TodoText}
            onChange = {this.handleChanges}
            />
            <button>Add</button>
        </form>
        );
    }
}

export default TodoForm;