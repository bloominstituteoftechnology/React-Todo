// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    handleChanges = (event) => {
        this.setState({task:event.target.value}) 
    }

    submitTask = (event) => {
        event.preventDefault()
        this.props.addTask(this.state.task)
    }

    
    render() {
        return (
            <form onSubmit={this.submitTask}>
                <label htmlFor='task'>Task</label>
                <input 
                    id='task'
                    type='text'
                    value={this.state.task}
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button onClick={this.props.clearPurchased}>Clear Completed</button>
            </form>
        )
    }
}


export default TodoForm;
