import React from 'react';

class TodoForm extends React.Component {
    state = {
        newTask: ''
    };

    handleChanges = e => {
        this.setState({...this.state, newTask: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTask(this.state.newTask);
        this.setState({...this.state, newTask: ''});
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
                        maxLength='200'
                    />
                    <button className='btn-add'>Add</button>                    
                </form>
                <button className='btn-clear' onClick={this.props.saveData}>
                    Save
                </button>
                <button className='btn-clear' onClick={this.props.loadData}>
                    Load
                </button>
                <button className='btn-clear' onClick={this.props.clearCompleted}>
                    Delete Selected
                </button>
            </div>
        )
    }
}

export default TodoForm;