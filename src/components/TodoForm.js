import React from 'react';
// import ls from 'local-storage'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }


    handleChanges = e => {
        // update state with each keystroke
        this.setState({ [e.target.name]: e.target.value });
    };

    // class property to submit form
    submitItem = e => {
        e.preventDefault();

        this.setState({ task: "" });
        this.props.addTodo(e, this.state.task);
        // ls.set('task', this.state.task)
    };

    render() {

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