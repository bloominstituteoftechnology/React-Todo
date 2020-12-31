// `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = (event) => {
        this.setState({task:event.target.value}) 
        console.log(this.state);
    }

    initialState = {
        task: ""
    }

    submitForm = (event) => {
        event.preventDefault()
        this.setState(this.initialState)
    }

    render() {
        return (
            <form>
                <label htmlFor='task'>Task</label>
                <input 
                    id='task'
                    type='text'
                    onChange={this.handleChanges}
                />
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;