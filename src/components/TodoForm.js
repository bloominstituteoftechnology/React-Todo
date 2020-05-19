import React from 'react';

class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={(event) => {
                event.persist();
                this.props.handleFormSubmit(event)
            }}>
                New Task: <input type="text" name="task" onChange={(event) => {
                event.persist();
                this.props.handleFormChange(event)
            }} value={this.props.newTask.task}/>
                <button onClick={(event) => {
                    event.persist();
                    this.props.handleFormSubmit(event)
                }}>Add This Task
                </button>
            </form>
        )
    }
}

export default TodoForm;
