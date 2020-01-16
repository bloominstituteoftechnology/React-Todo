import React from 'react';

class TodoForm extends React.Component {
    state = {
        newItem: {}
    };

    handleChanges = e => {
        this.setState({
            ...this.state,
            newItem: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewItem(this.state.newItem);
    };

    render() {
        return(
            <div className='form-todo'>
                <form onSubmit={this.handleChanges}>
                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='item'
                        value={this.state.newItem}
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