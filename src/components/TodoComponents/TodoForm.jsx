import React, { Component } from 'react';

class TodoForm extends Component {
    state = {
        taskName: ""
    }

    handleChanges = event => {
        console.log(event.target.value);
    
        //save on state, message
        this.setState({
          [event.target.name]: event.target.value
        });
      };

      addTask = event => {
          event.preventDefault();
          this.props.addTask(this.state.taskName)
          this.setState({taskName: ""})
      }

    render() {
        return (
            <form onSubmit={this.addTask}>
                <input
                    placeholder="task name"
                    onChange={this.handleChanges}
                    value={this.state.taskName}
                    name="taskName" 
                />
     <button>Add Task</button>
     <button>Clear completed</button>
</form>
        );
    }
}

export default TodoForm;
