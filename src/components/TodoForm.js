import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: ""
        };
    }

    handleChanges = (e) => {
        this.setState({item: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {id: Date.now(), task: this.state.item, completed: false};
        this.props.addItem(newTodo);
        this.setState({ item: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    placeholder="New todo item..."
                    onChange={this.handleChanges}
                    name="input"
                    value={this.state.item}
                ></input>
                <button
                    type="submit"
                >
                    Add Item
                </button>
                <button type="button" onClick={this.props.clearCompleted}>
                    Clear Completed Items
                </button>
            </form>
        )
    }
}

export default TodoForm;