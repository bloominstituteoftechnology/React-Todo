import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        // update state with each keystroke
        this.setState({
            input:e.target.value
        });
    };

    // class property to submit form
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges} type="text"
                name="toDoItem" />
                <button>Add to to do list</button>
            </form>
        );
    }
}

export default TodoForm;
