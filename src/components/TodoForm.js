import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ''
        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitItem = e => {
        e.preventDefault();
        this.setState({ task: ''});
        this.props.addTask(e, this.state.task)
    }



    render() {
        return(
            <form onSubmit={this.submitItem}>
                <input
                    type="text"
                    value={this.state.task}
                    name='task'
                    onChange={this.handleChanges}
                    />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm

