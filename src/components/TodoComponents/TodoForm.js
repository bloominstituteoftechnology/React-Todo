import React from 'react';

class TodoForm extends React.Component {
    state = {
        newTask: ''
    };

    handleChanges = e => {
        this.setState({
            ...this.state,
            newTask: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
    };

    render() {
        return(
            <div className='form-todo'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='task'
                        value={this.state.newTask}
                    />
                    <button>Add</button>                    
                </form>
                <button className='btn-clear' onClick={this.props.clearCompleted}>
                    Clear Completed
                </button>
            </div>
        )
    }
}

export default TodoForm;