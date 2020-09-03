import React from 'react';

class TodoForm extends React.Component {
    state = {
        todo:""
    }

    //onChange
    handleChanges = (e) => {
        this.setState({
            todo:e.target.value
        })
    }
    //on submit
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.todo)
        this.setState({
            todo:""
        })
    }

    render() {
    return (
        <form onSubmit = {this.handleSubmit}>
        <input 
        type = "text"
        name = "task"
        value = {this.state.todo}
        onChange = {this.handleChanges}
        />
        <button>Add Task</button>
        </form>
    )
    }
   
  }


export default TodoForm;