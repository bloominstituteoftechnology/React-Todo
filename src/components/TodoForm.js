import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form onSubmit={this.props.handleFormSubmit}>
                <h2>Add Task</h2>
                Task Name: <input type="text" name="task" onChange={(event) => {
                event.persist();
                this.props.handleFormChange(event)
            }} value={this.props.newTask.task}/>
            </form>
        )
    }
}

export default TodoForm;
