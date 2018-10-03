import React from 'react'
import './Todo.css'

class TodoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="TodoForm">

          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
            placeholder="...todo"/>
          <button onClick={(event) => this.props.addTask(event, this.state.value)}>Add task</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}

export default TodoForm;