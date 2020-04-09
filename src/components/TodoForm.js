import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = event => {
        // update state with each keystroke
        this.setState({ [event.target.name]: event.target.value });
    };

    // class property to submit form
    submitItem = event => {
        event.preventDefault();

        this.setState({ task: "" });
        this.props.addTodo(event, this.state.task);
    };

    render() {
        // console.log('TodoForm.js', this.props.clearCompleted)

        return (
            <div className='todoform'>
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        name="task"
                        value={this.state.task}
                        onChange={this.handleChanges}
                    />
                    <button className='add-task'>Add Todo</button>
                </form>
                <button className='clear-button' onClick={this.props.clearCompleted}>
                    Clear Completed
                </button>
            </div>
        )
    }
}

export default TodoForm;