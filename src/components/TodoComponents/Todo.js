import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isEditing: false,
          task: this.props.task
      };
      this.handleUpdate = this.handleUpdate.bind(this);
  }  

    handleRemove = () => {
        this.props.removeTodo(this.props.id);
    }

    toggleForm = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    handleUpdate = event => {
        event.preventDefault();
        this.props.updateTodo(this.props.id, this.state.task);
        this.setState({ 
            isEditing: false 
        });
    }

    handleChange = event => {
        this.setState({ 
            task: event.target.value 
        });
    };

    handleToggle = event => {
        this.props.toggleTodo(this.props.id);
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            );
        } else {
            result = (
                <div>
        <button onClick={this.toggleForm}>Edit{" "}</button>
                    <button onClick={this.handleRemove}>{" "}Delete</button>
                    <li className={this.props.completed ? 'completed' : ""} onClick={this.handleToggle}>
                    {this.props.task}</li>
                </div>    
            );
        }
        return result;
    }
}

export default Todo;

