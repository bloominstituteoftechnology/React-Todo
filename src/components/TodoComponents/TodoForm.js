import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            task: '',
        };
    }

    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

    submitItem = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
    };

    render() {
        return (
        
                <form onSubmit={this.submitItem}>
                    <input
                        type="text"
                        placeholder='...todo'
                        value={this.task}
                        name="task"
                        onChange={this.handleChanges}
                    />
                    <button>Add Task</button>
                </form>
            
        )
    }
}

export default TodoForm