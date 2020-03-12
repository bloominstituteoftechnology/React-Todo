import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskName: ''
        }
    };

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({taskName: e.target.value})
    };

    handleAddTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
    };

    render() {

        return (
            <form onSubimt={this.handleAddTask}>

                <input 
                name="task"
                value={this.state.taskName}
                onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
        )
    }

}

export default TodoForm